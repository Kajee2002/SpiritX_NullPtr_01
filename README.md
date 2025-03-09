# SpiritX_NullPtr_01

This is a [Next.js](https://nextjs.org) project.

## Getting Started

First, run the development server:

```bash
npm run dev
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
- Secure user authentication

## Installation and Setup

1. Clone the Repository
``` bash
git clone https://github.com/Kajee2002/SpiritX_NullPtr_01.git
cd SpiritX_NullPtr_01
```

2. Install Dependencies
``` bash
npm install
```
3. Set Up Environment Variables

Create a `.env` file in the root directory and add your Superbase credentials:
``` bash 
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-project-anon-key
```

4. Run the Development Server
``` bash
npm run dev
``` 
Visit [http://localhost:3000](http://localhost:3000) to see the app in action.

## Usage

- Login: Users can log in via email/password or social login.
- Signup: New users can create an account securely.
- Landing Page: After login, users are redirected to the Landing Page
