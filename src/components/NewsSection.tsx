import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar1 as Calendar, Clock, ArrowRight, Zap, Trophy, Gamepad2 } from 'lucide-react';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const newsArticles: NewsArticle[] = [
{
  id: 1,
  title: "Patch 13.24: Major Champion Updates",
  excerpt: "The latest patch brings significant changes to several champions and the jungle meta.",
  category: "Patch Notes",
  date: "2024-01-15",
  readTime: "5 min read",
  image: "/api/placeholder/400/250",
  featured: true
},
{
  id: 2,
  title: "World Championship 2024 Finals Preview",
  excerpt: "T1 faces G2 Esports in what promises to be the most exciting final in years.",
  category: "Esports",
  date: "2024-01-14",
  readTime: "8 min read",
  image: "/api/placeholder/400/250",
  featured: true
},
{
  id: 3,
  title: "New Champion Spotlight: Vex",
  excerpt: "Meet the newest addition to the Rift with unique shadow-based abilities.",
  category: "Champions",
  date: "2024-01-13",
  readTime: "6 min read",
  image: "/api/placeholder/400/250"
},
{
  id: 4,
  title: "Arena Mode Returns This Season",
  excerpt: "The popular 2v2v2v2 game mode is back with new features and improvements.",
  category: "Game Modes",
  date: "2024-01-12",
  readTime: "4 min read",
  image: "/api/placeholder/400/250"
}];


const categoryIcons = {
  "Patch Notes": Zap,
  "Esports": Trophy,
  "Champions": Gamepad2,
  "Game Modes": Gamepad2
};

function NewsSection() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const featuredArticles = newsArticles.filter((article) => article.featured);
  const regularArticles = newsArticles.filter((article) => !article.featured);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest News
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with patch notes, esports coverage, and champion spotlights
          </p>
        </div>

        {/* Featured Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredArticles.map((article) => {
            const IconComponent = categoryIcons[article.category as keyof typeof categoryIcons] || Gamepad2;
            return (
              <Card key={article.id} className="news-card bg-card border-border hover:border-accent transition-all duration-300 overflow-hidden group">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground flex items-center gap-1">
                        <IconComponent className="h-3 w-3" />
                        {article.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="bg-background/80 text-foreground">
                        Featured
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(article.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent-600 flex items-center gap-2">
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>);

          })}
        </div>

        {/* Regular Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {regularArticles.map((article) => {
            const IconComponent = categoryIcons[article.category as keyof typeof categoryIcons] || Gamepad2;
            return (
              <Card key={article.id} className="news-card bg-card border-border hover:border-accent transition-all duration-300 overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />

                    <div className="absolute top-3 left-3">
                      <Badge className="bg-accent text-accent-foreground flex items-center gap-1 text-xs">
                        <IconComponent className="h-3 w-3" />
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(article.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent-600">
                    Read More
                  </Button>
                </CardContent>
              </Card>);

          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3">

            View All News
          </Button>
        </div>
      </div>
    </section>);

}

export default NewsSection;