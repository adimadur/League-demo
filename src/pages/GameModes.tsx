import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Users, Clock, Zap, Target, Gamepad2 } from 'lucide-react';

interface GameMode {
  id: number;
  name: string;
  description: string;
  players: string;
  duration: string;
  difficulty: string;
  icon: React.ComponentType<any>;
  features: string[];
  image: string;
}

const gameModes: GameMode[] = [
  {
    id: 1,
    name: "Ranked Solo/Duo",
    description: "Climb the competitive ladder in intense 5v5 matches. Test your skills against players of similar rank.",
    players: "5v5",
    duration: "30-45 min",
    difficulty: "High",
    icon: Trophy,
    features: ["Ranked progression", "Draft pick", "Competitive matchmaking", "Season rewards"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 2,
    name: "Normal Draft",
    description: "Practice your skills in a structured environment with champion bans and strategic picks.",
    players: "5v5",
    duration: "30-45 min",
    difficulty: "Medium",
    icon: Users,
    features: ["Champion bans", "Role selection", "Practice environment", "No rank pressure"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 3,
    name: "ARAM",
    description: "All Random All Mid - Fast-paced action on the Howling Abyss with random champions.",
    players: "5v5",
    duration: "15-25 min",
    difficulty: "Low",
    icon: Zap,
    features: ["Random champions", "Single lane", "Constant action", "Quick matches"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 4,
    name: "Teamfight Tactics",
    description: "Auto-battler strategy game where you build and position your team to fight automatically.",
    players: "8 players",
    duration: "25-35 min",
    difficulty: "Medium",
    icon: Target,
    features: ["Auto-battler", "Strategy focused", "Item combinations", "Ranked system"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 5,
    name: "Arena",
    description: "Fast-paced 2v2v2v2 combat in a compact arena. Quick rounds, intense fights.",
    players: "2v2v2v2",
    duration: "10-15 min",
    difficulty: "Medium",
    icon: Gamepad2,
    features: ["Multiple teams", "Quick rounds", "Augment system", "Compact battles"],
    image: "/api/placeholder/400/250"
  },
  {
    id: 6,
    name: "Co-op vs AI",
    description: "Team up with other players to battle against AI opponents. Perfect for learning.",
    players: "5v5",
    duration: "20-30 min",
    difficulty: "Low",
    icon: Users,
    features: ["AI opponents", "Learning friendly", "Cooperative play", "Beginner safe"],
    image: "/api/placeholder/400/250"
  }
];

function GameModes() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Low": return "bg-success text-success-foreground";
      case "Medium": return "bg-warning text-warning-foreground";
      case "High": return "bg-error text-error-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Game Modes</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred way to play League of Legends. From competitive ranked matches to casual fun modes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {gameModes.map(mode => {
            const IconComponent = mode.icon;
            return (
              <Card key={mode.id} className="game-mode-card bg-card border-border hover:border-accent transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={mode.image}
                      alt={mode.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="bg-background/80 backdrop-blur-sm rounded-lg p-2">
                        <IconComponent className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge className={getDifficultyColor(mode.difficulty)}>
                        {mode.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {mode.name}
                  </CardTitle>
                  <p className="text-muted-foreground mb-4">{mode.description}</p>
                  
                  <div className="flex gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-accent" />
                      <span className="text-sm text-foreground">{mode.players}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-sm text-foreground">{mode.duration}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-2">Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {mode.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent-600">
                    Play {mode.name}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-accent-900 to-accent-800 border-accent">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-accent-foreground mb-4">
                New to League of Legends?
              </h2>
              <p className="text-accent-foreground/80 mb-6 max-w-2xl mx-auto">
                Start with Co-op vs AI to learn the basics, then try ARAM for quick action, 
                and work your way up to ranked matches when you're ready for competition.
              </p>
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
                Start Tutorial
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default GameModes;