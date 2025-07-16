import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Leaf, Users, Trophy, Lock, Star } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "PS99",
    description: "Join the ultimate PS99 discussion hub. Share tips, trade, and team up with fellow players.",
    details: "PS99 is a hot topic in our community! Get the latest strategies, find trading partners, and join group activities."
  },
  {
    icon: Leaf,
    title: "Grow a Garden",
    description: "Relax and compete in our cozy garden simulator with unique plants and seasonal challenges.",
    details: "Show off your green thumb! Participate in garden events, share your progress, and win seasonal rewards."
  },
  {
    icon: Lock,
    title: "Jailbreak",
    description: "Team up for thrilling jailbreak sessions and master the art of escape.",
    details: "Jailbreak is all about teamwork and strategy. Join our regular sessions and climb the leaderboards!"
  },
  {
    icon: Trophy,
    title: "MM2",
    description: "Compete in Murder Mystery 2, trade items, and join exclusive tournaments.",
    details: "MM2 fans unite! Trade rare items, join tournaments, and discuss the best strategies with fellow players."
  },
  {
    icon: Gift,
    title: "Giveaways",
    description: "Win exclusive prizes in our regular server-wide giveaways.",
    details: "Participate in regular giveaways for a chance to win exclusive prizes. Simple rules, real rewards!"
  },
  {
    icon: Users,
    title: "Invite Rewards",
    description: "Earn rewards by inviting friends to the server.",
    details: "Boost your rank and unlock special perks by inviting friends. The more active you are, the more you win!"
  }
];

function FeatureModal({ open, onClose, feature }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60" onClick={onClose}>
      <div className="bg-card rounded-2xl p-8 max-w-md w-full shadow-xl relative" onClick={e => e.stopPropagation()}>
        <button className="absolute top-3 right-3 text-2xl text-muted-foreground hover:text-foreground" onClick={onClose}>&times;</button>
        <div className="flex flex-col items-center text-center space-y-4">
          <feature.icon className="w-12 h-12 text-primary mb-2" />
          <h3 className="text-3xl font-bold mb-2">{feature.title}</h3>
          <p className="text-lg text-muted-foreground mb-2">{feature.details}</p>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [modal, setModal] = useState(null);
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className="bg-gradient-card border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-elevated group hover:-translate-y-1 rounded-2xl shadow-lg min-h-[180px] cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setModal(feature)}
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
        <FeatureModal open={!!modal} onClose={() => setModal(null)} feature={modal || {}} />
      </div>
    </section>
  );
}