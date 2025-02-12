import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface HeaderProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  return (
    <header className="bg-purple-900 p-4">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="chat" className="text-white hover:text-purple-300">
            Chat
          </TabsTrigger>
          <TabsTrigger value="history" className="text-white hover:text-purple-300">
            History
          </TabsTrigger>
          <TabsTrigger value="account" className="text-white hover:text-purple-300">
            Account
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </header>
  )
}
