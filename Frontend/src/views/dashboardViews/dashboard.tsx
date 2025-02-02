"use client"

import { useState } from "react";
import { Header } from "./dashboard-components/layout/header";
import { Nav } from "./dashboard-components/layout/nav";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { WebpageCard } from "./dashboard-components/cards/webpage-card";
import { DocumentCard } from "./dashboard-components/cards/document-card";
import { TweetCard } from "./dashboard-components/cards/tweet-card";
import { YoutubeCard } from "./dashboard-components/cards/youtube-card";
import { NoteCard } from "./dashboard-components/cards/note-card";
import { AddMemoryDialog } from "./dashboard-components/modals/add-memory-dialog";

const Dashboard = () => {
    const [addMemoryOpen, setAddMemoryOpen] = useState(false)

    return (    <div className="min-h-screen bg-background">
        <Header />
        <Nav />
        <main className="container mx-auto p-4">
          <div className="mb-8">
            <Button className="w-full sm:w-auto" onClick={() => setAddMemoryOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add to your second brain
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <WebpageCard title="Example Website" url="https://example.com/article" />
            <DocumentCard title="Project Proposal" type="PDF Document" preview="A comprehensive proposal for..." />
            <TweetCard
              username="John Doe"
              handle="johndoe"
              content="This is an example tweet with some interesting content..."
              avatar="/placeholder.svg"
            />
            <YoutubeCard title="How to Build a Second Brain" thumbnail="/placeholder.svg" videoId="xyz123" />
            <NoteCard title="Meeting Notes" content="Key points from today's meeting..." timestamp="2 hours ago" />
          </div>
        </main>
        <AddMemoryDialog open={addMemoryOpen} onOpenChange={setAddMemoryOpen} />
      </div> );
}
 
export default Dashboard;