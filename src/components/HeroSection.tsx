import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Star } from "lucide-react";
import { serverConfig } from "@/config/server";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        {/* Status badge */}
        <Badge variant="secondary" className="mb-8 bg-primary/20 text-primary border-primary/30 text-lg md:text-2xl px-6 py-3">
          <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse"></div>
          100 members online
        </Badge>
        
        {/* Main heading */}
        <div className="py-2 mt-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-0 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight px-8 py-4">
            Epic Gaming Hub
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Join the ultimate gaming community. Connect, compete, and level up your gameplay.
        </p>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-10 mb-12 text-lg md:text-2xl">
          <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-border/50">
            <Users className="w-6 h-6 text-primary" />
            <span className="text-foreground font-semibold">400 Members</span>
          </div>
          <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-border/50">
            <MessageCircle className="w-6 h-6 text-primary" />
            <span className="text-foreground font-semibold">24/7 Active</span>
          </div>
          <div className="flex items-center gap-3 bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-border/50">
            <Star className="w-6 h-6 text-primary" />
            <span className="text-foreground font-semibold">Top Rated</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-2xl px-16 py-8 h-auto min-w-[320px] font-bold rounded-2xl hover:scale-105 transform shadow-xl border border-primary/20 group"
            asChild
          >
            <a href={serverConfig.discordInvite} target="_blank" rel="noopener noreferrer">
              <Users className="w-8 h-8 mr-4 group-hover:scale-110 transition-transform" />
              Join Server
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}