import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar1 as Calendar, Clock, Search, ArrowRight, Gamepad2, Trophy, Zap } from 'lucide-react';

interface NewsArticle {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

const newsArticles: NewsArticle[] = [
{
  id: 1,
  title: "Patch 13.24: Major Champion Updates and Balance Changes",
  excerpt: "The latest patch brings significant changes to several champions, including reworks for Briar and adjustments to the jungle meta.",
  content: "This comprehensive patch introduces major gameplay changes...",
  category: "Patch Notes",
  date: "2024-01-15",
  readTime: "5 min read",
  image: "/api/placeholder/600/300",
  featured: true
},
{
  id: 2,
  title: "World Championship 2024: Finals Preview",
  excerpt: "T1 faces off against G2 Esports in what promises to be the most exciting World Championship final in years.",
  content: "The stage is set for an epic showdown...",
  category: "Esports",
  date: "2024-01-14",
  readTime: "8 min read",
  image: "/api/placeholder/600/300",
  featured: true
},
{
  id: 3,
  title: "New Champion Spotlight: Vex, The Gloomist",
  excerpt: "Meet the newest addition to the Rift - a yordle mage with a unique shadow-based kit and game-changing ultimate.",
  content: "Vex brings a fresh playstyle to the mid lane...",
  category: "Champions",
  date: "2024-01-13",
  readTime: "6 min read",
  image: "/api/placeholder/600/300",
  featured: false
},
{
  id: 4,
  title: "Arena Mode Returns: What's New This Season",
  excerpt: "The popular 2v2v2v2 game mode is back with new augments, arenas, and exciting gameplay mechanics.",
  content: "Arena mode has been completely revamped...",
  category: "Game Modes",
  date: "2024-01-12",
  readTime: "4 min read",
  image: "/api/placeholder/600/300",
  featured: false
},
{
  id: 5,
  title: "Ranked Season 2024: Climb Tips from the Pros",
  excerpt: "Professional players share their strategies for climbing the ranked ladder and reaching your desired rank.",
  content: "Learn from the best with these expert tips...",
  category: "Guides",
  date: "2024-01-11",
  readTime: "10 min read",
  image: "/api/placeholder/600/300",
  featured: false
},
{
  id: 6,
  title: "Skin Spotlight: Lunar New Year Collection",
  excerpt: "Celebrate the Lunar New Year with stunning new skins for Jinx, Thresh, Ahri, and more champions.",
  content: "This year's Lunar New Year skins are spectacular...",
  category: "Skins",
  date: "2024-01-10",
  readTime: "3 min read",
  image: "/api/placeholder/600/300",
  featured: false
}];


const categories = ["All", "Patch Notes", "Esports", "Champions", "Game Modes", "Guides", "Skins"];

const categoryIcons = {
  "Patch Notes": Zap,
  "Esports": Trophy,
  "Champions": Gamepad2,
  "Game Modes": Gamepad2,
  "Guides": Gamepad2,
  "Skins": Gamepad2
};

function News() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = newsArticles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter((article) => article.featured);
  const regularArticles = filteredArticles.filter((article) => !article.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">News & Updates</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with the latest League of Legends news, patch notes, and esports coverage.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card border-border" />

          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
              return (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  className={`cursor-pointer px-4 py-2 flex items-center gap-2 ${
                  selectedCategory === category ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`
                  }
                  onClick={() => setSelectedCategory(category)}>

                  {IconComponent && <IconComponent className="h-3 w-3" />}
                  {category}
                </Badge>);

            })}
          </div>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 &&
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => {
              const IconComponent = categoryIcons[article.category as keyof typeof categoryIcons] || Gamepad2;
              return (
                <Card key={article.id} className="news-card bg-card border-border hover:border-accent transition-all duration-300 overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />

                        <div className="absolute top-4 left-4">
                          <Badge className="bg-accent text-accent-foreground flex items-center gap-1">
                            <IconComponent className="h-3 w-3" />
                            {article.category}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                        {article.title}
                      </CardTitle>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
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
          </section>
        }

        {/* Regular Articles */}
        {regularArticles.length > 0 &&
        <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">
              {featuredArticles.length > 0 ? "Latest News" : "All News"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </section>
        }

        {filteredArticles.length === 0 &&
        <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
          </div>
        }
      </main>

      <Footer />
    </div>);

}

export default News;