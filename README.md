# AI Conversational Image Recognition Chatbot

A modern web application that combines conversational AI with image recognition capabilities. Upload images and have natural conversations about them!

## Features

- 🖼️ **Image Recognition**: Upload images and get detailed descriptions
- 💬 **Conversational AI**: Natural language conversations with context awareness
- 🎨 **Modern UI**: Beautiful, responsive interface with smooth animations
- 📱 **Mobile Friendly**: Works seamlessly on desktop and mobile devices
- 🔄 **Session Management**: Maintains conversation context across messages

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key (free tier available)

## Setup

1. **Install dependencies:**
   ```bash
   npm run install-all
   ```

2. **Get a Gemini API key:**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Sign in with your Google account
   - Click "Create API Key" to generate a free API key

3. **Configure environment variables:**
   Create a `.env` file in the root directory:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=5000
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   This will start both the backend server (port 5000) and frontend dev server (port 3000).

4. **Open your browser:**
   Navigate to `http://localhost:3000`

## Usage

### Basic Features:
1. **Upload multiple files**: Click the folder icon (📁) to select multiple images, PDFs, or documents
2. **Camera capture**: Click the camera icon (📷) to capture and analyze images directly
3. **Voice input**: Click the microphone icon (🎤) to speak your message - converts speech to text automatically
4. **Ask questions**: Type your question about the files or ask general questions
5. **Stop generation**: Click the "Stop" button if the AI is taking too long to respond
6. **Save chats**: Click the save icon (💾) to save your conversation for later
7. **Load saved chats**: Click the saved chats icon to view and load previous conversations
8. **Generate reports**: Use the "Generate PDF Report" or "Generate Word Report" buttons to export your conversation

### Advanced Features:
- **Multiple file analysis**: Upload and analyze multiple images/documents at once
- **General questions**: Ask any question without uploading files - the AI will answer
- **Project reports**: Ask about project topics and generate professional reports in PDF or Word format
- **Chat history**: All chats are automatically saved to localStorage and can be saved permanently

## Project Structure

```
.
├── server/
│   └── index.js          # Express backend server
├── client/
│   ├── src/
│   │   ├── App.jsx       # Main React component
│   │   ├── App.css       # Styles
│   │   └── main.jsx      # React entry point
│   └── package.json      # Frontend dependencies
├── uploads/              # Temporary image storage (auto-created)
├── package.json          # Backend dependencies
└── README.md

```

## API Endpoints

- `POST /api/chat` - Send a message with optional files
  - Body: FormData with `message`, `files[]` (multiple), `sessionId`, and `requestId`
  - Returns: AI response
  - Supports: Images, PDFs, Documents (up to 10 files)

- `POST /api/chat/cancel` - Cancel an ongoing request
  - Body: `{ requestId: string }`
  - Returns: Success status

- `POST /api/chat/save` - Save chat history
  - Body: `{ sessionId: string, chatName: string }`
  - Returns: Saved chat filename

- `GET /api/chat/saved` - List all saved chats
  - Returns: Array of saved chat metadata

- `GET /api/chat/load/:filename` - Load a saved chat
  - Returns: Chat data with messages

- `POST /api/generate-report` - Generate PDF or Word report
  - Body: `{ content: string, title: string, format: 'pdf'|'docx', sessionId: string }`
  - Returns: File download

- `GET /api/health` - Health check endpoint

## Technologies Used

- **Frontend**: React, Vite, Axios
- **Backend**: Node.js, Express, Multer
- **AI**: Google Gemini 2.0 Flash (Free tier, fast and efficient)
- **Report Generation**: PDFKit (PDF), docx (Word documents)
- **Styling**: CSS3 with modern gradients and animations

## Notes

- Files are temporarily stored and automatically deleted after processing
- Maximum file size: 20MB per file
- Supported formats: 
  - Images: JPEG, PNG, GIF, WebP
  - Documents: PDF, DOC, DOCX, TXT
- Multiple files can be uploaded at once (up to 10 files)
- Conversation history is maintained per session (last 30 messages)
- Chats are automatically saved to browser localStorage
- Camera access requires user permission
- Voice input uses Web Speech API (supported in Chrome, Edge, Safari)
- Microphone permission required for voice input
- Report generation creates downloadable PDF or Word documents

## License

MIT

