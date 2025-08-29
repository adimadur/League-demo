import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Download, Users } from 'lucide-react';

function HeroSection() {
  return (
    <section className="hero-section relative min-h-screen bg-gradient-to-br from-primary-900 to-primary-800 overflow-hidden flex items-center">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-primary-900/90 to-primary-800/90">
          <img 
            src="/api/placeholder/1920/1080" 
            alt="League of Legends Gameplay"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1500" />
      </div>

      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 fade-in-up">
            Welcome to the
            <span className="block text-accent glow-effect">Rift</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto fade-in-up">
            Join millions of players in the world's most competitive MOBA. 
            Master unique champions, climb the ranked ladder, and become a legend.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-up">
            <Button 
              size="lg" 
              className="cta-button bg-accent text-accent-foreground hover:bg-accent-600 glow-effect px-8 py-4 text-lg font-bold flex items-center gap-3"
            >
              <Download className="h-5 w-5" />
              Play Free Now
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-bold flex items-center gap-3"
            >
              <Play className="h-5 w-5" />
              Watch Trailer
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto fade-in-up">
            <div className="community-stat text-center p-6 bg-background/10 backdrop-blur-sm border border-border/20 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-6 w-6 text-accent" />
                <div className="text-3xl font-bold text-accent">180M+</div>
              </div>
              <div className="text-sm text-muted-foreground">Monthly Players</div>
            </div>
            
            <div className="community-stat text-center p-6 bg-background/10 backdrop-blur-sm border border-border/20 rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">160+</div>
              <div className="text-sm text-muted-foreground">Unique Champions</div>
            </div>
            
            <div className="community-stat text-center p-6 bg-background/10 backdrop-blur-sm border border-border/20 rounded-lg">
              <div className="text-3xl font-bold text-accent mb-2">14</div>
              <div className="text-sm text-muted-foreground">Global Leagues</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;