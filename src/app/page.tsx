import Image from "next/image";

export default function Home() {
  return (
  <div className="flex ">

    <div className="container  flex flex-row h-screen w-screen min-w-screen">
      <div className="signin  bg-pink-200 p-2 w-1/2 ">
        <form>
          <label>
            Email
            <input type="email" name="email" />
          </label>
          <label>
            Password
            <input type="password" name="password" />
          </label>
          <button type="submit" className="p-0.5 border-2 rounded-xl px-11 py-3">Sign In</button>
        </form>
      </div>

      <div className="signup  bg-pink-200 p-2 w-1/2 ">
        <form>
            <label>
              Email
              <input type="email" name="email" />
            </label>
            <label>
              Password
              <input type="password" name="password" />
            </label>
            <label>
              Confirm Password
              <input type="password" name="confirm-password" />
            </label>
            <button type="submit" className="p-0.5 border-2 rounded-xl px-11 py-3">Sign Up</button>
          </form>
      </div>
      
    
    </div>


    <div className="overlay-container  flex flex-row h-dvh w-dvw  absolute">
      <div className="signin-text  bg-pink-500 p-2 w-1/2" >
        <h1>Welcome back!</h1>
        <p className="mt-6">To keep connected with us please login with your personal info</p>
        <button className="p-0.5 border-2 rounded-xl px-11 py-3">SIGN IN</button>
      </div>


      <div className="signup-text  bg-pink-500 p-2 w-1/2 hidden">
        <h1>Hello, Friend!</h1>
        <p className="mt-6">Enter your personal details and start journey with us</p>
        <button className="p-0.5 border-2 rounded-xl px-11 py-3">SIGN UP</button>
      </div>
    
    </div> 

      

  </div>
  // <div className="flex">
      
  //     <div className="overlay-container  flex flex-row h-dvh w-dvw  absolute">
  //       <div className="signin-text  bg-pink-500 p-2 w-1/2"> signin-text</div>
  //       <div className="signup-text  bg-pink-500 p-2 w-1/2 hidden">signup text</div>
  //     </div>
  //     <div className="container  flex flex-row h-dvh w-dvw">
  //       <div className="signin  bg-pink-200 p-2 w-1/2">signin form</div>
  //       <div className="signup  bg-pink-200 p-2 w-1/2">signup form</div>
  //     </div>
  //   </div>

  );
}
