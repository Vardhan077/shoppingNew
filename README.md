# Spectre Online Store

Spectre Online Store is an e-commerce platform built using React for the frontend and a Node.js backend. It allows users to browse products, add them to their cart, and make purchases securely.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely. Authentication is handled using JWT tokens.
- **Product Catalog**: Browse through a wide range of products categorized into different sections.
- **Shopping Cart**: Add products to your cart and manage them before proceeding to checkout.
- **Checkout Process**: Securely complete your purchase by providing shipping and payment information.
- **Profile Management**: Registered users can view and manage their profiles, including their personal information and order history.

## Technologies Used

- **Frontend**: React.js, React Router, Axios, CSS (with Tailwind CSS for styling)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: JSON Web Tokens (JWT)

## Usage

1. **Home Page**: Upon visiting the website, users are directed to the landing page.
2. **Product Catalog**: Navigate to the products route to view available products.
3. **Login**: If interested in purchasing, users can log in through the login route.
4. **Sign Up**: New users can create an account by clicking the "Create Account" button. User data is stored in the USERS table.
5. **Cart Management**: Add products to the cart, which are stored in the PRODUCTS table associated with the user's account.
6. **Persistent Cart Data**: Cart data persists across user sessions, ensuring that items remain in the cart even after logging out and logging back in.

## Hosts Used

1. **Render**: Backend (Node.js server) is hosted on Render.
2. **Clever Cloud**: Data storage for USERS and PRODUCTS tables.

## Deployment Links

- **Deployment Link**: [Spectre Online Store](https://newshoppingapp.netlify.app/)
- **Repository Link**: [GitHub - Spectre Online Store Backend](https://github.com/Vardhan077/shoppingNew)
