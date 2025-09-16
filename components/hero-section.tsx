import { Button } from "@/components/ui/button"
import { ArrowRight, Users, BookOpen, Target } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
            Find Your Perfect <span className="text-primary">Study Partner</span> in Every Class
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Connect with classmates and tutors at your university based on your actual class schedule. Form study
            groups, find academic support, and excel together.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg bg-transparent">
              Learn More
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-primary/10 p-3 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Find Classmates</h3>
              <p className="text-sm text-muted-foreground text-center">Connect with students in your exact classes</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-full bg-secondary/10 p-3 mb-4">
                <BookOpen className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Form Study Groups</h3>
              <p className="text-sm text-muted-foreground text-center">
                Create or join study sessions for better learning
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-full bg-accent/10 p-3 mb-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Get Tutoring</h3>
              <p className="text-sm text-muted-foreground text-center">Find qualified tutors from your university</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-secondary" />
        </div>
      </div>
    </section>
  )
}
