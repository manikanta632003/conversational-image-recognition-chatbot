// Helper script to check available Gemini models
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

async function listAvailableModels() {
  if (!process.env.GEMINI_API_KEY) {
    console.error('❌ GEMINI_API_KEY not found in .env file');
    return;
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // Try to list models via API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models?key=${process.env.GEMINI_API_KEY}`
    );
    
    if (response.ok) {
      const data = await response.json();
      console.log('\n✅ Available Gemini Models:\n');
      if (data.models) {
        data.models.forEach(model => {
          console.log(`   - ${model.name}`);
        });
      }
    } else {
      console.log('\n⚠️  Could not fetch model list automatically.');
      console.log('   Trying common model names...\n');
      
      // Try common model names
      const commonModels = [
        'gemini-1.5-pro',
        'gemini-1.5-flash',
        'gemini-pro',
        'gemini-pro-vision',
        'gemini-1.0-pro'
      ];
      
      for (const modelName of commonModels) {
        try {
          const model = genAI.getGenerativeModel({ model: modelName });
          // Try a simple test
          await model.generateContent('test');
          console.log(`   ✅ ${modelName} - WORKS!`);
        } catch (err) {
          console.log(`   ❌ ${modelName} - Not available`);
        }
      }
    }
  } catch (error) {
    console.error('Error checking models:', error.message);
    console.log('\n💡 Common working models:');
    console.log('   - gemini-1.5-pro');
    console.log('   - gemini-pro');
    console.log('   - gemini-pro-vision');
  }
}

listAvailableModels();

