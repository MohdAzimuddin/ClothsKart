# **ClothsKart**  
*Classic Suits for Men and Women*

---

## **Table of Contents**

1. [Introduction](#introduction)  
2. [Features](#features)  
3. [Live Demo](#live-demo)  
4. [Technologies Used](#technologies-used)    
6. [Setup Instructions](#setup-instructions)  
7. [Folder Structure](#folder-structure)  
8. [Code Highlights](#code-highlights)  
9. [Responsive Design](#responsive-design)  
10. [Future Enhancements](#future-enhancements)  
11. [Contribution Guidelines](#contribution-guidelines)  
12. [License](#license)  
13. [Contact](#contact)

---

## **Introduction**

**ClothsKart** is a fully responsive, front-end e-commerce web application dedicated to selling **classic suits** for men and women. The project is designed with a clean user interface and provides seamless navigation between pages for an optimal shopping experience.  
Built using **React.js**, the application showcases 24 static products with options to view details, add items to the cart, and apply promo codes for discounts.  

This project demonstrates the power of a **React.js** front-end with proper componentization, routing, and animations, styled with **Vanilla CSS** for a modern, professional look.

---

## **Features**

### Key Functionality:
1. **Product Catalog:**  
   Browse 24 preloaded products with details like name, price, and image.
   
2. **Product Details Page:**  
   Click on any product to view its details in a dedicated, well-structured page.
   
3. **Add to Cart:**  
   Users can add items to the cart, adjust quantities, and view a summary.

4. **Apply Promo Code:**  
   Enter a promo code at checkout to receive discounts.

5. **Seamless Navigation:**  
   Powered by React Router DOM, users can navigate effortlessly between pages.

6. **Interactive Animations:**  
   Smooth transitions and hover effects using Framer Motion.

7. **Responsive Design:**  
   Fully optimized for devices of all sizes, from desktops to mobile phones.

---

## **Live Demo**

👉 [ClothsKart Live Demo](https://azimuddin-clothskart.netlify.app/)

---

## **Technologies Used**

### Front-End:
- **React.js**: Component-based architecture for building reusable UI.  
- **Vanilla CSS**: Custom styling for a unique, tailored design.  
- **React Router DOM**: Enables single-page application (SPA) navigation.  
- **Framer Motion**: Adds smooth animations and transitions.  
- **React Icons**: For aesthetic and functional icons throughout the UI.  

### Tools:
- **Node.js & NPM**: Dependency management and local development server.  
- **Git**: Version control.  
- **VS Code**: Development environment.

---



## **Setup Instructions**

Follow these steps to run the project locally:

### **Prerequisites:**
1. Install **Node.js** (v14+ recommended)  
2. Install **npm** (comes with Node.js)

### **Steps to Run:**
1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/ClothsKart.git
   cd ClothsKart
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Start the development server:  
   ```bash
   npm start
   ```
4. Open your browser and navigate to `http://localhost:3000`.

---

## **Folder Structure**

```
ClothsKart/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/               # Images and static files
│   ├── components/           # Reusable React components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── ProductCard.js
│   │   ├── Cart.js
│   │   └── ProductDetails.js
│   ├── pages/                # Page-level components
│   │   ├── HomePage.js
│   │   ├── CartPage.js
│   │   ├── ProductDetailsPage.js
│   │   └── CheckoutPage.js
│   ├── styles/               # CSS files
│   │   ├── main.css
│   │   └── responsive.css
│   ├── App.js                # Main application component
│   ├── index.js              # Entry point of the application
│   ├── staticData.js         # Static product data
│   └── utils/                # Utility functions (if any)
├── .gitignore
├── package.json
└── README.md
```

---

## **Code Highlights**

### 1. **Reusable Components:**
Each UI element (e.g., Navbar, Footer, ProductCard) is encapsulated in a reusable React component, ensuring modularity and maintainability.

### 2. **Static Product Data:**
Stored in `staticData.js` for simplicity, making it easy to update and scale the product list.

### 3. **Detailed Comments:**
The code is well-commented, explaining key sections to make it easy for future developers to understand and contribute.

### 4. **Responsive Design:**
Separate `responsive.css` file ensures the UI adapts beautifully to different screen sizes.

---

## **Responsive Design**

ClothsKart is optimized for the following breakpoints:  

- **Desktop:** 1380px and above  
- **Large Tablets:** 1084px to 820px  
- **Small Tablets:** 820px to 580px  
- **Mobile Phones:** 580px to 320px  

The layout shifts seamlessly between breakpoints, ensuring a consistent user experience.

---

## **Future Enhancements**

1. **Dynamic Product Data:**  
   Replace static product data with API integration to fetch real-time products.

2. **User Authentication:**  
   Add login and signup features for a personalized shopping experience.

3. **Wishlist Feature:**  
   Allow users to save favorite products for later.

4. **Payment Integration:**  
   Integrate a payment gateway for completing transactions.

---

## **Contribution Guidelines**

We welcome contributions to improve ClothsKart!  

### How to Contribute:
1. Fork the repository.  
2. Create a new branch:  
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add feature description"
   ```
4. Push to your branch:  
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## **Contact**

- **Developer:** Mohd Azimuddin  
- **Email:** [sfsuper2020@gmail.com]  
- **GitHub:** [https://github.com/Mohd Azimuddin](https://github.com/MohdAzimuddin)  

Feel free to reach out with feedback, questions, or collaboration ideas!

---

Happy Shopping! 🛍️
