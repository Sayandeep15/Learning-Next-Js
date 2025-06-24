"use client";
import { useState } from "react";
import { log } from "console";

export default function Home() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleclk = async () => {
    // let data = {
    //   name: "Sayandeep",
    //   role: "Artist",
    // };
    let data = name;
    let a = await fetch("/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let res = await a.json();
    console.log(res);
    setName("");
  };

  return (
    <div className="w-full flex items-center flex-col mt-48">
      <h1>API AND ROUTED</h1>
      <div className="flex gap-2 mt-4">
        <input type="text" onChange={handleChange} value={name}  className="bg-zinc-900 p-1 border border-white"/>
      <button className="border border-white rounded-md p-1" onClick={handleclk}>click me</button>
      </div>
    </div>
  );
}
