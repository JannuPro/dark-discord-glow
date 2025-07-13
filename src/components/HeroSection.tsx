import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
        {/* Status badge */}
        <Badge variant="secondary" className="mb-6 bg-primary/20 text-primary border-primary/30">
          <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
          1,247 members online
        </Badge>
        
        {/* Main heading */}
        <div className="py-8 mt-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-relaxed px-2">
            Epic Gaming Hub
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
          Join the ultimate gaming community. Connect, compete, and level up your gameplay.
        </p>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm">
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-foreground font-medium">5.2k Members</span>
          </div>
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-foreground font-medium">24/7 Active</span>
          </div>
          <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-foreground font-medium">Top Rated</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-xl px-20 py-10 h-auto min-w-[320px] font-bold rounded-xl hover:scale-105 transform shadow-lg"
          >
            Join Server
          </Button>
        </div>
      </div>
    </section>
  );
}