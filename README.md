# 💬 Online Chat App - Backend

A secure and scalable backend for a real-time online chat application built with **Node.js**, **Express.js**, **MongoDB**, and **Socket.IO**. It supports user authentication, real-time messaging, image sharing, and online user status.

---

## 🚀 Features

- 🔐 User Authentication (JWT)
- 🔒 Password Hashing (bcrypt)
- 👤 User Registration & Login
- 💬 Real-Time Messaging (Socket.IO)
- 🖼️ Image Upload (Cloudinary)
- 🟢 Online / Offline User Status
- 📩 Store Chat Messages in MongoDB
- 🛡️ Protected Routes
- 🍪 JWT Authentication with Cookies
- 🌐 CORS Enabled
- ⚡ RESTful API Architecture
- 📂 MVC Folder Structure
- 🔄 Error Handling Middleware

---

## 🛠️ Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO

### Authentication

- JWT (JSON Web Token)
- bcryptjs

### File Upload

- Cloudinary
- Multer

### Other Packages

- dotenv
- cookie-parser
- cors
- nodemon

---

## 📁 Project Structure

```
backend/
│
├── config/
│   ├── db.js
│   ├── cloudinary.js
│
├── controllers/
│   ├── auth.controller.js
│   ├── message.controller.js
│
├── middleware/
│   ├── auth.middleware.js
│
├── models/
│   ├── User.js
│   ├── Message.js
│
├── routes/
│   ├── auth.route.js
│   ├── message.route.js
│
├── lib/
│   ├── socket.js
│
├── utils/
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## 📦 Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/chat-app-backend.git
```

```bash
cd chat-app-backend
```

### Install Dependencies

```bash
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

NODE_ENV=development
```

---

## ▶️ Run the Server

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

## 🔑 Authentication APIs

### Register User

```
POST /api/auth/signup
```

### Login User

```
POST /api/auth/login
```

### Logout User

```
POST /api/auth/logout
```

### Get Logged-In User

```
GET /api/auth/check
```

---

## 💬 Message APIs

### Send Message

```
POST /api/messages/send/:id
```

### Get Messages

```
GET /api/messages/:id
```

---

## 📄 User Model

```javascript
{
  fullName: String,
  email: String,
  password: String,
  profilePic: String,
  createdAt: Date
}
```

---

## 📄 Message Model

```javascript
{
  senderId: ObjectId,
  receiverId: ObjectId,
  text: String,
  image: String,
  createdAt: Date
}
```

---

## 🔒 Security

- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Secure Cookies
- Environment Variables
- MongoDB Validation

---

## ⚡ Socket.IO Events

### Client → Server

- userConnected
- sendMessage

### Server → Client

- receiveMessage
- onlineUsers
- userDisconnected

---

## 🧪 API Testing

Use:

- Postman
- Thunder Client

---

## 📌 Future Improvements

- ✅ Typing Indicator
- ✅ Message Seen Status
- ✅ Group Chat
- ✅ Voice Messages
- ✅ Video Calling
- ✅ Push Notifications
- ✅ Delete Message
- ✅ Edit Message
- ✅ Search Users
- ✅ Emoji Support

---

## 👨‍💻 Author

**Ashokkumar T**

- GitHub: https://github.com/ashokkumar2005

---

## 📜 License

This project is licensed under the MIT License.

---

⭐ If you like this project, don't forget to give it a star!
