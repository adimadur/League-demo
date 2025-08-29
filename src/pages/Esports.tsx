import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Calendar1 as Calendar, Users, MapPin, Clock, Play } from 'lucide-react';

interface Tournament {
  id: number;
  name: string;
  status: "live" | "upcoming" | "completed";
  date: string;
  teams: string[];
  prize: string;
  location: string;
  image: string;
}

interface Match {
  id: number;
  team1: string;
  team2: string;
  score: string;
  status: "live" | "upcoming" | "completed";
  time: string;
  tournament: string;
}

const tournaments: Tournament[] = [
{
  id: 1,
  name: "World Championship 2024",
  status: "live",
  date: "Oct 15 - Nov 2, 2024",
  teams: ["T1", "G2 Esports", "JDG", "BLG"],
  prize: "$2,225,000",
  location: "London, UK",
  image: "/api/placeholder/400/250"
},
{
  id: 2,
  name: "LCS Championship",
  status: "upcoming",
  date: "Dec 1 - Dec 15, 2024",
  teams: ["Cloud9", "Team Liquid", "100 Thieves", "FlyQuest"],
  prize: "$500,000",
  location: "Los Angeles, USA",
  image: "/api/placeholder/400/250"
},
{
  id: 3,
  name: "LEC Spring Split",
  status: "completed",
  date: "Jan 20 - Apr 14, 2024",
  teams: ["G2 Esports", "Fnatic", "MAD Lions", "Team Heretics"],
  prize: "$300,000",
  location: "Berlin, Germany",
  image: "/api/placeholder/400/250"
}];


const matches: Match[] = [
{
  id: 1,
  team1: "T1",
  team2: "G2 Esports",
  score: "2-1",
  status: "live",
  time: "Live Now",
  tournament: "World Championship"
},
{
  id: 2,
  team1: "JDG",
  team2: "BLG",
  score: "vs",
  status: "upcoming",
  time: "3:00 PM EST",
  tournament: "World Championship"
},
{
  id: 3,
  team1: "Cloud9",
  team2: "Team Liquid",
  score: "vs",
  status: "upcoming",
  time: "6:00 PM EST",
  tournament: "LCS Championship"
},
{
  id: 4,
  team1: "Fnatic",
  team2: "MAD Lions",
  score: "3-0",
  status: "completed",
  time: "Completed",
  tournament: "LEC Spring Split"
}];


function Esports() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "live":return "bg-error text-error-foreground animate-pulse";
      case "upcoming":return "bg-warning text-warning-foreground";
      case "completed":return "bg-success text-success-foreground";
      default:return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "live":return "LIVE";
      case "upcoming":return "UPCOMING";
      case "completed":return "COMPLETED";
      default:return status.toUpperCase();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Esports</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow the world's best League of Legends teams as they compete for glory and championship titles.
          </p>
        </div>

        {/* Live Matches Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Play className="h-8 w-8 text-accent" />
            Live & Upcoming Matches
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matches.map((match) =>
            <Card key={match.id} className="bg-card border-border hover:border-accent transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={getStatusColor(match.status)}>
                      {getStatusText(match.status)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{match.tournament}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center flex-1">
                      <h3 className="font-bold text-foreground text-lg">{match.team1}</h3>
                    </div>
                    <div className="text-center px-4">
                      <span className="text-2xl font-bold text-accent">{match.score}</span>
                    </div>
                    <div className="text-center flex-1">
                      <h3 className="font-bold text-foreground text-lg">{match.team2}</h3>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{match.time}</span>
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
        </section>

        {/* Tournaments Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Trophy className="h-8 w-8 text-accent" />
            Major Tournaments
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {tournaments.map((tournament) =>
            <Card key={tournament.id} className="esports-highlight bg-card border-border hover:border-accent transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                    src={tournament.image}
                    alt={tournament.name}
                    className="w-full h-48 object-cover" />

                    <div className="absolute top-4 right-4">
                      <Badge className={getStatusColor(tournament.status)}>
                        {getStatusText(tournament.status)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {tournament.name}
                  </CardTitle>
                  
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
        </section>

        {/* Stats Section */}
        <section>
          <Card className="bg-gradient-to-r from-accent-900 to-accent-800 border-accent">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-accent-foreground mb-8 text-center">
                Esports by the Numbers
              </h2>
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
        </section>
      </main>

      <Footer />
    </div>);

}

export default Esports;