# **E-Commerce React Demo App**

A fully featured, modern e-commerce web application built using **React + Vite**, designed with a premium UI, responsive layout, dark mode support, and a complete user flow from browsing products to checkout.

This project demonstrates strong front-end architecture, clean component design, context-based global state management, and professional UI/UX—ideal for showcasing in a portfolio or resume.


## **Tech Stack**

### **Frontend**
- React (Hooks, Context API)
- React Router DOM
- Vite
- Axios
- CSS Modules
- LocalStorage

### **Design & UX**
- Responsive layout
- Modern, clean UI components
- Dark/Light theme toggle
- Smooth animations + polished interactions
- Reusable design tokens (CSS variables)

## 🎯 **Core Features**

### 🛍 **Product & Shopping Functionality**
- Live product data fetched from DummyJSON API  
- Product details page with **premium image gallery + slider**
- Product search, category filter, and price sorting  
- Pagination for product listings  
- Beautiful responsive product cards  
- Persistent cart (LocalStorage)

### 🛒 **Advanced Cart System**
- Add / remove items  
- Increment / decrement quantity  
- Auto-updating subtotal & total  
- Item confirmation removal modal  
- “Clear Cart” button with confirmation  
- Fully styled, clean, modern cart page  

### 👤 **Authentication System**
- Login / Register pages (simulated auth)
- Protected routes (Checkout + Order Summary)
- User session saved in LocalStorage  
- Profile page (with avatar)
- Edit Profile page (update name + avatar)

### 💳 **Checkout Flow**
1. View Cart  
2. Checkout (protected)  
3. Order Summary  
4. Thank You page  

### 🎨 **Dark Mode**
- Dark/light theme toggle  
- Theme stored in LocalStorage  
- Global CSS variables:
  - `--bg`
  - `--text`
  - `--card-bg`
  - `--border`
  - `--accent`
  - `--accent-hover`

### 🔔 **Toast Notification System**
- Custom global toast  
- For login, logout, add-to-cart, clear cart, profile update, etc.  
- Smooth slide-in animation

## 📁 **Project Structure**

```
src/
│── components/
│── context/
│── pages/
│── assets/
│── App.jsx
│── main.jsx
│── index.css
```

## 🌐 **API**
Product data is fetched from:
```
https://dummyjson.com/products
```


## 🧠 **Skills Demonstrated**
- Component-driven UI architecture  
- Context API (Auth, Cart, Theme)  
- Clean design system  
- Responsive UI  
- Protected routing  
- REST API integration  
- LocalStorage persistence  
- Form handling  
- Professional code structure  

## 📝 **Future Improvements**
- Wishlist / Favorites  
- Admin dashboard  
- Stripe integration  
- Reviews  
- Animations (Framer Motion)

## 📄 **License**
Open-source. Free for personal and portfolio use.
