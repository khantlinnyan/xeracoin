"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterForm from "./RegisterForm";
import SignInForm from "./SignInForm";

export function AuthForm() {
  return (
    <div className="w-4/5 lg:w-2/5 bg-zinc-100 text-zinc-800 mx-auto mt-16 space-y-5">
      <Tabs defaultValue="signin" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">SignIn</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <SignInForm />
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </Tabs>
      {/* <OAuthForm /> */}
    </div>
  );
}
