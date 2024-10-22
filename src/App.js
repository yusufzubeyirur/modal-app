"use client";

import React from "react";

const App = () => {
  return (
    <div className="h-screen w-full flex overflow-hidden items-center justify-center bg-[#DE303F] px-4">
      <div className="md:w-4/5 lg:w-3/6 rounded-lg flex flex-col justify-center p-16 gap-8 bg-white shadow-[0_0_35px_rgba(30,119,204,0.3)]">
        <h1 className="text-[#000000] text-7xl font-bold">Delete User</h1>
        <p className="text-black text-3xl">
          Are you sure you want to delete{" "}
          <span className="font-bold">your account ?</span>
        </p>

        <div className="bg-[#FFE9D9] border-1-[10px] border-[#FA703F] p-4">
          <div className="flex items-center mb-2 text-3xl font-semibold text-[#771505]">
            <img src="/Vector.png" alt="warninggg" />
            <h2 className="ml-2 text-2xl">Warning</h2>
          </div>

          <p className="text-xl text-[#BC4C2E] font-medium">
            By Deleteing this account, you won’t be able to access the system.
          </p>
        </div>

        <div className="flex justify-between">
          <button className="border-2 bg-black text-white  text-3xl p-4 font-[500] hover:bg-white hover:text-[#101F20] hover:border-[#101F20]">
            No, Cancel
          </button>
          <button className="border-2 p-4 border-black bg-white text-black text-3xl font-[500] hover:bg-[#101F20] hover:text-white hover:border-white">
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default App;
