import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    number: "5.2K+",
    label: "Active Members",
    description: "Growing community of passionate gamers"
  },
  {
    number: "150+",
    label: "Daily Matches",
    description: "Games organized and played every day"
  },
  {
    number: "24/7",
    label: "Active Channels",
    description: "Always someone online to play with"
  },
  {
    number: "50+",
    label: "Weekly Events",
    description: "Tournaments, scrims, and community events"
  }
];

export function StatsSection() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="py-2 mt-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-0 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Community by the Numbers
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of gamers who have found their home in our thriving Discord community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="bg-gradient-card border-border/50 text-center group hover:border-primary/30 transition-all duration-300 hover:shadow-elevated"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}