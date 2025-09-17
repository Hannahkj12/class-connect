import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 ClassConnect. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 sm:mt-0">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">hello@classconnect.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
