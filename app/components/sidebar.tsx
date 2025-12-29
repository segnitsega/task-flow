"use client"

import { useState } from "react"
import {
  ChevronDown,
  Search,
  Inbox,
  CheckSquare,
  MoreHorizontal,
  FolderOpen,
  Eye,
  Upload,
  Users,
  GitBranch,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SideBar() {
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(true)
  const [isTeamsOpen, setIsTeamsOpen] = useState(true)

  return (
    <aside className="w-64 border-r border-border bg-background flex flex-col overflow-y-auto md:w-64 sm:w-56 max-sm:w-48">
      {/* Top Section - Search and Main Navigation */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground font-bold text-sm">
            S
          </div>
          <span className="font-semibold text-foreground">Segni-space</span>
          <ChevronDown className="w-4 h-4 ml-auto text-muted-foreground" />
        </div>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="pl-8 bg-secondary text-foreground placeholder:text-muted-foreground border-0"
          />
        </div>
      </div>

      {/* Main Navigation Items */}
      <nav className="p-4 flex-1">
        <div className="space-y-2 mb-6">
          <Button variant="ghost" className="w-full justify-start text-foreground hover:bg-secondary gap-3">
            <Inbox className="w-4 h-4" />
            <span>Inbox</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-foreground hover:bg-secondary gap-3">
            <CheckSquare className="w-4 h-4" />
            <span>My Issues</span>
          </Button>
        </div>

        {/* Workspace Section */}
        <div className="mb-6">
          <button
            onClick={() => setIsWorkspaceOpen(!isWorkspaceOpen)}
            className="flex items-center gap-2 w-full px-2 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronRight className={`w-4 h-4 transition-transform ${isWorkspaceOpen ? "rotate-90" : ""}`} />
            <span>Workspace</span>
          </button>
          {isWorkspaceOpen && (
            <div className="ml-2 space-y-1 mt-2">
              <Button variant="ghost" className="w-full justify-start text-foreground hover:bg-secondary gap-3 text-sm">
                <FolderOpen className="w-4 h-4" />
                <span>Projects</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-foreground hover:bg-secondary gap-3 text-sm">
                <Eye className="w-4 h-4" />
                <span>Views</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start text-foreground hover:bg-secondary gap-3 text-sm">
                <MoreHorizontal className="w-4 h-4" />
                <span>More</span>
              </Button>
            </div>
          )}
        </div>

        {/* Your Teams Section */}
        <div>
          <button
            onClick={() => setIsTeamsOpen(!isTeamsOpen)}
            className="flex items-center gap-2 w-full px-2 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronRight className={`w-4 h-4 transition-transform ${isTeamsOpen ? "rotate-90" : ""}`} />
            <span>Your teams</span>
          </button>
          {isTeamsOpen && (
            <div className="ml-2 space-y-1 mt-2">
              <div className="px-2 py-2 rounded hover:bg-secondary cursor-pointer transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center text-white text-xs font-bold">
                    S
                  </div>
                  <span className="text-sm text-foreground font-medium">Segni-space</span>
                  <ChevronDown className="w-3 h-3 ml-auto text-muted-foreground" />
                </div>
                <div className="ml-7 space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-foreground hover:bg-secondary gap-2 text-xs h-8"
                  >
                    <CheckSquare className="w-3 h-3" />
                    <span>Issues</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-foreground hover:bg-secondary gap-2 text-xs h-8"
                  >
                    <FolderOpen className="w-3 h-3" />
                    <span>Projects</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-foreground hover:bg-secondary gap-2 text-xs h-8"
                  >
                    <Eye className="w-3 h-3" />
                    <span>Views</span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-border space-y-2">
        <Button variant="ghost" className="w-full justify-start text-foreground hover:bg-secondary gap-3 text-sm">
          <Upload className="w-4 h-4" />
          <span>Import issues</span>
        </Button>
        <Button variant="ghost" className="w-full justify-start text-foreground hover:bg-secondary gap-3 text-sm">
          <Users className="w-4 h-4" />
          <span>Invite people</span>
        </Button>
        <Button variant="ghost" className="w-full justify-start text-foreground hover:bg-secondary gap-3 text-sm">
          <GitBranch className="w-4 h-4" />
          <span>Link GitHub</span>
        </Button>
      </div>
    </aside>
  )
}
