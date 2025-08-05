# Jammming iTunes 🎵

A React-based music playlist builder that uses the iTunes Search API. Search for songs, preview them, build a playlist, and save it for later!

## 🚀 Features

- 🔍 Search the iTunes library by song title
- 🎧 Preview 30-second audio clips directly in the browser
- ➕ Add or remove songs from a custom playlist
- ✏️ Rename your playlist
- 💾 Save your playlist below for easy access (with more export features coming soon!)
- ⚡ Responsive and interactive UI built with React and CSS Modules

## 🎬 Demo

> Coming soon – 

## 🛠️ Built With

- React (with functional components & hooks)
- JavaScript (ES6+)
- CSS Modules
- iTunes Search API
- React Icons

## 📁 File Structure

```
├── src
│   ├── assets
│   ├── components
│   │   ├── App
│   │   │   ├── App.jsx
│   │   │   └── App.module.css
│   │   ├── Playlist
│   │   │   ├── Playlist.jsx
│   │   │   └── Playlist.module.css
│   │   ├── Search Bar
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchBar.module.css
│   │   └── Search Results
│   │       ├── SearchResults.jsx
│   │       └── SearchResults.module.css
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

## 🚀 Future Features

- User login & playlist export to Spotify or Apple Music via OAuth 2.0 
- Ability to reorder tracks in the playlist (drag and drop)  
- Local playlist saving via `localStorage`  
- Track previewing directly from saved playlists  


## 💡 Why I Built This

I built this project to practice working with APIs, React state management, and dynamic UI rendering.  
I also wanted to create something fun and interactive that mimics real-world music apps.


## 📚 Learnings

- Gained experience working with API fetch calls and handling JSON responses  
- Learned how to manage state and props effectively in a multi-component React app  
- Practiced conditionally rendering elements based on state  
- Gained confidence using `useRef` for audio playback control  
- Experimented with third-party icon libraries and modular CSS


## 🙏 Acknowledgements

- Thanks to the iTunes Search API for providing a free way to search and fetch music data  
- React Icons for easy-to-use, scalable vector icons   
- Inspiration taken from the Codecademy Jammming project idea