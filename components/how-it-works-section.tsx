import { Card, CardContent } from "@/components/ui/card"
import { Upload, Users, BookOpen } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Schedule",
      description: "Simply upload your class schedule and we'll match you with students in the same courses.",
      step: "01",
    },
    {
      icon: Users,
      title: "Connect with Classmates",
      description: "Browse and connect with students and tutors from your university who share your classes.",
      step: "02",
    },
    {
      icon: BookOpen,
      title: "Start Studying Together",
      description: "Form study groups, schedule tutoring sessions, and excel academically as a team.",
      step: "03",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">How ClassConnect Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Getting connected with your classmates is simple and takes just minutes
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-0 shadow-lg bg-card">
              <CardContent className="p-8 text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>

                <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-card-foreground mb-4">{step.title}</h3>

                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
