"use client"

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"
import { Button } from "@/components/ui/button"

interface LoginProps {
  onLogin: (user: any) => void
}

export default function Login({ onLogin }: LoginProps) {
  return (
    <GoogleOAuthProvider clientId="1076359616324-nb5l2e7qrh9i0th6c8r6mvka4lm4hk8p.apps.googleusercontent.com">
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="p-8 rounded-lg bg-purple-900 border-2 border-purple-500 shadow-[0_0_10px_#8B5CF6]">
          <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
          
          {/* Google Login Button */}
          <GoogleLogin
            onSuccess={(response) => {
              console.log("Login Success:", response)
              onLogin(response) // Pass user data to parent component
            }}
            onError={() => {
              console.log("Login Failed")
            }}
          />

          {/* Optional: Custom button styling */}
          <Button 
            className="bg-white text-black hover:bg-gray-200 mt-4 w-full"
            onClick={() => document.querySelector("iframe")?.contentWindow?.document.querySelector("div[role=button]")?.click()}
          >
            </Button>
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}
