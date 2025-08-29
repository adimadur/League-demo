import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import Home from './pages/Home';
import Champions from './pages/Champions';
import GameModes from './pages/GameModes';
import Esports from './pages/Esports';
import News from './pages/News';
import Rankings from './pages/Rankings';
import { ThemeProvider } from 'next-themes';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="min-h-screen bg-background text-foreground">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/champions" element={<Champions />} />
              <Route path="/game-modes" element={<GameModes />} />
              <Route path="/esports" element={<Esports />} />
              <Route path="/news" element={<News />} />
              <Route path="/rankings" element={<Rankings />} />
            </Routes>
          </div>
        </Router>
        <Toaster position="top-right" />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;