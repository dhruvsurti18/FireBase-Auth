# **FIREBASE AUTHENTICATION SYSTEM**

A simple **User Authentication System** built using **React (Vite), Firebase Authentication, React Router, and Material UI**.
This application allows users to **register, login, manage their profile, and securely access a protected dashboard**.

---

# **🚀 FEATURES**

* User Registration with Email & Password
* Secure User Login
* Protected Dashboard Route
* Logout functionality
* Update User Profile
* Display Name & Profile Picture update
* Firebase Authentication integration
* Clean and professional UI using Material UI

---

# **🛠 TECHNOLOGIES USED**

* React (Vite)
* Firebase Authentication
* React Router DOM
* Material UI
* JavaScript (ES6)

---

# **📂 PROJECT STRUCTURE**

```
src
│
├── firebase
│   └── firebase.js
│
├── components
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   └── PrivateRoute.jsx
│
├── App.jsx
└── main.jsx
```

---

# **⚙️ INSTALLATION**

Clone the repository

```
git clone https://github.com/your-username/firebase-auth-system.git
```

Navigate to the project directory

```
cd firebase-auth-system
```

Install dependencies

```
npm install
```

Start the development server

```
npm run dev
```

---

# **🔥 FIREBASE SETUP**

1. Go to Firebase Console
2. Create a new project
3. Add a Web App to the project
4. Enable **Authentication**

```
Build
→ Authentication
→ Sign-in method
→ Enable Email/Password
```

Copy the Firebase configuration and paste it inside:

```
src/firebase/firebase.js
```

Example configuration:

```
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "XXXX",
  appId: "XXXX"
}
```

---

# **📊 FUNCTIONALITY**

### User Registration

Users can create a new account using email and password.

### User Login

Registered users can log in securely using Firebase Authentication.

### Dashboard Access

The dashboard is protected and only accessible to authenticated users.

### User Profile Management

Users can update their display name and profile picture.

### Logout

Users can securely log out from the dashboard.

---

# **🔐 SECURITY**

* Firebase Authentication manages secure login and user sessions.
* Protected routes prevent unauthorized access to the dashboard.

---

# **📌 FUTURE IMPROVEMENTS**

* Google Sign-In
* Password Reset
* Auth State Listener
* User Profile Editing UI improvements

---

# **👨‍💻 AUTHOR**

Developed by **Dhruv Surti**

---

# **⭐ SUPPORT**

If you like this project, please consider giving it a **star on GitHub**.
