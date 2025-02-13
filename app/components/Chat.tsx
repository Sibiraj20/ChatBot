"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Chat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [input, setInput] = useState("")

  const sendMessage = async () => {
    if (!input.trim()) return

    const newMessages = [...messages, { role: "user", content: input }]
    setMessages(newMessages)
    setInput("")

    try {
      const response = await fetch("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", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages }),
      })

      if (!response.ok) throw new Error("API request failed")

      const data = await response.json()
      setMessages([...newMessages, { role: "assistant", content: data.message }])
    } catch (error) {
      console.error("Error:", error)

      console.error("Error:", error)
    }
  }

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <ScrollArea className="flex-grow mb-4 p-4 rounded-lg bg-purple-900 border-2 border-purple-500 shadow-[0_0_10px_#8B5CF6]">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
            <span className={`inline-block p-2 rounded-lg ${msg.role === "user" ? "bg-purple-700" : "bg-gray-700"}`}>
              {msg.content}
            </span>
          </div>
        ))}
      </ScrollArea>
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow bg-purple-900 border-2 border-purple-500 text-white placeholder-purple-300 shadow-[0_0_10px_#8B5CF6]"
        />
        <Button onClick={sendMessage} className="bg-purple-600 hover:bg-purple-700 text-white">
          Send
        </Button>
      </div>
    </div>
  )
}

