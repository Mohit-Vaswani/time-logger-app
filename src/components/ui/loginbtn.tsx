"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"

export function LoginBtn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button>Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Work in progress...</DialogTitle>
          <DialogDescription>
            Login functionality coming soon. Thanks for coming:)
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
