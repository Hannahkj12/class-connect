import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">ClassConnect</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            How it Works
          </a>
          <a
            href="#testimonials"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Testimonials
          </a>
          <a
            href="#early-access"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Get Access
          </a>
        </nav>

        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Join Waitlist</Button>
      </div>
    </header>
  )
}
