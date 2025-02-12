"use client"

import { useState } from "react"
import Header from "./components/Header"
import Chat from "./components/Chat"
import History from "./components/History"
import Account from "./components/Account"
import Login from "./components/Login"

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [activeTab, setActiveTab] = useState("chat")

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto p-4">
        {activeTab === "chat" && <Chat />}
        {activeTab === "history" && <History />}
        {activeTab === "account" && <Account />}
      </main>
    </div>
  )
}

