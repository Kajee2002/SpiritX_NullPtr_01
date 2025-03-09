"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={200}
        height={200}
      />
      <h1 className="text-6xl">Welcome to Next.js!</h1>
    </div>
  );
}
