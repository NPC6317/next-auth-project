import React from "react";
import { SignInButton, SignedOut, SignedIn, UserButton } from '@clerk/nextjs';

export const NavBar = () => {
    return (
      <nav className="flex justify-between items-center h-12 mx-4">
        <div className="font-bold">Clerk Auth</div>
        <SignedOut>
          <SignInButton redirectUrl="/dashboard" mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </nav>
    );
  };