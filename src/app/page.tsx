import Hero from '@/components/Hero'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Package, Clock, Zap } from 'lucide-react'
import Link from 'next/link'
import { AnimatedSection } from '@/components/AnimatedSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 cyberpunk neon-text">Featured Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Authentication', 'Database', 'Testing'].map((category) => (
              <Card key={category} className="bg-secondary/10 border-primary/20 hover:border-primary transition-colors duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{category}</h3>
                  <p className="text-muted-foreground mb-4">Explore top {category.toLowerCase()} packages for Laravel</p>
                  <Link href={`/discover?category=${category.toLowerCase()}`} className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200">
                    Discover <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 cyberpunk neon-text">Our Goal</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                LaraFind's mission is to revolutionize Laravel development by making package discovery effortless. We believe in harnessing the power of the Laravel community's collective genius.
              </p>
              <p className="text-lg mb-6">
                Instead of reinventing the wheel or starting from scratch, we help you find the perfect packages to accelerate your project development, saving you time and effort.
              </p>
              <Button variant="cyberpunk" size="lg" asChild className="mt-4 w-full sm:w-auto">
                <Link href="/discover">Explore Packages</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-background/50 border-primary/20">
                <CardContent className="p-6 flex items-center">
                  <Package className="w-12 h-12 mr-4 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Vast Package Library</h3>
                    <p className="text-muted-foreground">Access a curated collection of Laravel packages for every need</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-primary/20">
                <CardContent className="p-6 flex items-center">
                  <Clock className="w-12 h-12 mr-4 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Save Development Time</h3>
                    <p className="text-muted-foreground">Quickly find and integrate the right packages for your project</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-background/50 border-primary/20">
                <CardContent className="p-6 flex items-center">
                  <Zap className="w-12 h-12 mr-4 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Boost Productivity</h3>
                    <p className="text-muted-foreground">Leverage community-built solutions to enhance your workflow</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 cyberpunk neon-text">Ready to Enhance Your Laravel Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover the perfect packages to take your Laravel application to the next level.
          </p>
          <Button variant="cyberpunk" size="lg" asChild>
            <Link href="/discover">Start Exploring</Link>
          </Button>
        </div>
      </AnimatedSection>
    </div>
  )
}

