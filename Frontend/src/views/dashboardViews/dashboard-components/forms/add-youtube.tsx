"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SpaceSelect } from "@/components/ui/space-select"

export function AddYoutube() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Add your YouTube video processing logic here
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="url">YouTube Video URL</Label>
        <Input
          id="url"
          placeholder="https://www.youtube.com/watch?v=..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <SpaceSelect />
      <div className="flex justify-end gap-2">
        <Button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Memory"}
        </Button>
      </div>
    </form>
  )
}

