import { GraduationCap } from "lucide-react"

export function Header() {
  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-white" />
          <span className="text-xl font-bold text-white">ClassConnect</span>
        </div>
      </div>
    </header>
  )
}
