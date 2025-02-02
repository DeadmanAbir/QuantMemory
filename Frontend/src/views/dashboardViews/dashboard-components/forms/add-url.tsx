"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { SpaceSelect } from "@/components/ui/space-select"

export function AddUrl() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState<any>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Add your URL processing logic here
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="url">Website or Tweet URL</Label>
        <Input id="url" placeholder="https://" value={url} onChange={(e) => setUrl(e.target.value)} />
      </div>
      <SpaceSelect />
      {preview && (
        <div className="rounded-lg border p-4">
          <h3 className="font-medium">Preview</h3>
          {/* Add preview content here */}
        </div>
      )}
      <div className="flex justify-end gap-2">
        <Button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Memory"}
        </Button>
      </div>
    </form>
  )
}

