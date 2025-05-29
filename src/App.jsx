import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
  <div className="py-10 px-4 sm:px-6 md:px-20 lg:px-32 border">
  <h2 className="font-bold text-center text-xl mb-4">Dynamic Form</h2>
  <form className="bg-base-200 border-base-300 space-y-3 max-w-2xl mx-auto rounded-box border p-4">
      <div className="w-full">
        <label className="label">Email</label>
        <input type="email" className="input w-full" placeholder="Email" />
      </div>
    <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full">
        <label className="label">Email</label>
        <input type="email" className="input w-full" placeholder="Email" />
      </div>

      <div className="w-full">
        <label className="label">Password</label>
        <input type="password" className="input w-full" placeholder="Password" />
      </div>
    </div>
      <div className="w-full">
        <label className="label">Email</label>
        <input type="email" className="input w-full" placeholder="Email" />
      </div>
        <div className="w-full">
        <label className="label">Email</label>
        <input type="email" className="input w-full" placeholder="Email" />
      </div>
        <div className="w-full">
        <label className="label">Email</label>
        <input type="email" className="input w-full" placeholder="Email" />
      </div>
       <div className="flex flex-col md:flex-row gap-4">
      <div className="w-full">
        <label className="label">Email</label>
        <input type="email" className="input w-full" placeholder="Email" />
      </div>

      <div className="w-full">
        <label className="label">Password</label>
        <input type="password" className="input w-full" placeholder="Password" />
      </div>
    </div>
          <div className="w-full">
        <label className="label">Email</label>
        <input type="email" className="input w-full" placeholder="Email" />
      </div>

    <button className="btn btn-neutral mt-4 w-full md:w-auto">Login</button>
  </form>
</div>

  );
}

export default App;
