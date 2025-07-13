import { Card, CardContent } from "@/components/ui/card";
import { 
  Gamepad2, 
  Trophy, 
  Users, 
  Shield
} from "lucide-react";

const features = [
  {
    icon: Gamepad2,
    title: "Multi-Game Support",
    description: "Active communities for all popular gaming titles."
  },
  {
    icon: Trophy,
    title: "Weekly Tournaments",
    description: "Compete in organized events with prizes."
  },
  {
    icon: Users,
    title: "Find Your Team",
    description: "Quick matchmaking and team building."
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Moderated channels for positive gaming."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 animate-fade-in pt-8">
          <div className="py-12 mt-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight px-6 py-4">
              Why Join Our Community?
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Everything you need for the ultimate gaming experience.
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
                  <div className="flex flex-col items-center text-center space-y-3">
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