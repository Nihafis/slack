"use client";

import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { signOut } = useAuthActions();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(); // Make sure this completes before redirecting
    router.push('/auth'); // Redirect to the auth page
  };

  return (
    <div>
      <Button onClick={() => handleLogout()}
      >Logout
      </Button>

    </div>
  )
}
