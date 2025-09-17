import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/images/students-studying-together.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="container relative z-20 pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl text-balance">
            Find Your Perfect <span className="text-emerald-400">Study Partner</span> in Every Class
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl mx-auto text-pretty">
            Connect with classmates and tutors at your university based on your actual class schedule. Form study
            groups, find academic support, and excel together.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
