# personal-notes-app-


A fullstack note-taking app with **JWT-based authentication**, **protected routes**, and **file-based data persistence**. Users can securely sign up, log in, and manage their personal notes.

---
## Deployement link
- Backend:https://personal-notes-app-w5ue.onrender.com
- Frontend:

## 🚀 Features

- ✅ User Signup and Login with JWT
- ✅ Protected note operations (create, fetch, delete)
- ✅ Notes tied to authenticated users
- ✅ Data saved to `users.json` and `notes.json`
- ✅ Responsive frontend with animated background
- ✅ Vanilla JS frontend with clean UI

---

## 📁 Folder Structure

![image](https://github.com/user-attachments/assets/fac03274-891c-42e6-9edd-1b5730a938e7)




---

## ⚙️ Setup Instructions

### Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
Install dependencies:


npm install
Start the server:

- node server.js
- Ensure data files exist:
- mkdir -p data
- echo "[]" > data/users.json
- echo "[]" > data/notes.json
- Server will run at http://localhost:3000

# Frontend
- You can open the HTML files directly in your browser or serve them with a local server.

- Recommended:

- Use the Live Server extension in VS Code.


# Example structure to open
- frontend/signup.html
- frontend/login.html
- frontend/dashboard.html
# 🔐 API Endpoints
- Auth
- Method	Endpoint	Description
- POST	/signup	Register user
- POST	/login	Authenticate user

- Notes (requires JWT in Authorization: Bearer <token> header)
- Method	Endpoint	Description
- POST	/notes	Create a note
- GET	/notes	Get all user notes
- DELETE	/notes/:id	Delete note by ID

🧪 Sample Note Object
---
{
  "id": "note-id",
  "title": "My First Note",
  "content": "Learning fullstack is fun!",
  "userId": "id-from-jwt",
  "createdAt": "2025-05-13T10:00:00Z"
}---
🌈 UI Enhancements
- Animated background gradient

- Smooth transitions on form fields and buttons

- Responsive form layout

- ❗ Security Notes
- Passwords are stored in plain text (for learning purposes). Use bcrypt for hashing in production.

- J- WT is stored in localStorage. In real-world apps, use HttpOnly cookies for better security.

# 📋 Future Improvements
-  Edit note (PUT /notes/:id)

 - Token expiry handling (auto logout)

 - Input validations & error UI

 - Password hashing

 - Pagination and search for notes


 # Sign up
 ![image](https://github.com/user-attachments/assets/c8b5af14-3dfa-48fc-8cdd-b6b62cda6ad6)

 # Login
 ![image](https://github.com/user-attachments/assets/d67440f5-f7c0-478d-b568-5931b2d3eb33)
 # Dashboard 
 ![image](https://github.com/user-attachments/assets/8420ddc2-62ed-4803-9bd9-27f85d58b5cf)

