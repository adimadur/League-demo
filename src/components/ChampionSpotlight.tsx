import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Sword, Shield, Zap, Heart } from 'lucide-react';

interface Champion {
  id: number;
  name: string;
  title: string;
  role: string;
  description: string;
  abilities: string[];
  image: string;
  splashArt: string;
}

const featuredChampions: Champion[] = [
  {
    id: 1,
    name: "Ahri",
    title: "The Nine-Tailed Fox",
    role: "Mage",
    description: "Innately connected to the latent power of Runeterra, Ahri is a vastaya who can reshape magic into orbs of raw energy.",
    abilities: ["Orb of Deception", "Fox-Fire", "Charm", "Spirit Rush"],
    image: "/api/placeholder/400/500",
    splashArt: "/api/placeholder/1200/600"
  },
  {
    id: 2,
    name: "Yasuo",
    title: "The Unforgiven",
    role: "Fighter",
    description: "An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies.",
    abilities: ["Steel Tempest", "Wind Wall", "Sweeping Blade", "Last Breath"],
    image: "/api/placeholder/400/500",
    splashArt: "/api/placeholder/1200/600"
  },
  {
    id: 3,
    name: "Jinx",
    title: "The Loose Cannon",
    role: "Marksman",
    description: "A manic and impulsive criminal from Zaun, Jinx lives to wreak havoc without care for the consequences.",
    abilities: ["Switcheroo!", "Zap!", "Flame Chompers!", "Super Mega Death Rocket!"],
    image: "/api/placeholder/400/500",
    splashArt: "/api/placeholder/1200/600"
  }
];

const roleIcons = {
  Mage: Zap,
  Fighter: Sword,
  Marksman: Sword,
  Support: Shield,
  Tank: Shield
};

function ChampionSpotlight() {
  const [currentChampion, setCurrentChampion] = useState(0);

  const nextChampion = () => {
    setCurrentChampion((prev) => (prev + 1) % featuredChampions.length);
  };

  const prevChampion = () => {
    setCurrentChampion((prev) => (prev - 1 + featuredChampions.length) % featuredChampions.length);
  };

  const champion = featuredChampions[currentChampion];
  const IconComponent = roleIcons[champion.role as keyof typeof roleIcons] || Heart;

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Champion Spotlight
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master unique champions with distinct playstyles, abilities, and roles
          </p>
        </div>

        <div className="relative">
          {/* Main Champion Display */}
          <Card className="champion-card bg-card border-border overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Champion Art */}
              <div className="relative overflow-hidden">
                <img
                  src={champion.splashArt}
                  alt={champion.name}
                  className="w-full h-96 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground flex items-center gap-2">
                    <IconComponent className="h-4 w-4" />
                    {champion.role}
                  </Badge>
                </div>
              </div>

              {/* Champion Info */}
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-foreground mb-2">
                  {champion.name}
                </h3>
                <p className="text-xl text-accent mb-6">{champion.title}</p>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  {champion.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-4 text-lg">Abilities:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {champion.abilities.map((ability, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-surface rounded-lg border border-border">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="text-foreground font-medium">{ability}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="bg-accent text-accent-foreground hover:bg-accent-600 text-lg px-8 py-3">
                  Learn More About {champion.name}
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevChampion}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {featuredChampions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentChampion(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentChampion ? 'bg-accent' : 'bg-muted hover:bg-accent/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextChampion}
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Champion Thumbnails */}
          <div className="flex justify-center gap-4 mt-8">
            {featuredChampions.map((champ, index) => (
              <button
                key={champ.id}
                onClick={() => setCurrentChampion(index)}
                className={`relative overflow-hidden rounded-lg transition-all duration-200 ${
                  index === currentChampion 
                    ? 'ring-2 ring-accent scale-105' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={champ.image}
                  alt={champ.name}
                  className="w-16 h-20 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-1 left-1 right-1">
                  <p className="text-white text-xs font-semibold truncate">{champ.name}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChampionSpotlight;