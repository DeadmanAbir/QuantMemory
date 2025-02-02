"use client"
import { Globe, FileText, Youtube, FolderPlus, PlusCircle, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { AddUrl } from "../forms/add-url"
import { AddDocument } from "../forms/add-document"
import { AddNote } from "../forms/add-note"
import { AddYoutube } from "../forms/add-youtube"
import { CreateSpace } from "../forms/create-space"

interface AddMemoryDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddMemoryDialog({ open, onOpenChange }: AddMemoryDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <PlusCircle className="h-5 w-5" />
            Add Memory
          </DialogTitle>
          <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => onOpenChange(false)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>
        <Tabs defaultValue="url" className="mt-3">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="url">
              <Globe className="h-4 w-4" />
              <span className="sr-only">URL</span>
            </TabsTrigger>
            <TabsTrigger value="document">
              <FileText className="h-4 w-4" />
              <span className="sr-only">Document</span>
            </TabsTrigger>
            <TabsTrigger value="note">
              <FileText className="h-4 w-4" />
              <span className="sr-only">Note</span>
            </TabsTrigger>
            <TabsTrigger value="youtube">
              <Youtube className="h-4 w-4" />
              <span className="sr-only">YouTube</span>
            </TabsTrigger>
            <TabsTrigger value="space">
              <FolderPlus className="h-4 w-4" />
              <span className="sr-only">Space</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="url" className="mt-4">
            <AddUrl />
          </TabsContent>
          <TabsContent value="document" className="mt-4">
            <AddDocument />
          </TabsContent>
          <TabsContent value="note" className="mt-4">
            <AddNote />
          </TabsContent>
          <TabsContent value="youtube" className="mt-4">
            <AddYoutube />
          </TabsContent>
          <TabsContent value="space" className="mt-4">
            <CreateSpace />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

