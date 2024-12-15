import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/AnimatedSection"
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h1 className="text-4xl font-bold text-primary mb-8 text-center">
            About LaraFind: Streamlining Laravel Package Discovery
          </h1>
        </AnimatedSection>
        
        <AnimatedSection>
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">What We're About</h2>
              <p className="text-lg mb-4">
                LaraFind is here to simplify your Laravel development process. We're not reinventing the wheel; we're just making it easier to find the right wheels for your project.
              </p>
              <p className="text-lg">
                Our goal is straightforward: we want to make Laravel package discovery as painless as possible. Whether you're a solo dev or part of a larger team, we're here to save you time and headaches.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Community-Driven Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Laravel community is our biggest asset. We're tapping into this collective knowledge to bring you the most relevant and useful packages.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Keeping Pace with Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The Laravel ecosystem moves fast. We're here to make sure you're always up to speed with the latest and greatest packages.
                </p>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">How LaraFind Works</h2>
              <p className="text-lg mb-4">
                We've built an AI-powered tool that suggests packages based on your project needs. It's like having a senior developer on your team who knows every Laravel package out there.
              </p>
              <p className="text-lg mb-4">
                But we're not just relying on AI. We're also leveraging the experiences of developers like you. Every package comes with insights from the community, giving you a real-world perspective on what works and what doesn't.
              </p>
              <p className="text-lg">
                Think of LaraFind as your shortcut to finding the right tools for the job. We're here to help you spend less time searching and more time building.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Get Involved</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-6">
                LaraFind is more than just a tool; it's a community effort. We encourage you to explore packages, try them out in your projects, and share your experiences.
              </p>
              <p className="text-lg mb-6">
                Your reviews and feedback are crucial. They help other developers make informed decisions and contribute to the overall quality of the Laravel ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <Button asChild size="lg">
                  <Link href="/discover">Explore Packages</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/reviews">Share Your Experience</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Join Us in Improving Laravel Development</h2>
            <p className="text-lg text-muted-foreground">
              Every package you discover and every review you leave contributes to a more efficient Laravel community. Let's make development smoother, one package at a time.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

