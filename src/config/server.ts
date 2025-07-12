// Discord Server Landing Page Configuration
// Easily customize your server's landing page by editing these values

export const serverConfig = {
  // Server Information
  serverName: "Epic Gaming Hub",
  description: "Join the ultimate gaming community. Connect, compete, and level up your gameplay.",
  onlineMembers: "1,247",
  totalMembers: "5.2K+",
  
  // Features (max 4 recommended for clean layout)
  features: [
    {
      title: "Multi-Game Support",
      description: "Active communities for all popular gaming titles.",
      icon: "Gamepad2" // Lucide icon name
    },
    {
      title: "Weekly Tournaments", 
      description: "Compete in organized events with prizes.",
      icon: "Trophy"
    },
    {
      title: "Find Your Team",
      description: "Quick matchmaking and team building.",
      icon: "Users"
    },
    {
      title: "Safe Environment",
      description: "Moderated channels for positive gaming.",
      icon: "Shield"
    }
  ],
  
  // Call to Action
  joinButtonText: "Join Discord Server",
  joinDescription: "Join Epic Gaming Hub and become part of our active gaming community.",
  
  // Optional: Discord invite link
  discordInvite: "https://discord.gg/yourinvite"
};

// Color Theme (optional customization)
export const themeConfig = {
  // Primary color (Discord blue by default)
  primaryHue: 235,
  primarySaturation: 86,
  primaryLightness: 65,
  
  // Accent color (Discord purple by default)  
  accentHue: 262,
  accentSaturation: 83,
  accentLightness: 58
};