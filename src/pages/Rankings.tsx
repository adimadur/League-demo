import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trophy, Medal, Crown, Star, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface Player {
  id: number;
  rank: number;
  name: string;
  tier: string;
  lp: number;
  winRate: number;
  games: number;
  mainChampion: string;
  region: string;
  change: "up" | "down" | "same";
}

interface Team {
  id: number;
  rank: number;
  name: string;
  region: string;
  points: number;
  winRate: number;
  matches: number;
  change: "up" | "down" | "same";
}

const soloQueuePlayers: Player[] = [
  {
    id: 1,
    rank: 1,
    name: "Faker",
    tier: "Challenger",
    lp: 1247,
    winRate: 73,
    games: 156,
    mainChampion: "Azir",
    region: "KR",
    change: "same"
  },
  {
    id: 2,
    rank: 2,
    name: "Canyon",
    tier: "Challenger",
    lp: 1198,
    winRate: 71,
    games: 142,
    mainChampion: "Graves",
    region: "KR",
    change: "up"
  },
  {
    id: 3,
    rank: 3,
    name: "Caps",
    tier: "Challenger",
    lp: 1156,
    winRate: 69,
    games: 178,
    mainChampion: "LeBlanc",
    region: "EUW",
    change: "down"
  },
  {
    id: 4,
    rank: 4,
    name: "Showmaker",
    tier: "Challenger",
    lp: 1134,
    winRate: 68,
    games: 163,
    mainChampion: "Syndra",
    region: "KR",
    change: "up"
  },
  {
    id: 5,
    rank: 5,
    name: "Jankos",
    tier: "Challenger",
    lp: 1089,
    winRate: 66,
    games: 201,
    mainChampion: "Sejuani",
    region: "EUW",
    change: "same"
  }
];

const proTeams: Team[] = [
  {
    id: 1,
    rank: 1,
    name: "T1",
    region: "LCK",
    points: 2847,
    winRate: 78,
    matches: 32,
    change: "same"
  },
  {
    id: 2,
    rank: 2,
    name: "G2 Esports",
    region: "LEC",
    points: 2756,
    winRate: 74,
    matches: 28,
    change: "up"
  },
  {
    id: 3,
    rank: 3,
    name: "JD Gaming",
    region: "LPL",
    points: 2698,
    winRate: 72,
    matches: 35,
    change: "down"
  },
  {
    id: 4,
    rank: 4,
    name: "Cloud9",
    region: "LCS",
    points: 2634,
    winRate: 69,
    matches: 26,
    change: "up"
  },
  {
    id: 5,
    rank: 5,
    name: "BiliBili Gaming",
    region: "LPL",
    points: 2587,
    winRate: 67,
    matches: 31,
    change: "same"
  }
];

function Rankings() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-5 w-5 text-yellow-500" />;
      case 2: return <Medal className="h-5 w-5 text-gray-400" />;
      case 3: return <Trophy className="h-5 w-5 text-amber-600" />;
      default: return <Star className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getChangeIcon = (change: "up" | "down" | "same") => {
    switch (change) {
      case "up": return <TrendingUp className="h-4 w-4 text-success" />;
      case "down": return <TrendingDown className="h-4 w-4 text-error" />;
      case "same": return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Challenger": return "bg-accent text-accent-foreground";
      case "Grandmaster": return "bg-error text-error-foreground";
      case "Master": return "bg-warning text-warning-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">Rankings</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track the best players and teams in League of Legends across all regions and competitive leagues.
          </p>
        </div>

        <Tabs defaultValue="solo-queue" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-card">
            <TabsTrigger value="solo-queue" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Solo Queue Rankings
            </TabsTrigger>
            <TabsTrigger value="pro-teams" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Professional Teams
            </TabsTrigger>
          </TabsList>

          <TabsContent value="solo-queue">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Trophy className="h-6 w-6 text-accent" />
                  Top Solo Queue Players
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {soloQueuePlayers.map(player => (
                    <div key={player.id} className="leaderboard-row bg-surface border border-border rounded-lg p-4 hover:bg-surface-muted transition-all duration-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            {getRankIcon(player.rank)}
                            <span className="font-bold text-accent text-lg">#{player.rank}</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground text-lg">{player.name}</h3>
                            <div className="flex items-center gap-2">
                              <Badge className={getTierColor(player.tier)}>
                                {player.tier}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{player.region}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="font-bold text-accent text-lg">{player.lp} LP</div>
                            <div className="text-xs text-muted-foreground">League Points</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-foreground">{player.winRate}%</div>
                            <div className="text-xs text-muted-foreground">Win Rate</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-foreground">{player.games}</div>
                            <div className="text-xs text-muted-foreground">Games</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-foreground">{player.mainChampion}</div>
                            <div className="text-xs text-muted-foreground">Main</div>
                          </div>
                          <div className="flex items-center">
                            {getChangeIcon(player.change)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pro-teams">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Trophy className="h-6 w-6 text-accent" />
                  Top Professional Teams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {proTeams.map(team => (
                    <div key={team.id} className="leaderboard-row bg-surface border border-border rounded-lg p-4 hover:bg-surface-muted transition-all duration-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            {getRankIcon(team.rank)}
                            <span className="font-bold text-accent text-lg">#{team.rank}</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground text-lg">{team.name}</h3>
                            <Badge variant="secondary" className="bg-muted text-muted-foreground">
                              {team.region}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-6">
                          <div className="text-center">
                            <div className="font-bold text-accent text-lg">{team.points}</div>
                            <div className="text-xs text-muted-foreground">Points</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-foreground">{team.winRate}%</div>
                            <div className="text-xs text-muted-foreground">Win Rate</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-foreground">{team.matches}</div>
                            <div className="text-xs text-muted-foreground">Matches</div>
                          </div>
                          <div className="flex items-center">
                            {getChangeIcon(team.change)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="community-stat bg-card border-border">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">180M+</div>
              <div className="text-sm text-muted-foreground">Ranked Players</div>
            </CardContent>
          </Card>
          <Card className="community-stat bg-card border-border">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">14</div>
              <div className="text-sm text-muted-foreground">Professional Leagues</div>
            </CardContent>
          </Card>
          <Card className="community-stat bg-card border-border">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">1,000+</div>
              <div className="text-sm text-muted-foreground">Pro Players</div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Rankings;