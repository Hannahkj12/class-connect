"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Mail, User, GraduationCap } from "lucide-react"

export function EarlyAccessSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    university: "",
    userType: "student",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <section id="early-access" className="py-20 bg-primary/5">
        <div className="container">
          <div className="mx-auto max-w-md text-center">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-card-foreground mb-4">You're In!</h3>
                <p className="text-muted-foreground mb-6">
                  Thanks for joining our waitlist. We'll notify you as soon as ClassConnect launches at your university.
                </p>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  Early Access Secured
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="early-access" className="py-20 bg-primary/5">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <Card className="border-0 shadow-xl">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-card-foreground mb-4">
                Get Early Access to ClassConnect
              </CardTitle>
              <p className="text-lg text-muted-foreground">
                Be among the first to connect with classmates and tutors at your university. Join our waitlist and get
                notified when we launch!
              </p>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10"
                        placeholder="your.email@university.edu"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="university" className="text-sm font-medium text-card-foreground">
                    University
                  </label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="university"
                      name="university"
                      type="text"
                      required
                      value={formData.university}
                      onChange={handleInputChange}
                      className="pl-10"
                      placeholder="Your University Name"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-card-foreground">I am a:</label>
                  <div className="flex gap-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="userType"
                        value="student"
                        checked={formData.userType === "student"}
                        onChange={handleInputChange}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-card-foreground">Student</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="userType"
                        value="tutor"
                        checked={formData.userType === "tutor"}
                        onChange={handleInputChange}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-card-foreground">Tutor</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="userType"
                        value="both"
                        checked={formData.userType === "both"}
                        onChange={handleInputChange}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-card-foreground">Both</span>
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold"
                >
                  Get Early Access
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-muted-foreground">
                  By signing up, you agree to receive updates about ClassConnect. We respect your privacy and won't spam
                  you.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
