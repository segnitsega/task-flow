"use client"

import { useState } from "react"
import { Settings, Bell, Filter, MoreVertical, Circle, Plus, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const issues = [
  {
    id: "SEG-2",
    title: "Set up your teams",
    status: "todo",
    date: "Dec 29",
  },
  {
    id: "SEG-1",
    title: "Get familiar with Linear",
    status: "todo",
    date: "Dec 29",
  },
  {
    id: "SEG-4",
    title: "Import your data",
    status: "todo",
    date: "Dec 29",
  },
  {
    id: "SEG-3",
    title: "Connect your tools",
    status: "todo",
    date: "Dec 29",
  },
]

export default function MainPage() {
  const [selectedTab, setSelectedTab] = useState("all")

  return (
    <main className="flex-1 flex flex-col overflow-hidden bg-background">
      {/* Top Header */}
      <div className="border-b border-border bg-background px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4 flex-1">
          <div className="flex items-center gap-2 bg-secondary px-3 py-2 rounded text-sm text-muted-foreground">
            <span>segni-space</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <span className="text-foreground">All Issues</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Tabs and Controls */}
      <div className="border-b border-border bg-background px-6 py-4 flex items-center justify-between md:flex-col md:gap-4 md:items-start">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full md:w-auto">
          <TabsList className="bg-transparent border-b border-border rounded-none p-0 h-auto gap-6">
            <TabsTrigger
              value="all"
              className="bg-transparent text-muted-foreground data-[state=active]:text-foreground "
            >
              All issues
            </TabsTrigger>
            <TabsTrigger
              value="active"
              className="bg-transparent text-muted-foreground data-[state=active]:text-foreground px-0 py-2"
            >
              Active
            </TabsTrigger>
            <TabsTrigger
              value="backlog"
              className="bg-transparent text-muted-foreground data-[state=active]:text-foreground px-0 py-2"
            >
              Backlog
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex items-center gap-3 ml-auto">
          <Button variant="outline" size="sm" className="gap-2 text-muted-foreground bg-transparent">
            <Filter className="w-4 h-4" />
            <span className="max-sm:hidden">Filter</span>
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            Display
          </Button>
        </div>
      </div>

      {/* Issues List */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {/* Todo Section */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <Circle className="w-4 h-4 text-muted-foreground" />
            Todo
            <span className="bg-secondary text-muted-foreground px-2 py-1 rounded text-xs font-medium ml-auto">
              {issues.length}
            </span>
          </h3>

          <div className="space-y-2">
            {issues.map((issue) => (
              <div
                key={issue.id}
                className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-secondary transition-colors group cursor-pointer border border-transparent hover:border-border"
              >
                <input type="checkbox" className="w-4 h-4 rounded border-border cursor-pointer" />
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="text-muted-foreground text-sm font-medium whitespace-nowrap">{issue.id}</span>
                  <Circle className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                  <span className="text-foreground text-sm truncate">{issue.title}</span>
                </div>
                <span className="text-muted-foreground text-sm whitespace-nowrap">{issue.date}</span>
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="w-4 h-4 text-muted-foreground" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Add New Issue */}
        <Button
          variant="outline"
          className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground bg-transparent"
        >
          <Plus className="w-4 h-4" />
          <span>Add issue</span>
        </Button>
      </div>
    </main>
  )
}
