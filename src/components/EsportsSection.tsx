import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar1 as Calendar, MapPin, Play, Users } from 'lucide-react';

interface Tournament {
  id: number;
  name: string;
  status: "live" | "upcoming" | "completed";
  date: string;
  location: string;
  prize: string;
  image: string;
  teams: string[];
}

const tournaments: Tournament[] = [
{
  id: 1,
  name: "World Championship 2024",
  status: "live",
  date: "Oct 15 - Nov 2",
  location: "London, UK",
  prize: "$2,225,000",
  image: "/api/placeholder/600/300",
  teams: ["T1", "G2 Esports", "JDG", "BLG"]
},
{
  id: 2,
  name: "LCS Championship",
  status: "upcoming",
  date: "Dec 1 - Dec 15",
  location: "Los Angeles, USA",
  prize: "$500,000",
  image: "/api/placeholder/600/300",
  teams: ["Cloud9", "Team Liquid", "100 Thieves", "FlyQuest"]
}];


interface Match {
  id: number;
  team1: string;
  team2: string;
  score: string;
  status: "live" | "upcoming";
  time: string;
}

const liveMatches: Match[] = [
{
  id: 1,
  team1: "T1",
  team2: "G2 Esports",
  score: "2-1",
  status: "live",
  time: "Live Now"
},
{
  id: 2,
  team1: "JDG",
  team2: "BLG",
  score: "vs",
  status: "upcoming",
  time: "3:00 PM EST"
}];


function EsportsSection() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":return "bg-error text-error-foreground animate-pulse";
      case "upcoming":return "bg-warning text-warning-foreground";
      case "completed":return "bg-success text-success-foreground";
      default:return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Esports Arena
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow the world's best teams as they compete for glory and championship titles
          </p>
        </div>

        {/* Live Matches */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Play className="h-6 w-6 text-accent" />
            Live & Upcoming Matches
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {liveMatches.map((match) =>
            <Card key={match.id} className="bg-card border-border hover:border-accent transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={getStatusColor(match.status)}>
                      {match.status === "live" ? "LIVE" : "UPCOMING"}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{match.time}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1">
                      <h4 className="font-bold text-foreground text-lg">{match.team1}</h4>
                    </div>
                    <div className="text-center px-4">
                      <span className="text-2xl font-bold text-accent">{match.score}</span>
                    </div>
                    <div className="text-center flex-1">
                      <h4 className="font-bold text-foreground text-lg">{match.team2}</h4>
                    </div>
                  </div>
                  
                  {match.status === "live" &&
                <Button className="w-full mt-4 bg-error text-error-foreground hover:bg-error/90">
                      Watch Live
                    </Button>
                }
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Major Tournaments */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Trophy className="h-6 w-6 text-accent" />
            Major Tournaments
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {tournaments.map((tournament) =>
            <Card key={tournament.id} className="esports-highlight bg-card border-border hover:border-accent transition-all duration-300 overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img
                    src={tournament.image}
                    alt={tournament.name}
                    className="w-full h-48 object-cover" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge className={getStatusColor(tournament.status)}>
                        {tournament.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white">{tournament.name}</h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 text-accent" />
                      <span className="text-sm">{tournament.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span className="text-sm">{tournament.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Trophy className="h-4 w-4 text-accent" />
                      <span className="text-sm font-semibold text-accent">{tournament.prize}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Featured Teams:</h4>
                    <div className="flex flex-wrap gap-2">
                      {tournament.teams.map((team, index) =>
                    <Badge key={index} variant="secondary" className="bg-muted text-muted-foreground">
                          {team}
                        </Badge>
                    )}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent-600">
                    View Tournament
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Esports Stats */}
        <Card className="bg-gradient-to-r from-accent-900 to-accent-800 border-accent">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold text-accent-foreground mb-8 text-center">
              Esports by the Numbers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-foreground mb-2">180M+</div>
                <div className="text-accent-foreground/80">Monthly Viewers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-foreground mb-2">$15M+</div>
                <div className="text-accent-foreground/80">Total Prize Pool 2024</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-foreground mb-2">100+</div>
                <div className="text-accent-foreground/80">Professional Teams</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>);

}

export default EsportsSection;