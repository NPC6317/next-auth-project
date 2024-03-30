'use client';
import { useUser } from '@clerk/nextjs';
import React from 'react';

export const UserInfo = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (isSignedIn) {
    return <div>Hello {user.firstName}!</div>;
  }

  return <div>Not signed in</div>;
};