'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedSection } from './AnimatedSection'
import { useEffect, useRef } from 'react'

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const gridSize = 50
    const lines: { x1: number; y1: number; x2: number; y2: number; color: string; speed: number }[] = []

    // Create vertical lines
    for (let x = 0; x < canvas.width; x += gridSize) {
      lines.push({
        x1: x,
        y1: 0,
        x2: x,
        y2: canvas.height,
        color: `rgba(0, 255, 255, ${Math.random() * 0.5 + 0.1})`,
        speed: Math.random() * 0.5 + 0.1
      })
    }

    // Create horizontal lines
    for (let y = 0; y < canvas.height; y += gridSize) {
      lines.push({
        x1: 0,
        y1: y,
        x2: canvas.width,
        y2: y,
        color: `rgba(255, 0, 255, ${Math.random() * 0.5 + 0.1})`,
        speed: Math.random() * 0.5 + 0.1
      })
    }

    function drawLine(x1: number, y1: number, x2: number, y2: number, color: string) {
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.strokeStyle = color
      ctx.stroke()
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      lines.forEach((line) => {
        if (line.x1 === line.x2) { // Vertical line
          line.y1 += line.speed
          line.y2 += line.speed
          if (line.y1 > canvas.height) {
            line.y1 = line.y2 - canvas.height
          }
          if (line.y2 > canvas.height) {
            line.y2 = line.y1 - canvas.height
          }
        } else { // Horizontal line
          line.x1 += line.speed
          line.x2 += line.speed
          if (line.x1 > canvas.width) {
            line.x1 = line.x2 - canvas.width
          }
          if (line.x2 > canvas.width) {
            line.x2 = line.x1 - canvas.width
          }
        }
        drawLine(line.x1, line.y1, line.x2, line.y2, line.color)
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary/20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30" />
      <AnimatedSection className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary mb-6 glitch" data-text="Laravel Packages">
          Laravel Packages
        </h1>
        <p className="mt-3 max-w-md mx-auto text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-10">
          Discover and explore with AI-powered recommendations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/discover" passHref>
            <Button size="lg" className="w-full sm:w-auto px-8 py-3 text-lg">
              Explore
            </Button>
          </Link>
          <Link href="/recommendations" passHref>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-3 text-lg">
              Get Recommendations
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  )
}

export default Hero

