"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Zap, Shield, Globe, Rocket } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Sentiment Analysis",
      description:
        " Automatically evaluates customer reviews to identify positive, negative, or neutral feedback, helping companies quickly spot trends and issues. ",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Centralized customer review analysis",
      description: "Collect all reviews in one place for easier monitoring.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automated insights",
      description:
        "Identify common problems, praise points, and trends without manual effort.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Actionable summaries",
      description: "Generate short, clear recommendations from review data.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Collect and analyze reviews from anywhere",
      description:
        "HearMeOut aggregates customer feedback across multiple platforms and regions, giving companies a clear global view of customer sentiment to understand trends and preferences worldwide.",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Turn feedback into action instantly",
      description:
        "The platform quickly evaluates reviews and generates concise, actionable recommendations, enabling companies to respond to customer feedback faster and improve products or services efficiently.",
    },
  ];

  const technologies = [
    "Sentiment Analysis",
    "Trends",
    "Visualization",
    "Tracking",
    "Reviews",
    "Solutions",
    "Data Analysis",
    "Customer Feedback",
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
            Features We Provide
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
                Detailed information on our website
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  HearMeOut is a centralized platform designed to help
                  businesses understand their customers better by collecting and
                  analyzing reviews from multiple sources. Our website provides
                  a seamless interface where companies can easily upload,
                  manage, and view customer feedback in one place. By
                  consolidating all reviews into a single dashboard, HearMeOut
                  eliminates the need for multiple disconnected tools and manual
                  analysis, saving time and reducing errors. Whether your
                  business is small or large, the platform adapts to your needs,
                  giving you a comprehensive overview of what customers think
                  about your products and services.
                </p>
                <p>
                  The platform uses advanced sentiment analysis and automated
                  insights to highlight both strengths and areas for
                  improvement. Positive, negative, and neutral feedback is
                  automatically categorized, making it easier to identify trends
                  and recurring issues. Our website allows users to generate
                  actionable summaries from the collected data, so teams can
                  quickly understand customer sentiment and take proactive steps
                  to enhance the customer experience. Detailed visualizations,
                  graphs, and charts ensure that even non-technical users can
                  interpret the results effortlessly.
                </p>
                <p>
                  Beyond analytics, HearMeOut focuses on helping businesses act
                  on customer feedback effectively. The website provides
                  features like global review aggregation, trend tracking, and a
                  centralized recommendation system that helps companies
                  prioritize solutions. Future updates will include community
                  discussion areas, tracking the impact of implemented
                  solutions, and integration with more platforms, making it a
                  robust tool for long-term growth. By visiting our website,
                  companies can explore demo prototypes, understand the tech
                  stack behind the platform, and see how HearMeOut can transform
                  review management into a strategic advantage.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
