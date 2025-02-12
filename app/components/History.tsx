import { ScrollArea } from "@/components/ui/scroll-area"

export default function History() {
  // This is a placeholder. You should fetch the actual chat history from your backend.
  const chatHistory = [
    { id: 1, title: "Chat about AI", date: "2023-06-01" },
    { id: 2, title: "Discussion on React", date: "2023-06-02" },
    { id: 3, title: "AWS Services Overview", date: "2023-06-03" },
  ]

  return (
    <ScrollArea className="h-[calc(100vh-8rem)] p-4 rounded-lg bg-purple-900 border-2 border-purple-500 shadow-[0_0_10px_#8B5CF6]">
      {chatHistory.map((chat) => (
        <div key={chat.id} className="mb-4 p-4 bg-purple-800 rounded-lg">
          <h3 className="text-lg font-semibold">{chat.title}</h3>
          <p className="text-sm text-purple-300">{chat.date}</p>
        </div>
      ))}
    </ScrollArea>
  )
}

