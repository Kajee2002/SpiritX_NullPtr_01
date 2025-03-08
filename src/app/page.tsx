"use client";
import Image from "next/image";

export default function Home() {
  return (
  <div className="flex bg-[var(--background)]">

    <div className="container  flex flex-row h-screen w-screen min-w-screen">
      <div className="signin  bg-[var(--white-icon-tr)] p-2 w-1/2 ">
        <form className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-[var(--foreground)]">Sign In</h1>
          <div className="flex justify-start gap-2 pt-3 md:pt-6">
            <a
              target="_blank"
              href=""
              aria-label="facebook"
              className="text-[var(--white-icon)] hover:text-[var(--hover)] transition duration-300 ease-in-out  border-1 border-[var(--white-icon-tr)] p-3 rounded-full bg-[var(--icon-bg)] hover:bg-[var(--white-icon-tr)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8"
              >
                <path
                  d="M22 12a10 10 0 1 0-11.5 9.9V14.8H8.4V12h2.1V9.8c0-2 1.2-3.1 3-3.1c.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 2.8h-1.9v7.1A10 10 0 0 0 22 12Z">
                </path>
              </svg>
            </a>
            <a
              target="_blank"
              href=""
              aria-label="gmail"
              className="text-[var(--white-icon)] hover:text-[var(--hover)] transition duration-300 ease-in-out  border-1 border-[var(--white-icon-tr)] p-3 rounded-full bg-[var(--icon-bg)] hover:bg-[var(--white-icon-tr)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm16 4-8 5-8-5v10h16V8zm-8 3 8-5H4l8 5z
">
                </path>
              </svg>
            </a>
            <a
              target="_blank"
              href=""
              aria-label="linkedin"
              className="text-[var(--white-icon)] hover:text-[var(--hover)] transition duration-300 ease-in-out  border-1 border-[var(--white-icon-tr)] p-3 rounded-full bg-[var(--icon-bg)] hover:bg-[var(--white-icon-tr)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8"
              >
                <path
                  d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8 17H6V10h2v7Zm-1-8a1 1 0 1 1 .01-2A1 1 0 0 1 7 9Zm11 8h-2v-3.5c0-1.1-.9-2-2-2s-2 .9-2 2V17h-2v-7h2v1a3.5 3.5 0 0 1 3-1.5c2 0 3 1.5 3 3.5V17Z">
                </path>
              </svg>
            </a>
          </div>
          <p className="text-[var(--white)] align-center">or use your account.</p>
          <input type="text" name="text" placeholder="User Name" className="text-[var(--white-icon)] border-2 border-[var(--foreground)]"/>
          <input type="password" name="password" placeholder="Password" className="text-[var(--white-icon)] border-2 border-[var(--foreground)]"/>
          <p className="text-[var(--white)] align-center"><a target="_blank" href="">Forgot your password?</a></p>
          <button type="submit" className="p-0.5 border-2 rounded-xl px-11 py-3">Sign In</button>
        </form>

      </div>

      <div className="signup  bg-pink-200 p-2 w-1/2 ">
          <form className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-[var(--foreground)]">Create account</h1>
          <div className="flex justify-start gap-2 pt-3 md:pt-6">
              <a
                target="_blank"
                href=""
                aria-label="facebook"
                className="text-[var(--white-icon)] hover:text-[var(--hover)] transition duration-300 ease-in-out  border-1 border-[var(--white-icon-tr)] p-3 rounded-full bg-[var(--icon-bg)] hover:bg-[var(--white-icon-tr)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8"
                >
                  <path
                    d="M22 12a10 10 0 1 0-11.5 9.9V14.8H8.4V12h2.1V9.8c0-2 1.2-3.1 3-3.1c.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 2.8h-1.9v7.1A10 10 0 0 0 22 12Z">
                  </path>
                </svg>
              </a>
              <a
                target="_blank"
                href=""
                aria-label="gmail"
                className="text-[var(--white-icon)] hover:text-[var(--hover)] transition duration-300 ease-in-out  border-1 border-[var(--white-icon-tr)] p-3 rounded-full bg-[var(--icon-bg)] hover:bg-[var(--white-icon-tr)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm16 4-8 5-8-5v10h16V8zm-8 3 8-5H4l8 5z">
                  </path>
                </svg>
              </a>
              <a
                target="_blank"
                href=""
                aria-label="linkedin"
                className="text-[var(--white-icon)] hover:text-[var(--hover)] transition duration-300 ease-in-out  border-1 border-[var(--white-icon-tr)] p-3 rounded-full bg-[var(--icon-bg)] hover:bg-[var(--white-icon-tr)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-8"
                >
                  <path
                    d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8 17H6V10h2v7Zm-1-8a1 1 0 1 1 .01-2A1 1 0 0 1 7 9Zm11 8h-2v-3.5c0-1.1-.9-2-2-2s-2 .9-2 2V17h-2v-7h2v1a3.5 3.5 0 0 1 3-1.5c2 0 3 1.5 3 3.5V17Z">
                  </path>
                </svg>
              </a>
          </div>
          <p className="text-[var(--white)] align-center">or create a new account.</p>
            <input type="text" name="username" placeholder="User Name" className="text-[var(--white-icon)] border-2 border-[var(--foreground)]"/>
            <input type="email" name="email" placeholder="Email" className="text-[var(--white-icon)] border-2 border-[var(--foreground)]"/>
            <input type="password" name="password" placeholder="Password"className="text-[var(--white-icon)] border-2 border-[var(--foreground)]"/>
            <input type="password" name="confirm-password" placeholder="Re-enter Password" className="text-[var(--white-icon)] border-2 border-[var(--foreground)]"/>
            <button type="submit" className="p-0.5 border-2 rounded-xl px-11 py-3">Sign Up</button>
          </form>
      </div>
      
    
      {/* <div className="overlay-container  flex flex-row h-dvh w-dvw  absolute">
        <div className="signin-text  bg-pink-500 p-2 w-1/2 hidden" >
          <h1>Welcome back!</h1>
          <p className="mt-6">To keep connected with us please login with your personal info</p>
          <button className="p-0.5 border-2 rounded-xl px-11 py-3">SIGN IN</button>
        </div>


        <div className="signup-text  bg-pink-500 p-2 w-1/2 hidden">
          <h1>Hello, Friend!</h1>
          <p className="mt-6">Enter your personal details and start journey with us</p>
          <button className="p-0.5 border-2 rounded-xl px-11 py-3">SIGN UP</button>
        </div>
      
      </div>  */}
    </div>



      

    <style jsx>{`
      input {
        border-radius: 5px;
        padding: 5px;
        padding-left: 16px;
        margin: 5px;
      }
    `}
    </style>
  </div>


  );
}
