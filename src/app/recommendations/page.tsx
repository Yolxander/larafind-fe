'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from '@/components/AnimatedSection'
import { motion } from 'framer-motion'
import { getRecommendations } from '@/utils/gptApi'

type Package = {
  name: string;
  description: string;
  category: string;
};

export default function RecommendationsPage() {
  const [projectDescription, setProjectDescription] = useState('')
  const [recommendations, setRecommendations] = useState<Package[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showForm, setShowForm] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    try {
      const result = await getRecommendations(projectDescription)
      if (result.length === 0) {
        setError("No recommendations found. Please try a different project description.")
      } else {
        setRecommendations(result)
        setShowForm(false)
      }
    } catch (error) {
      console.error("Error getting recommendations:", error);
      setError(`Error: ${error.message || 'An unknown error occurred'}`);
    } finally {
      setIsLoading(false)
    }
  }

  const handleNewRecommendations = () => {
    setShowForm(true)
    setRecommendations([])
    setProjectDescription('')
    setError(null)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-primary cyberpunk glitch" data-text="AI Recommendations">
              AI Recommendations
            </h1>
            {!showForm && (
              <Button variant="cyberpunk" onClick={handleNewRecommendations}>
                New Recommendations
              </Button>
            )}
          </div>
        </AnimatedSection>
        <AnimatedSection>
          {showForm ? (
            <Card className="bg-secondary/10 border-primary/20 mb-8">
              <CardHeader>
                <CardTitle>Describe Your Project</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Textarea
                    placeholder="Tell us about your Laravel project and what functionality you need..."
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    rows={5}
                    className="w-full"
                  />
                  <Button variant="cyberpunk" type="submit" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading ? 'Getting Recommendations...' : 'Get Recommendations'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : null}
          {error && (
            <Card className="bg-destructive/10 border-destructive text-destructive mb-8">
              <CardContent className="p-4">
                <p>{error}</p>
              </CardContent>
            </Card>
          )}
        </AnimatedSection>

        {recommendations.length > 0 && (
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-4 cyberpunk neon-text">Recommended Packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendations.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-secondary/10 border-primary/20">
                    <CardContent className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                      <p className="text-muted-foreground mb-4">
                        {pkg.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary">{pkg.category}</Badge>
                        <Button variant="cyberpunk" size="sm">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  )
}

