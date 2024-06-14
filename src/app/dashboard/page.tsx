import React from "react";
import { auth } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs';
import { UserInfo } from "../../components/UserInfo";

export default async function DashboardPage() {
    console.log(auth());
    
    const user = await currentUser();
    console.log(user);

    return (
        <div>
            <h1>Dashboard</h1>
            <div>Hellooooooooooooo {`
                ${user?.firstName} 
                ${user!.lastName}
            `}</div>
            <UserInfo />
        </div>
    );
}