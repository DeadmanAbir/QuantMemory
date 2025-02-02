"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function SpaceSelect() {
  return (
    <div className="space-y-2">
      <Label htmlFor="space">Space</Label>
      <Select>
        <SelectTrigger id="space">
          <SelectValue placeholder="Select a space" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="personal">Personal</SelectItem>
          <SelectItem value="work">Work</SelectItem>
          <SelectItem value="research">Research</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

