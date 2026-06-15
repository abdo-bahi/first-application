"use client"
import React from 'react'

import { useRouter } from "next/navigation";

const pageOne = () => {
  const router = useRouter();

  return (
    <div>
      <h2 className="text-5xl font-bold ">page1</h2>
      <button onClick={() => router.push("/page2")} className="text-3xl font-bold underline">page2</button> <br />
      <button onClick={() => router.back()} className="text-3xl font-bold underline">back</button>
    </div>
  );
};
export default pageOne