# 🍽️ Canteen Management System

A full-stack, microservices-based web application for managing canteen operations.

It streamlines **food ordering, menu management, and payment processes**, enabling admins to manage menus and orders, while customers can browse menus, place orders, and make secure payments online.

Frontend built with **React.js** & **Tailwind CSS**, connected to a **Spring Boot**, **ASP.NET Core**, and **Node.js** backend architecture with **MySQL** & **MongoDB**.

---

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ React.js
- 💨 Tailwind CSS
- 🌐 React Router
- 🔐 JWT Authentication *(planned)*
- ⚙️ Axios for API calls

### **Backend (Microservices Architecture)**

**Frameworks & Services:**
- Spring Boot (Java)
- ASP.NET Core API (.NET)
- Node.js with Express.js

**Databases:**
- MySQL
- MongoDB

**Tools & Extras:**
- Maven (build automation)
- Payment Gateway Integration (Razorpay)
- Docker (Backend services containerization)
- Railway (Backend deployment)
- Render (Backend deployment)

---

## 📁 Folder Structure

```
Canteen-Management-System/
├── APIGateway/                # API Gateway for routing requests
├── Backend/                   # All backend services
│   ├── canteen-backend/       # Spring Boot backend
│   │   └── Dockerfile         # Docker config for Spring Boot
│   ├── dot-net-services/      # ASP.NET Core backend
│   │   └── Dockerfile         # Docker config for .NET
│   └── OrderService/          # Node.js + Express backend
│       └── Dockerfile         # Docker config for Node.js
├── Frontend/
│   └── my-react-app/          # React + Tailwind frontend
└── .gitignore
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/NakulKait/Canteen-Management-System.git
cd Canteen-Management-System
```

## 💻 Run Locally

#### 1️⃣ Run the **Frontend**

```bash
cd Frontend/my-react-app
npm install
npm run dev
```

**Visit:** http://localhost:5173

#### 2️⃣ Run Backend Services Manually

**Spring Boot service:**
```bash
cd Backend/canteen-backend
mvn spring-boot:run
```

**.NET Core service:**
```bash
cd Backend/dot-net-services
dotnet run
```

**Order Service:**
```bash
cd Backend/OrderService
npm install
mvn spring-boot:run
```
**API Gateway**
```bash
cd APIGateway
node index.js
```
---

## ✨ Features

- 🔐 Role-based access (Admin / Customer)
- 📜 Menu & Order Management
- 💳 Secure Payments (Razorpay)
- 🛒 Cart & Checkout
- 📊 Order History
- 📢 Notifications & Status Updates

---

## 🌐 Deployment

### **Frontend**
🔗 **Live Demo:** [Canteen Management System](https://canteen-management-system-theta.vercel.app/)
- **Platform:** Vercel
- **Auto-deployment:** Connected to main branch

### **Backend Services**
🚂 **Render Deployment:**
- **Spring Boot API:** [https://your-dotnet-api.onrender.com](https://canteen-management-system-pidg.onrender.com/swagger-ui/index.html)
- **Order Service:**

🎭 **Railway Deployment:**
- **ASP.NET Core API:** [https://your-app.railway.app](http://canteen-management-system-production-1b78.up.railway.app)

### **Database**
- **MySQL:** Hosted on Railway
- **MongoDB:** MongoDB Atlas

---

## 👥 Team

- **Om Bongulwar**
- **Nakul Kait**
- **Deviprasad Nallaboina**
- **Piyusha Desai**

---

## 📌 Branching Strategy

We use a single `main` branch for development and deployment.

Feature updates and fixes are committed directly or via pull requests.

---


## 📞 Support

If you have any questions or need support, please reach out to the team members listed above.
