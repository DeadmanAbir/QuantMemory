"use client"

import { lazy, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type React from "react" // Added import for React
import { SpaceSelect } from "@/components/ui/space-select"

// Import the Editor component with SSR disabled
const Editor = lazy(() => import("../editor"))

export function AddNote() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Add your note saving logic here
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Note title" />
      </div>
      <div className="space-y-2">
        <Label>Content</Label>
        <div className="min-h-[200px] rounded-md border">
          <Editor value={content} onChange={setContent} placeholder="Write your note..." />
        </div>
      </div>
      <SpaceSelect />
      <div className="flex justify-end gap-2">
        <Button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Add Memory"}
        </Button>
      </div>
    </form>
  )
}

