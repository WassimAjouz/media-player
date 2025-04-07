# 🎵 Angular Mini Media Player

An Angular-based mini media player that allows you to generate shareable links and keeps track of your previously generated links locally.

## 🚀 Features

- Play MP3 audio files with a custom image and title
- Generate and store shareable links
- Track previous links in local storage
- Basic authentication using session storage
- No backend needed – everything runs on the frontend using browser storage

---

## 🛠️ Installation

1. **Clone the repository**

   ```bash
    git clone https://github.com/WassimAjouz/media-player.git
    cd media-player
   ```

2. **Make sure you have [Node.js](https://nodejs.org/) and Angular CLI installed**

   ```bash
   npm install -g @angular/cli
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Run the app**

   ```bash
   ng serve
   ```

   Then navigate to: `http://localhost:4200`
    Username: podeo
    Password: 123456
---

## 📦 How It Works

### 📁 Authentication

- Basic login system using **session storage**.
- User credentials (username & password) are stored in a session object.
- The app checks this data on login to authenticate users.

### 📥 Current Link

- A special session storage item called `currentLinkObj` stores the **current MP3 URL, image URL, and title**.
- On app load, it defaults to the provided values unless changed.
- The media player reads from this object to load the current media.

### 🕓 Link History

- Previously generated links are stored in a `previousLinks` array in **session storage**.
- Each item is a JSON object containing:
  - `mp3Url`
  - `imageUrl`
  - `title`
- When a new link is created via the form, it:
  1. Replaces the `currentLinkObj`.
  2. Appends the new link to the `previousLinks` array.

---

## 📌 Notes

- This project uses **session and local storage** as a mock database – no backend or API involved.

---

## 🧑‍💻 Author

Made with ❤️ by [Wassim]
