"use client"
import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, GitBranch, Share2 } from "lucide-react";
import Image from "next/image";

export const CollaborationSection = () => {
  const { t } = useLanguage();

  const collaborationFeatures = [
    {
      icon: Users,
      title: "Real-time Editing",
      description: "See your team's changes as they happen with live cursors and instant updates.",
    },
    {
      icon: MessageSquare,
      title: "Smart Comments",
      description: "Leave contextual comments and suggestions that enhance team communication.",
    },
    {
      icon: GitBranch,
      title: "Version Control",
      description: "Track all changes with comprehensive version history and easy rollbacks.",
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share documents with custom permissions and access controls.",
    },
  ];

  return (
    <section id="collaboration" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                {t('collabTitle')}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {t('collabSubtitle')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('collabDescription')}
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              {collaborationFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              {t('startWriting')}
            </Button>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <Image
                width={800}
              height={600}
              src="/window.svg" 
              alt="Team collaboration" 
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
            
            
          </div>
        </div>
      </div>
    </section>
  );
};