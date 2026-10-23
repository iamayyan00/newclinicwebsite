# Solace Clinic of Alternative Medicine — Full-Stack Web Application

A modern, responsive, full-stack healthcare web application built with **React.js (Vite)**, **Node.js**, **Express.js**, and **MongoDB (Mongoose)** for **Solace Clinic of Alternative Medicine**, led by **Dr. Sana Naeemuddin Qureshi**, MD (Medicine) – Homeopathy.

---

## 🏥 Clinic & Project Overview

- **Clinic Name:** Solace Clinic of Alternative Medicine
- **Doctor:** Dr. Sana Naeemuddin Qureshi
- **Qualification:** MD (Medicine) – Homeopathy
- **Experience:** 7+ Years of Clinical Practice
- **Address:** Ayaan Tower Shop No 8, Ground Floor, Degloor Naka, Nanded, Maharashtra – 431604, India
- **Phone:** `+91-8378977703`
- **WhatsApp:** `+91-8378977703` / `+91-7720965788`
- **Email:** `info@clinic.com`
- **OPD Timings:** Monday to Saturday: 12:00 PM – 8:00 PM (Morning: 12:00 PM – 3:00 PM | Evening: 5:00 PM – 8:00 PM | Sunday: Closed / Emergency on call)

---

## 🚀 Technology Stack

### Frontend (`client/`)
- **React.js 18** with **Vite 6**
- **React Router DOM v6** for multi-page routing
- **Axios** for REST API communication
- **Plain CSS3** with Flexbox, CSS Grid, CSS Variables, and individual component stylesheets (*Strictly NO Tailwind, NO Bootstrap framework*)
- **FontAwesome 6** & Google Fonts (Outfit & Plus Jakarta Sans)

### Backend (`server/`)
- **Node.js** & **Express.js**
- **MongoDB** with **Mongoose ODM**
- **Helmet** for HTTP security headers
- **CORS** for cross-origin security
- **Express Rate Limit** to prevent automated spam and abuse
- **Morgan** for HTTP request logging
- **Validator** for robust field-level validation

---

## 📁 Project Folder Structure

```text
newclinicwebsite/
├── client/                               # React + Vite Frontend
│   ├── public/
│   │   ├── images/                       # Clinic logo, photos
│   │   └── gallery/                      # High-res clinic gallery photos
│   ├── src/
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   └── gallery/
│   │   ├── components/                   # Reusable components (each with separate CSS)
│   │   │   ├── Navbar.jsx & Navbar.css
│   │   │   ├── Footer.jsx & Footer.css
│   │   │   ├── HeroSection.jsx & HeroSection.css
│   │   │   ├── DoctorProfileCard.jsx & DoctorProfileCard.css
│   │   │   ├── ServiceCard.jsx & ServiceCard.css
│   │   │   ├── FacilityCard.jsx & FacilityCard.css
│   │   │   ├── GalleryGrid.jsx & GalleryGrid.css
│   │   │   ├── ReviewCard.jsx & ReviewCard.css
│   │   │   ├── AppointmentForm.jsx & AppointmentForm.css
│   │   │   ├── ContactSection.jsx & ContactSection.css
│   │   │   ├── WhatsAppButton.jsx & WhatsAppButton.css
│   │   │   ├── LoadingSpinner.jsx & LoadingSpinner.css
│   │   │   ├── ErrorMessage.jsx & ErrorMessage.css
│   │   │   └── ScrollToTop.jsx
│   │   ├── pages/                        # Website pages (each with separate CSS)
│   │   │   ├── Home.jsx & Home.css
│   │   │   ├── About.jsx & About.css
│   │   │   ├── DoctorProfile.jsx & DoctorProfile.css
│   │   │   ├── Services.jsx & Services.css
│   │   │   ├── Facilities.jsx & Facilities.css
│   │   │   ├── Appointment.jsx & Appointment.css
│   │   │   ├── Gallery.jsx & Gallery.css
│   │   │   ├── Reviews.jsx & Reviews.css
│   │   │   ├── Timing.jsx & Timing.css
│   │   │   ├── Contact.jsx & Contact.css
│   │   │   ├── PrivacyPolicy.jsx & PrivacyPolicy.css
│   │   │   ├── TermsConditions.jsx & TermsConditions.css
│   │   │   └── NotFound.jsx & NotFound.css
│   │   ├── routes/
│   │   │   └── AppRoutes.jsx
│   │   ├── services/
│   │   │   └── appointmentService.js
│   │   ├── styles/                       # Shared styling tokens
│   │   │   ├── variables.css             # Colors, typography, shadows
│   │   │   ├── global.css                # Base resets and typography
│   │   │   └── responsive.css            # Shared container breakpoints
│   │   ├── App.jsx & App.css
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── server/                               # Node.js + Express Backend
│   ├── config/
│   │   └── db.js                         # MongoDB connection logic
│   ├── models/
│   │   ├── Appointment.js                # Mongoose Appointment schema
│   │   └── ContactMessage.js             # Mongoose Contact message schema
│   ├── controllers/
│   │   ├── appointmentController.js      # Booking & validation logic
│   │   └── contactController.js          # Contact message logic
│   ├── routes/
│   │   ├── appointmentRoutes.js          # /api/appointments routes
│   │   └── contactRoutes.js              # /api/contact routes
│   ├── middleware/
│   │   └── errorHandler.js               # Centralized error handler
│   ├── app.js                            # Express app configuration
│   ├── server.js                         # Entry point
│   ├── .env.example
│   ├── .env
│   └── package.json
├── package.json                          # Root workspace scripts
├── .gitignore
└── README.md
```

---

## 🛠️ Step-by-Step Windows Setup Guide for Beginners

Follow these easy steps to get the website running on your Windows computer.

### Step 1: Install Node.js
1. Visit [https://nodejs.org/](https://nodejs.org/) and download the **LTS (Long Term Support)** installer for Windows (e.g., v20.x or v22.x).
2. Run the downloaded `.msi` file and click **Next** through the setup wizard.
3. Open **Command Prompt** or **PowerShell** and verify installation:
   ```cmd
   node -v
   npm -v
   ```

### Step 2: Install MongoDB or Configure MongoDB Atlas

#### Option A: Local MongoDB (Recommended for Local Dev)
1. Download **MongoDB Community Server** from [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community).
2. Install MongoDB as a **Windows Service** (default option during installation).
3. To verify that MongoDB is running, open PowerShell:
   ```powershell
   Get-Service -Name "*mongo*"
   ```
   Status should display `Running`.

#### Option B: MongoDB Atlas (Cloud)
1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Copy your connection URI (e.g., `mongodb+srv://<username>:<password>@cluster0.mongodb.net/solace_clinic`).

### Step 3: Open the Project in VS Code
1. Open Visual Studio Code.
2. Click **File > Open Folder...** and select `E:\newclinicwebsite`.
3. Open the integrated terminal in VS Code (`Ctrl + ~` or **Terminal > New Terminal**).

### Step 4: Configure the Backend Environment
1. In the `server/` directory, locate `.env.example`.
2. Ensure you have a file named `.env` inside `server/` with:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://127.0.0.1:27017/solace_clinic
   CLIENT_URL=http://localhost:5173
   NODE_ENV=development
   ```
   *(If using MongoDB Atlas, replace `MONGODB_URI` with your cloud Atlas connection string).*

### Step 5: Install Dependencies
Open two separate terminals in VS Code:

**Terminal 1 (Backend Server):**
```powershell
cd server
npm install
```

**Terminal 2 (Frontend Client):**
```powershell
cd client
npm install
```

---

## 🏃 Running the Application

### 1. Start the Backend API Server
In **Terminal 1** (`server` folder):
```powershell
npm run dev
```
You should see:
```text
[MongoDB] Connected successfully: 127.0.0.1/solace_clinic
[Server] Solace Clinic API is running on http://localhost:5000
[Server] Health check endpoint: http://localhost:5000/api/health
```

### 2. Start the React Frontend Server
In **Terminal 2** (`client` folder):
```powershell
npm run dev
```
You should see:
```text
  VITE v6.x.x  ready in 480 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### 3. Open the Website in Your Browser
Open your browser and navigate to:
**[http://localhost:5173/](http://localhost:5173/)**

---

## 🧪 Testing the API & Database End-to-End

### 1. Check Backend Health
Open your browser or run in PowerShell:
```powershell
Invoke-RestMethod -Uri "http://localhost:5000/api/health" -Method Get
```
Response:
```json
{
  "status": "healthy",
  "service": "Solace Clinic of Alternative Medicine API"
}
```

### 2. Submit a Test Appointment
1. Open [http://localhost:5173/appointment](http://localhost:5173/appointment) in your browser.
2. Fill out the form fields:
   - **Name:** Rahul Sharma
   - **Age:** 35
   - **Gender:** Male
   - **Mobile:** 9876543210
   - **Email:** rahul@example.com
   - **City:** Nanded
   - **Date:** Choose an upcoming date
   - **Time Slot:** Choose 12:00 PM or another OPD slot
   - **Doctor:** Dr. Sana Naeemuddin Qureshi
   - **Problem:** Persistent seasonal allergies and digestive discomfort
   - Check the **Terms & Conditions** agreement
3. Click **Confirm & Book Appointment**.
4. The confirmation modal will pop up with a generated **Unique Appointment ID** (e.g., `APT-20261018-5565`).

### 3. Verify in MongoDB
Open PowerShell and connect via `mongosh`:
```powershell
mongosh solace_clinic --eval "db.appointments.find().pretty()"
```
You will see the confirmed patient appointment document saved in the `appointments` collection with timestamps, status `confirmed`, and all medical fields.

---

## 📦 Building the Frontend for Production

When ready to generate the optimized production bundle:
```powershell
cd client
npm run build
```
The compiled output will be generated in `client/dist/`.

---

## 🔒 Security & Privacy Best Practices

1. **Private Patient Records:** Public list endpoints for appointments are disabled to prevent scraping of patient medical history.
2. **Rate Limiting:** Protects backend endpoints against brute-force attacks and automated form abuse.
3. **Helmet:** Equips the Express server with HTTP security headers.
4. **Environment Variables:** Sensitive connection strings are strictly kept inside `.env` and excluded from Git commits via `.gitignore`.
5. **No Medical Overclaims:** Treatments strictly adhere to legal clinical designations for Dr. Sana Naeemuddin Qureshi, MD (Medicine) – Homeopathy.

---

## 📞 Support & Inquiries
- **Clinic Address:** Ayaan Tower Shop No 8, Ground Floor, Degloor Naka, Nanded, Maharashtra – 431604
- **Phone:** +91-8378977703
- **WhatsApp:** +91-8378977703
- **Google Maps:** [Solace Clinic Verified Location](https://www.google.com/maps/place/SOLACE+CLINIC/@19.147485,77.3249762,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd1d635cd2deb21:0x5a4ef664371adaba!8m2!3d19.147485!4d77.3275565!16s%2Fg%2F11vl9g5p2m)
