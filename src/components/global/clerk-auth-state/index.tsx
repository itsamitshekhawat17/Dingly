"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import Loader from "../Loader";
import { User } from "lucide-react";


type Props = {};

function ClerkAuthState({}: Props) {
  const { isLoaded, userId } = useAuth();

  return (
    <>
      {!isLoaded && (
        <Loader state>
          <></>
        </Loader>
      )}

      {isLoaded && !userId && (
        <SignInButton fallbackRedirectUrl="/dashboard">
          <Button className="rounded-xl bg-[#252525] text-white hover:bg-[#252525]">
            <User />
            Login
          </Button>
        </SignInButton>
      )}

      {isLoaded && userId && (
        <UserButton>
          <UserButton.UserProfileLink
            label="Dashboard"
            url={`/dashboard`}
            labelIcon={<User size={16} />}
          />
        </UserButton>
      )}
    </>
  );
}

export default ClerkAuthState;