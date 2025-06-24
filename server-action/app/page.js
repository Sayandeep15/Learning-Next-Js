"use client";
import Image from "next/image";
import { useRef } from "react";
import { submitAction } from "@/actions/form";

export default function Home() {
  const ref = useRef()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>SERVER ACTIONS</h1>
      <div>
        <form ref={ref} action={(e)=>{submitAction(e); ref.current.reset()}} className="flex flex-col gap-4 items-center" >
          <label htmlFor="name">Name</label>
          <input type="text" id="" name="name" className="bg-white text-black"/>
          <label htmlFor="addr">Address</label>
          <input type="text" id="addr" name="addr" className="bg-white text-black"/>
          
          <input type="submit"  className="bg-white text-black w-24 rounded-md"/>


        </form>
      </div>
    </div>
  );
}
