'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/AnimatedSection"
import { Send, Github, Twitter, Linkedin } from 'lucide-react'

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formState)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Cyberpunk-inspired background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-5" />
      </div>

      <AnimatedSection>
        <div className="max-w-2xl mx-auto relative z-10">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center glitch" data-text="Connect with Us">
            Connect with Us
          </h1>
          <Card className="bg-background/80 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    type="text" 
                    required 
                    className="mt-1 bg-background/50" 
                    value={formState.name}
                    onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    className="mt-1 bg-background/50" 
                    value={formState.email}
                    onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    className="mt-1 bg-background/50" 
                    value={formState.message}
                    onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                  />
                </div>
                <Button type="submit" className="w-full group">
                  <span>Send Message</span>
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Stay Connected</h2>
            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
              ].map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  aria-label={platform.label}
                >
                  <platform.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

