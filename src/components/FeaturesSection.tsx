import { Card, CardContent } from "@/components/ui/card";
import { 
  Gamepad2, 
  Trophy, 
  Users, 
  Shield,
  Gift,
  Leaf
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "PS99",
    description: "Join the ultimate PS99 community — share tips, trade, and team up with fellow players."
  },
  {
    icon: Leaf,
    title: "Grow a Garden",
    description: "Relax and compete in our cozy garden simulator with unique plants and seasonal challenges."
  },
  {
    icon: Trophy,
    title: "Invite Events",
    description: "Boost your rank by inviting friends! Unlock rewards through active invite competitions."
  },
  {
    icon: Gift,
    title: "Giveaways",
    description: "Win exclusive prizes in our regular server-wide giveaways. Simple rules, real rewards."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 animate-fade-in pt-0">
          <div className="py-2 mt-0">
            <h2 className="text-5xl md:text-7xl font-bold mb-0 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-tight px-8 py-4">
              Why Join Our Community?
            </h2>
          </div>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Everything you need for the ultimate gaming experience.
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className="bg-gradient-card border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-elevated group hover:-translate-y-1 rounded-2xl shadow-lg min-h-[180px]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
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