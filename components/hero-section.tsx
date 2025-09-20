"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="opacity-0 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            The Future of{" "}
            <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>
        </div>

        <div className="opacity-0 animate-fade-in-up animate-delay-200">
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Empowering businesses with cutting-edge technology solutions that drive growth, enhance productivity, and
            create exceptional user experiences.
          </p>
        </div>

        <div className="opacity-0 animate-fade-in-up animate-delay-400">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              onClick={() => scrollToSection("about")}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg border-border hover:bg-accent bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="opacity-0 animate-fade-in animate-delay-600">
          <div className="text-sm text-muted-foreground font-mono">{"> npx create-techflow-app@latest"}</div>
        </div>
      </div>
    </section>
  )
}
