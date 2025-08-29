import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Sword, Shield, Zap, Heart } from 'lucide-react';

interface Champion {
  id: number;
  name: string;
  title: string;
  role: string;
  difficulty: number;
  image: string;
  abilities: string[];
}

const champions: Champion[] = [
  {
    id: 1,
    name: "Ahri",
    title: "The Nine-Tailed Fox",
    role: "Mage",
    difficulty: 2,
    image: "/api/placeholder/300/400",
    abilities: ["Orb of Deception", "Fox-Fire", "Charm", "Spirit Rush"]
  },
  {
    id: 2,
    name: "Garen",
    title: "The Might of Demacia",
    role: "Fighter",
    difficulty: 1,
    image: "/api/placeholder/300/400",
    abilities: ["Decisive Strike", "Courage", "Judgment", "Demacian Justice"]
  },
  {
    id: 3,
    name: "Jinx",
    title: "The Loose Cannon",
    role: "Marksman",
    difficulty: 2,
    image: "/api/placeholder/300/400",
    abilities: ["Switcheroo!", "Zap!", "Flame Chompers!", "Super Mega Death Rocket!"]
  },
  {
    id: 4,
    name: "Thresh",
    title: "The Chain Warden",
    role: "Support",
    difficulty: 3,
    image: "/api/placeholder/300/400",
    abilities: ["Death Sentence", "Dark Passage", "Flay", "The Box"]
  },
  {
    id: 5,
    name: "Lee Sin",
    title: "The Blind Monk",
    role: "Fighter",
    difficulty: 3,
    image: "/api/placeholder/300/400",
    abilities: ["Sonic Wave", "Safeguard", "Tempest", "Dragon's Rage"]
  },
  {
    id: 6,
    name: "Lux",
    title: "The Lady of Luminosity",
    role: "Mage",
    difficulty: 2,
    image: "/api/placeholder/300/400",
    abilities: ["Light Binding", "Prismatic Barrier", "Lucent Singularity", "Final Spark"]
  }
];

const roleIcons = {
  Mage: Zap,
  Fighter: Sword,
  Marksman: Sword,
  Support: Shield,
  Tank: Shield
};

function Champions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const filteredChampions = champions.filter(champion => {
    const matchesSearch = champion.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         champion.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "" || champion.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const roles = [...new Set(champions.map(c => c.role))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Champions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your champion and master their unique abilities on the Rift
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search champions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Badge
              variant={selectedRole === "" ? "default" : "secondary"}
              className={`cursor-pointer px-4 py-2 ${
                selectedRole === "" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
              onClick={() => setSelectedRole("")}
            >
              All
            </Badge>
            {roles.map(role => {
              const IconComponent = roleIcons[role as keyof typeof roleIcons] || Heart;
              return (
                <Badge
                  key={role}
                  variant={selectedRole === role ? "default" : "secondary"}
                  className={`cursor-pointer px-4 py-2 flex items-center gap-2 ${
                    selectedRole === role ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                  onClick={() => setSelectedRole(role)}
                >
                  <IconComponent className="h-3 w-3" />
                  {role}
                </Badge>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredChampions.map(champion => {
            const IconComponent = roleIcons[champion.role as keyof typeof roleIcons] || Heart;
            return (
              <Card key={champion.id} className="group champion-card bg-card border-border hover:border-accent transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={champion.image}
                      alt={champion.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent text-accent-foreground">
                        <IconComponent className="h-3 w-3 mr-1" />
                        {champion.role}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < champion.difficulty ? "bg-accent" : "bg-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold text-foreground mb-1">
                    {champion.name}
                  </CardTitle>
                  <p className="text-accent text-sm mb-4">{champion.title}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Abilities:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {champion.abilities.map((ability, index) => (
                        <div key={index} className="text-xs text-muted-foreground truncate">
                          {ability}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredChampions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No champions found matching your criteria.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Champions;