import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <SignIn />
    </main>
  );
}