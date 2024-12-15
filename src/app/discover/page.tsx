'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from 'lucide-react'
import { AnimatedSection } from "@/components/AnimatedSection"; // Import AnimatedSection

// Mock data for packages
const mockPackages = [
  { id: 1, name: 'Laravel Breeze', description: 'Minimal authentication scaffolding with Blade and Tailwind.', category: 'Authentication', stars: 1800 },
  { id: 2, name: 'Laravel Sanctum', description: 'Lightweight authentication for SPAs and mobile applications.', category: 'Authentication', stars: 2500 },
  { id: 3, name: 'Laravel Telescope', description: 'An elegant debug assistant for the Laravel framework.', category: 'Debugging', stars: 3700 },
  { id: 4, name: 'Laravel Horizon', description: 'Beautiful dashboard and code-driven configuration for Laravel queues.', category: 'Queue', stars: 4200 },
  { id: 5, name: 'Laravel Nova', description: 'Beautiful administration panel for Laravel applications.', category: 'Admin', stars: 5000 },
]

export default function DiscoverPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredPackages = mockPackages.filter(pkg => 
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === '' || pkg.category === selectedCategory)
  )

  const categories = Array.from(new Set(mockPackages.map(pkg => pkg.category)))

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <AnimatedSection> {/* Wrap main content with AnimatedSection */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 cyberpunk glitch" data-text="Discover Packages">
          Discover Packages
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search packages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          </div>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full h-10 pl-10 pr-4 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPackages.map(pkg => (
            <Card key={pkg.id} className="bg-secondary/10 border-primary/20 hover:border-primary transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{pkg.name}</span>
                  <Badge variant="secondary">{pkg.category}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">⭐ {pkg.stars}</span>
                  <Button variant="cyberpunk" size="sm">View Details</Button> {/* Updated Button */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">No packages found. Try adjusting your search or filter.</p>
        )}
      </div>
      </AnimatedSection> {/* Close AnimatedSection */}
    </div>
  )
}

