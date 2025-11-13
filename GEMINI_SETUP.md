# How to Create a Gemini API Key

## Step-by-Step Guide

### 1. Go to Google AI Studio
Visit: **https://aistudio.google.com/**

### 2. Sign In
- Click "Sign in" in the top right corner
- Use your Google account to sign in

### 3. Get Your API Key
- Once signed in, click **"Get API Key"** button (usually in the top right)
- You'll see two options:
  - **Create API key in new project** (recommended for testing)
  - **Create API key in existing project** (if you have a Google Cloud project)
- Choose "Create API key in new project"
- Your API key will be generated and displayed

### 4. Copy Your API Key
- **IMPORTANT**: Copy the API key immediately - you won't be able to see it again!
- It will look something like: `AIzaSyAbCdEfGhIjKlMnOpQrStUvWxYz1234567`

### 5. Add to Your Project
Create a `.env` file in the root directory of your project:
```
GEMINI_API_KEY=your_actual_api_key_here
PORT=5000
```

### 6. Restart Your Server
```bash
npm run dev
```

## Available Models

The chatbot is currently configured to use **`gemini-2.0-flash`** which is:
- ✅ Free tier available
- ✅ Supports image recognition
- ✅ Fast response times
- ✅ Good for conversational AI

### Other Available Models (if you want to change):

1. **`gemini-2.0-flash`** (Current - Recommended)
   - Fast, efficient, free tier
   - Supports images and text
   - Latest stable version

2. **`gemini-2.5-flash`**
   - Newer version with improved performance
   - Supports images and text

3. **`gemini-2.0-flash-lite`**
   - Lightweight version
   - Faster, lower cost

4. **`gemini-2.5-pro`**
   - More advanced reasoning
   - Better for complex tasks
   - May have usage limits on free tier

To change the model, edit `server/index.js` line 84:
```javascript
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
```

## Free Tier Limits

- **60 requests per minute** (free tier)
- **1,500 requests per day** (free tier)
- No credit card required for free tier

## Troubleshooting

### "API key not valid" error
- Make sure you copied the entire key
- Check for extra spaces in your `.env` file
- Restart your server after adding the key

### "Quota exceeded" error
- You've hit the free tier limit
- Wait a few minutes and try again
- Or upgrade to a paid plan in Google Cloud Console

### Model not found error
- The model name might have changed
- Check available models at: https://ai.google.dev/models/gemini
- Update the model name in `server/index.js`

## Security Note

⚠️ **Never commit your `.env` file to Git!**
- The `.gitignore` file already excludes `.env`
- Keep your API key secret
- Don't share it publicly

