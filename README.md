# 🗳️ VoteFlow

**VoteFlow** is a real-time polling platform built with the **MERN stack (MongoDB, Express.js, React, Node.js)**. It allows users to create, share, and vote on polls with **instant results visualization** using charts and real-time updates via **Socket.io**.

---

## 📌 Problem Statement

- Existing polling tools lack **real-time updates**, making results feel static.  
- Users need a **simple and user-friendly** way to create and share polls.  
- Free tools often **lack QR code integration and data analytics**.

---

## 🎯 Goals & Objectives

| Goal                | Objective                                            |
|---------------------|------------------------------------------------------|
| Real-Time Engagement | Instant vote updates for all users                  |
| Ease of Use         | Create and share polls with minimal effort           |
| Accessibility       | Mobile-first design with QR code sharing             |
| Data Insights       | Visualize results with charts and basic analytics    |

---

## ✅ Features

### 📌 Core Features

| Feature           | Description                                             |
|------------------|---------------------------------------------------------|
| Poll Creation     | Add questions, options, and configure poll settings     |
| Real-Time Voting  | Live vote updates with **Socket.io**                    |
| QR Code Sharing   | Easily share polls with generated QR codes              |
| Chart Visualizations | See results in **Pie/Bar charts** (Chart.js)       |

### 🚀 Advanced Features

| Feature               | Description                                         |
|----------------------|-----------------------------------------------------|
| User Authentication   | JWT-based login/signup                              |
| Time-Bound Polls      | Automatically close polls after a deadline          |
| Multiple-Choice Polls | Allow users to select multiple options              |

---

---

## ⚙️ Technical Specifications

### 🛠 Tech Stack

| Layer       | Technology                                                  |
|-------------|-------------------------------------------------------------|
| Frontend    | React.js, Chart.js, qrcode.react, Socket.io-client          |
| Styling     | CSS Modules, Flexbox/Grid                                   |
| Backend     | Node.js, Express.js, Socket.io                              |
| Database    | MongoDB (Mongoose)                                          |
| Auth        | JWT + Bcrypt                                                |
| Deployment  | Frontend: Netlify/Vercel, Backend: Render                   |

## 📡 API Endpoints

| Endpoint         | Method | Description              |
|------------------|--------|--------------------------|
| `/api/polls`     | POST   | Create a new poll        |
| `/api/polls/:id` | GET    | Fetch poll data          |
| `/api/polls/vote`| PUT    | Submit a vote            |

- Frontend: [GitHub](https://github.com/MAT1018/VoteFlow/tree/main/frontend)  
- Backend: [GitHub](https://github.com/MAT1018/VoteFlow/tree/main/backend)  

---
🚀 Steps to Run Locally

`git clone https://github.com/MAT1018/VoteFlow.git
cd VoteFlow`

`cd frontend`

`npm install`

`npm start`

## 📄 Reference

 [📑 Project Doc on Google Docs](https://docs.google.com/document/d/1yeC7KHB_PKVr9jR19xHVd7gIIJrbTa0Zg_wEaj_E_YY/edit?tab=t.0)

📧[ayaan.taimur1@gmail.com](mailto:ayaan.taimur1@gmail.com)
