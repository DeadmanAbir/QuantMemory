"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import { SpaceSelect } from "@/components/ui/space-select"

export function AddDocument() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      setFile(droppedFile)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Add your file upload logic here
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div
        className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <Upload className="h-8 w-8 text-muted-foreground" />
        <p className="mt-2 text-sm text-muted-foreground">Drag and drop your file here, or click to select</p>
        <input
          type="file"
          className="hidden"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <Button type="button" variant="secondary" className="mt-4">
          Select File
        </Button>
      </div>
      {file && (
        <div className="rounded-lg border p-4">
          <p className="text-sm">{file.name}</p>
        </div>
      )}
      <SpaceSelect />
      <div className="flex justify-end gap-2">
        <Button type="submit" disabled={!file || loading}>
          {loading ? "Uploading..." : "Add Memory"}
        </Button>
      </div>
    </form>
  )
}

