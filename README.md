# GitProfile — GitHub Profile Finder

GitProfile is a simple React-based web app that lets you search and view GitHub user profiles in real time using the GitHub API. It displays key profile details like avatar, bio, repositories, followers, following, location, company, and social links.

---

## 🚀 Features

- 🔎 Search GitHub users by username  
- 👤 Displays profile avatar, name, and username  
- 📊 Shows repositories, followers, and following count  
- 📝 Bio and join date display  
- 📍 Location and company info  
- 🐦 Twitter/X profile link (if available)  
- 🌐 Direct link to GitHub profile  
- ⚡ Loading and error handling included  

---

## 🛠️ Tech Stack

- React (useState)
- Axios (API requests)
- GitHub REST API
- React Icons
- Tailwind CSS (styling)

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/gitprofile.git
```

Navigate into the project:

```bash
cd gitprofile
```

Install dependencies:
```bash
npm install
```

Run the app:
```bash
npm run dev
```

## 🔑 Usage
Enter a valid GitHub username in the search bar
Click Search
View the profile details instantly

## 🌐 API Used
This project uses the public GitHub API:
```bash
https://api.github.com/users/{username}
```
No authentication is required for basic requests.

## 📸 Preview

![GitProfile Screenshot](src/assets/demo.png)

## ⚠️ Error Handling
Shows message if username is empty
Displays "User not found" for invalid usernames
Handles network/API errors gracefully


## 📁 Project Structure
```bash
src/
 ├── components/
 │    └── GithubSearch.jsx
 ├── App.jsx
 ├── main.jsx
 ``` 

## 👨‍💻 Author
Built by Amrita Kumari.💕

## 📜 License
This project is open source and free to use.