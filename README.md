![App Screenshot](https://i.ibb.co.com/Tq0Pp0cf/artifacts-banner-image.jpg)

# Artifact Atlas  

Artifact Atlas is an interactive web platform for exploring and managing historical artifacts. Users can discover unique artifacts, contribute their own, and engage with the community through likes and interactions.  

## Live Site  
🔗 [Artifact Atlas Live Site](https://assignment-11-artifact-atlas.netlify.app)  

## Features  
- **Explore Artifacts**: Browse through a collection of artifacts with detailed information and images.  
- **Search Functionality**: Use the search bar to quickly find artifacts by name.  
- **Add Artifacts**: Registered users can contribute their own artifacts with historical details.  
- **Like System**: Toggle likes for artifacts to showcase community interest.  
- **Secure User Authentication**: Sign in using Google or email/password with JWT-secured routes.  


## Technologies Used

Frontend:

- React: For building user interfaces.
- Tailwind CSS: For responsive and modern UI styling.
- DaisyUI: Predefined UI components for faster development.
- React Router: For routing and navigation.
- React Icons: For adding modern icons.
- React Hot Toast: For interactive notification.
- React Helmet: For dynamic page titles.
- React Simple Typewriter: For engaging typewriter animations.

Backend:

- Node.js: Server-side JavaScript runtime.
- Express.js: Web server framework.
- MongoDB: NoSQL database for storing artifacts and user data.
- JWT: JSON Web Token for secure authentication.
- Cookie Parser: For managing cookies.

## Hosting:

- Frontend: Firebase Hosting.
- Backend: Vercel.

Here's a detailed README file including dependencies and a step-by-step guide for running the project locally using **npm**.

---

# 🚀 Project Setup Guide  

## 📦 Dependencies  

### **Production Dependencies**  
The following packages are required for the application to function properly:  

- `axios` - HTTP client for API requests  
- `firebase` - Firebase services (Auth, Firestore, etc.)  
- `localforage` - Client-side storage  
- `lottie-react` - Animation library for Lottie files  
- `match-sorter` - Sorting and filtering utilities  
- `react`, `react-dom` - Core React library  
- `react-countup` - Animated counting effect  
- `react-fast-marquee` - Marquee scrolling effect  
- `react-helmet-async` - SEO metadata management  
- `react-hot-toast` - Notifications and toast messages  
- `react-icons` - Icon library  
- `react-router-dom` - Routing for React  
- `react-simple-typewriter` - Typewriter effect for text animations  
- `sort-by` - Sorting utilities  
- `swiper` - Swiping and carousel functionality  
- `typewriter-effect` - Another typewriter animation library  

### **Development Dependencies**  
These packages assist in development but are not included in production builds:  

- `@eslint/js`, `eslint`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` - Linting and code quality  
- `@types/react`, `@types/react-dom` - TypeScript support for React  
- `@vitejs/plugin-react` - React plugin for Vite  
- `autoprefixer`, `postcss`, `tailwindcss`, `daisyui` - CSS utilities and framework  
- `vite` - Build tool and development server  
- `globals` - Shared global variables  

---

## ⚙️ **Setting Up the Project Locally**  

Follow these steps to set up and run the project on your local machine using **npm**.

### **1️⃣ Prerequisites**  
Ensure you have the following installed:  
- **Node.js** (Latest LTS version recommended) - [Download Here](https://nodejs.org/)  
- **npm** (Comes with Node.js)  
- **Git** (Optional, for cloning the repository)  

### **2️⃣ Clone the Repository**  
If you haven't cloned the project yet, run:  
```sh
git clone https://github.com/abdulmazidakash/c-assignment-11.git
cd c-assignment-11
```

### **3️⃣ Install Dependencies**  
Run the following command to install all required packages:  
```sh
npm install
```

### **4️⃣ Configure Environment Variables**  
Create a `.env` file in the root directory and add the necessary environment variables. Example:  
```
VITE_API_KEY=your_api_key_here
VITE_FIREBASE_CONFIG=your_firebase_config_here
```
📌 *Ensure you get the correct values from your Firebase or API providers.*  

### **5️⃣ Start the Development Server**  
Run the following command to start the local development server:  
```sh
npm run dev
```
This will start the **Vite development server**, and you should see the project running at:  
```
http://localhost:5173
```

### **6️⃣ Build for Production (Optional)**  
To create an optimized production build, run:  
```sh
npm run build
```

### **7️⃣ Run the Production Build Locally (Optional)**  
To preview the production build locally:  
```sh
npm run preview
```

---

## 🎯 **You're All Set!**  
Now you can start developing and testing the project locally. 🚀 