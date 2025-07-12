import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, Shield, Star } from "lucide-react";

export function JoinSection() {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <Card className="bg-gradient-card border-border/50 shadow-elevated">
          <CardContent className="p-8 text-center">
            {/* Status indicators */}
            <div className="flex justify-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                <Users className="w-3 h-3 mr-1" />
                1,247 Online
              </Badge>
            </div>
            
            {/* Main CTA */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to Level Up?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-lg mx-auto">
              Join Epic Gaming Hub and become part of our active gaming community.
            </p>
            
            {/* Join button */}
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 text-lg px-8 py-6 h-auto animate-glow-pulse group"
            >
              <ExternalLink className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Join Discord Server
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}