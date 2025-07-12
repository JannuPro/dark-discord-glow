import { Card, CardContent } from "@/components/ui/card";
import { 
  Gamepad2, 
  Trophy, 
  Shield, 
  Zap, 
  Users, 
  MessageSquare,
  Calendar,
  Gift
} from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Multi-Game Support",
    description: "Active communities for Valorant, CS2, League, Apex, and more popular titles."
  },
  {
    icon: Trophy,
    title: "Weekly Tournaments",
    description: "Compete in organized tournaments with prize pools and ranking systems."
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Moderated channels with anti-toxicity measures for positive gaming experience."
  },
  {
    icon: Zap,
    title: "Quick Matchmaking",
    description: "Find teammates instantly with our advanced LFG (Looking for Group) system."
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Create or join teams, practice together, and climb the competitive ladder."
  },
  {
    icon: MessageSquare,
    title: "Strategy Discussions",
    description: "Share tactics, get coaching tips, and improve your gameplay with the community."
  },
  {
    icon: Calendar,
    title: "Event Calendar",
    description: "Never miss community events, scrimmages, or special gaming sessions."
  },
  {
    icon: Gift,
    title: "Rewards & Perks",
    description: "Earn exclusive roles, access to private channels, and special community perks."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Why Join Our Community?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience gaming like never before with our feature-rich Discord server designed for serious gamers.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elevated group hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}