import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, Shield, Star } from "lucide-react";

export function JoinSection() {
  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <Card className="bg-gradient-card border-border/50 shadow-elevated">
          <CardContent className="p-12 text-center">
            {/* Status indicators */}
            <div className="flex justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                <Users className="w-3 h-3 mr-1" />
                1,247 Online
              </Badge>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                <Shield className="w-3 h-3 mr-1" />
                Verified
              </Badge>
              <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                <Star className="w-3 h-3 mr-1" />
                Top Server
              </Badge>
            </div>
            
            {/* Main CTA */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to Level Up?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Epic Gaming Hub today and become part of the most active gaming community on Discord. Your next gaming adventure starts here.
            </p>
            
            {/* Join button */}
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-xl px-12 py-8 h-auto animate-glow-pulse group"
            >
              <ExternalLink className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Join Discord Server
            </Button>
            
            {/* Additional info */}
            <p className="text-sm text-muted-foreground mt-6">
              Free to join • No spam • Active moderation • 18+ friendly
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}