# SpiritX_NullPtr_01

This is a [Next.js](https://nextjs.org) project.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation Setup](#installation-and-setup)
- [Usage](#Usage)
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## Project Structure


```
.
├── public          # Static assets
├── src
│   ├── app         # Application components and pages
│   │   ├── login   # Login Page
│   │   ├── signup  # Signup page
│   │   ├── Home    # Landing Page
│   │   └── layout.tsx
│   ├── styles      # Global styles and CSS files
│   ├── components  # Reusable components
│   ├── lib         # Library files
│   ├── utils       # Utility functions
│   └── ...         # Other directories
├── .gitignore      # Git ignore file
├── package.json    # NPM package configuration
├── README.md       # Project documentation
└── ...             # Other files
```

## Features
- User authentication (Login, Signup, Logout)

- Secure password hashing

- Email verification (if enabled in Firebase)

- Password reset functionality

- Form validation with real-time feedback

## Technologies Used

- Next.js # React framework for server-side rendering

- Tailwind CSS # Utility-first CSS framework for styling

- Superbase Authentication # Secure user authentication

## Installation and Setup

Installation & Setup

1. Clone the Repository
``` bash
git clone https://github.com/yourusername/project-name.git
cd project-name
```
2. Install Dependencies
``` bash
npm install
```
3. Set Up Environment Variables

Create a .env.local file in the root directory and add your Superbase credentials:
``` bash 
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```
4. Run the Development Server
``` bash
npm run dev
``` 
Visit [http://localhost:3000](http://localhost:3000) to see the app in action.

## Usage

- Login: Users can log in via email/password or social login.

- Signup: New users can create an account securely.

- LandingPage: After login, users are redirected to the Landing Page
