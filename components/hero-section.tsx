"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="opacity-0 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Hearing every voice{" "}
            <span className="bg-gradient-to-r from-primary to-muted-foreground bg-clip-text text-transparent">
              shaping better experiences.
            </span>
          </h1>
        </div>

        <div className="opacity-0 animate-fade-in-up animate-delay-200">
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            HearMeOut collects and analyzes customer reviews in one place. It
            highlights trends, problems, and strengths using automated insights.
            Companies get clear, actionable recommendations to improve products
            and customer experience.
          </p>
        </div>

        <div className="opacity-0 animate-fade-in-up animate-delay-400">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex flex-col space-y-4">
              {/* Navigate to /Chat */}
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                onClick={() => router.push("/Chat")}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <div className="flex space-x-4">
                {/* Scroll to About Section */}
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                  onClick={() => scrollToSection("about")}
                >
                  Good Reviews
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                  onClick={() => scrollToSection("features")}
                >
                  Bad Reviews
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                  onClick={() => scrollToSection("features")}
                >
                  Neutral Reviews
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                onClick={() => router.push("/Stats")}
              >
                Statistical Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
