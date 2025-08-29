import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, MessageCircle, Trophy, Star, TrendingUp, Crown } from 'lucide-react';

interface CommunityStats {
  label: string;
  value: string;
  icon: React.ComponentType<any>;
  description: string;
}

interface TopPlayer {
  rank: number;
  name: string;
  tier: string;
  lp: number;
  region: string;
}

const communityStats: CommunityStats[] = [
  {
    label: "Monthly Players",
    value: "180M+",
    icon: Users,
    description: "Active summoners worldwide"
  },
  {
    label: "Games Played Daily",
    value: "50M+",
    icon: TrendingUp,
    description: "Matches across all modes"
  },
  {
    label: "Professional Teams",
    value: "100+",
    icon: Trophy,
    description: "Competing globally"
  },
  {
    label: "Community Rating",
    value: "4.8/5",
    icon: Star,
    description: "Player satisfaction score"
  }
];

const topPlayers: TopPlayer[] = [
  { rank: 1, name: "Faker", tier: "Challenger", lp: 1247, region: "KR" },
  { rank: 2, name: "Canyon", tier: "Challenger", lp: 1198, region: "KR" },
  { rank: 3, name: "Caps", tier: "Challenger", lp: 1156, region: "EUW" }
];

function CommunitySection() {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="h-4 w-4 text-yellow-500" />;
    if (rank === 2) return <Trophy className="h-4 w-4 text-gray-400" />;
    if (rank === 3) return <Trophy className="h-4 w-4 text-amber-600" />;
    return <Star className="h-4 w-4 text-muted-foreground" />;
  };

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join the Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with millions of players worldwide and climb the ranks together
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="community-stat bg-card border-border text-center hover:border-accent transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-3">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <IconComponent className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.description}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Players Leaderboard */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                <Trophy className="h-6 w-6 text-accent" />
                Global Leaderboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPlayers.map(player => (
                  <div key={player.rank} className="leaderboard-row bg-surface border border-border rounded-lg p-4 hover:bg-surface-muted transition-all duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          {getRankIcon(player.rank)}
                          <span className="font-bold text-accent">#{player.rank}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground">{player.name}</h4>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-accent text-accent-foreground text-xs">
                              {player.tier}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{player.region}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-accent">{player.lp} LP</div>
                        <div className="text-xs text-muted-foreground">League Points</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent-600">
                View Full Rankings
              </Button>
            </CardContent>
          </Card>

          {/* Community Features */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-accent" />
                Community Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Find Your Team</h4>
                    <p className="text-sm text-muted-foreground">
                      Connect with players of similar skill level and form lasting friendships.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <Trophy className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Tournaments</h4>
                    <p className="text-sm text-muted-foreground">
                      Participate in community tournaments and climb the competitive ladder.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Forums & Discord</h4>
                    <p className="text-sm text-muted-foreground">
                      Join discussions, share strategies, and get help from the community.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 mt-6">
                <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent-600">
                  Join Discord
                </Button>
                <Button variant="outline" className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Visit Forums
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-accent-900 to-accent-800 border-accent">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold text-accent-foreground mb-4">
                Ready to Join the Rift?
              </h3>
              <p className="text-accent-foreground/80 mb-6 max-w-2xl mx-auto">
                Download League of Legends for free and start your journey to become a legend. 
                Join millions of players in the ultimate competitive gaming experience.
              </p>
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 px-8 py-3">
                Download Now - It's Free!
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default CommunitySection;