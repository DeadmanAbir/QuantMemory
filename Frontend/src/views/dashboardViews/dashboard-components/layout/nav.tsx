"use client"

import { cn } from "@/lib/utils"
import { Link, useParams } from '@tanstack/react-router'

const items = [
  {
    title: "All Memories",
    href: "/",
  },
  {
    title: "Web pages",
    href: "/webpages",
  },
  {
    title: "Tweets",
    href: "/tweets",
  },
  {
    title: "Documents",
    href: "/documents",
  },
  {
    title: "Spaces",
    href: "/spaces",
  },
  {
    title: "Notes",
    href: "/notes",
  },
  {
    title: "YouTube",
    href: "/youtube",
  },
]

export function Nav() {
    const params = useParams({ strict: false })
    console.log(params)

  return (
    <nav className="flex items-center space-x-4 px-4 border-b">
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            "flex h-12 items-center text-sm font-medium transition-colors hover:text-primary",
            params === item.href ? "border-b-2 border-primary text-primary" : "text-muted-foreground",
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  )
}

