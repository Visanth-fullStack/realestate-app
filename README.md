# Real estate System

This application is a property management system with a React frontend, Node.js and Express backend, and MongoDB database.

## Technologies Used

- Frontend: React.js with Styled Components for styling
- Backend: Node.js with Express.js
- Database: MongoDB

## Features

### Authentication
- Automatic redirection to login screen if not authenticated or if the token is expired (for both customers and admins)

### Admin Features
- Login or register as a new account
- View, add, edit, delete, and update properties
- View all clients, including their email, phone, and property viewing limits
- Delete and update client information
- Assign or update property assignments for clients from available properties

### Client Features
- View homepage
- Sign up for an account
- Login to view assigned properties
- Restricted from creating, updating, or deleting properties
- Cannot view information about other clients or admins

## Installation

1. Clone the repository.
2. cd folder_name.
3. cd backend and npm install.
4. To run the backend, use node index.js and server will be running on 5000.
5. cd to home folder and cd frontend and npm install.
6. To run the frontend, use npm run start and frontend will be running in port 3000.

## .env for Backend
```
MONGODB_URI = <Your Database>
JWT_SECRET = <Your Secret>
JWT_EXPIRES_IN = 1h
```

