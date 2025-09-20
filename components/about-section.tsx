"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Zap, Shield, Globe, Rocket } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Advanced Development",
      description:
        "Cutting-edge technologies and frameworks to build scalable, modern applications that meet tomorrow's demands.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description:
        "Our diverse team of specialists brings years of experience across multiple industries and technologies.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description:
        "Optimized performance and efficient solutions that deliver results at unprecedented speed.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description:
        "Bank-level security protocols and compliance standards to protect your most valuable data.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Scale",
      description:
        "Infrastructure designed to scale globally with 99.9% uptime and worldwide content delivery.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Innovation First",
      description:
        "Always at the forefront of technology, implementing the latest innovations for competitive advantage.",
    },
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "Kubernetes",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About HearMeOut
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            HearMeOut is a smart platform that listens to customer feedback,
            analyzes reviews, and turns them into clear, actionable insights. It
            helps businesses understand what customers love, what needs
            improvement, and how to enhance their products and services—all from
            a single, easy-to-use dashboard.
          </p>
        </div>

        {/* Company Stats */}

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:bg-accent/50 transition-colors duration-300"
            >
              <CardContent className="p-6">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            Technologies We Master
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-secondary hover:bg-accent transition-colors duration-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Company Story */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Our Story
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020 by a team of passionate engineers and
                  entrepreneurs, TechFlow emerged from a simple belief:
                  technology should empower, not complicate. We started in a
                  small garage with big dreams and an unwavering commitment to
                  excellence.
                </p>
                <p>
                  Today, we've grown into a trusted partner for businesses
                  worldwide, from innovative startups to Fortune 500 companies.
                  Our journey has been marked by continuous learning,
                  adaptation, and an relentless focus on delivering value to our
                  clients.
                </p>
                <p>
                  As we look to the future, we remain committed to pushing the
                  boundaries of what's possible, embracing emerging
                  technologies, and helping our clients stay ahead in an
                  ever-evolving digital landscape.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
