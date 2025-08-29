import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Users, Clock, Zap, Target, Gamepad2 } from 'lucide-react';

interface GameMode {
  id: number;
  name: string;
  description: string;
  players: string;
  duration: string;
  difficulty: string;
  icon: React.ComponentType<any>;
  image: string;
  popular?: boolean;
}

const gameModes: GameMode[] = [
  {
    id: 1,
    name: "Ranked Solo/Duo",
    description: "Climb the competitive ladder in intense 5v5 matches on Summoner's Rift.",
    players: "5v5",
    duration: "30-45 min",
    difficulty: "High",
    icon: Trophy,
    image: "/api/placeholder/400/250",
    popular: true
  },
  {
    id: 2,
    name: "ARAM",
    description: "All Random All Mid - Fast-paced action on the Howling Abyss.",
    players: "5v5",
    duration: "15-25 min",
    difficulty: "Low",
    icon: Zap,
    image: "/api/placeholder/400/250",
    popular: true
  },
  {
    id: 3,
    name: "Teamfight Tactics",
    description: "Auto-battler strategy game with champions and items.",
    players: "8 players",
    duration: "25-35 min",
    difficulty: "Medium",
    icon: Target,
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    name: "Arena",
    description: "Fast-paced 2v2v2v2 combat in a compact arena setting.",
    players: "2v2v2v2",
    duration: "10-15 min",
    difficulty: "Medium",
    icon: Gamepad2,
    image: "/api/placeholder/400/250"
  }
];

function GameModesSection() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Low": return "bg-success text-success-foreground";
      case "Medium": return "bg-warning text-warning-foreground";
      case "High": return "bg-error text-error-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Battle
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From competitive ranked matches to casual fun modes, find your perfect way to play
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gameModes.map(mode => {
            const IconComponent = mode.icon;
            return (
              <Card key={mode.id} className="game-mode-card bg-card border-border hover:border-accent transition-all duration-300 group">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={mode.image}
                      alt={mode.name}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {mode.popular && (
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-accent text-accent-foreground font-semibold">
                          Popular
                        </Badge>
                      </div>
                    )}
                    
                    <div className="absolute top-3 right-3">
                      <Badge className={getDifficultyColor(mode.difficulty)}>
                        {mode.difficulty}
                      </Badge>
                    </div>
                    
                    <div className="absolute bottom-3 left-3">
                      <div className="bg-background/80 backdrop-blur-sm rounded-lg p-2">
                        <IconComponent className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-bold text-foreground mb-2">
                    {mode.name}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {mode.description}
                  </p>
                  
                  <div className="flex justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {mode.players}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {mode.duration}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent-600 text-sm">
                    Play Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3"
          >
            View All Game Modes
          </Button>
        </div>
      </div>
    </section>
  );
}

export default GameModesSection;