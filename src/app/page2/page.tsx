"use client";

import { useRouter } from "next/navigation";
import React from "react";

const pageTwo = () => {
  const router = useRouter();

  return (
    <div>
      <h1 className="text-5xl font-bold ">page 2</h1>
      <button onClick={() => router.push("/page1")} className="text-3xl font-bold underline">page1</button><br />
      <button onClick={() => router.back()} className="text-3xl font-bold underline">back</button>
    </div>
  );
};

export default pageTwo;
