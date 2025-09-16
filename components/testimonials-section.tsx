import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Computer Science Student",
      university: "UC Berkeley",
      content:
        "ClassConnect helped me find an amazing study group for my algorithms class. We went from struggling individually to acing our exams together!",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Biology Tutor",
      university: "Stanford University",
      content:
        "As a tutor, ClassConnect makes it so easy to connect with students who need help in my areas of expertise. The scheduling feature is fantastic.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Pre-Med Student",
      university: "UCLA",
      content:
        "I was struggling with organic chemistry until I found a tutor through ClassConnect. Now I'm confident and helping other students too!",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">What Students Are Saying</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join thousands of students who are already succeeding together
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>

                <blockquote className="text-card-foreground mb-6 leading-relaxed">"{testimonial.content}"</blockquote>

                <div className="border-t pt-4">
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.university}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
