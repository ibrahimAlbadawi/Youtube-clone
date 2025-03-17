# YouTube Clone

A modern YouTube clone built with **React 19**, **Vite**, and **Material-UI (MUI)**. This project showcases video playback, search functionality, and a clean UI using MUI components.

## 🚀 Features
- 🎥 Video Playback using `react-player`
- 🔍 Search Functionality
- 🎨 Styled with **Material-UI (MUI)**
- ⚡ Fast development with **Vite**
- 🔄 Routing with `react-router-dom`
- 📡 API Calls using `axios`

## 🛠️ Tech Stack
- **React 19**
- **Vite** (for fast builds and hot module replacement)
- **Material-UI (MUI)** for UI components
- **React Router** for navigation
- **Axios** for API requests
- **React Player** for embedding videos
- **ESLint** for code linting

## 📦 Installation

Clone the repository and install dependencies:

```sh
# Clone the repo
git clone https://github.com/YOUR_USERNAME/youtube_clone.git
cd youtube_clone

# Install dependencies
npm install
```

## 🔑 API Key Configuration
This project uses **RapidAPI** for fetching video data. You need to set up an `.env` file in the root directory with your API key.

1. Create a `.env` file:
   ```sh
   touch .env
   ```

2. Add your **RapidAPI Key** to the `.env` file:
   ```env
   VITE_RAPID_API_KEY=your_rapid_api_key_here
   ```

3. Restart the development server after adding the key.

## 🚀 Running the Project
To start the development server:
```sh
npm run dev
```
The app should now be running at `http://localhost:5173/` (or a similar port).

## 🏗️ Building for Production
To create an optimized production build:
```sh
npm run build
```
Then, preview the production build:
```sh
npm run preview
```

## 📂 Project Structure
```
📦 youtube_clone
├── 📁 src
│   ├── 📁 components   # Reusable UI components
│   ├── 📁 pages        # Page components (Home, Video, etc.)
│   ├── 📁 assets       # Static assets (images, icons, etc.)
│   ├── 📜 App.jsx      # Main React component
│   ├── 📜 main.jsx     # Entry point
├── 📜 package.json     # Project dependencies & scripts
├── 📜 vite.config.js   # Vite configuration
├── 📜 .eslintrc.json   # ESLint configuration
└── 📜 README.md        # Documentation
```

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a Pull Request

## 📜 License
This project is licensed under the MIT License.

---

## Note
This project was taken from JS Mastery on Youtube
