"use client"
import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import Image from "next/image";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              AI-Powered Writing Platform
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              {t('heroTitle')}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              {t('heroSubtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => { window.location.href = '/create'; }} variant="default" size="lg" className="text-lg px-8 py-6">
                {t('startWriting')}
              </Button>
              <Button onClick={() => { window.location.href = '/create'; }} variant="secondary" size="lg" className="text-lg px-8 py-6">
                <Play className="h-5 w-5 mr-2" />
                {t('watchDemo')}
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">50M+</div>
                <div className="text-sm text-muted-foreground">Words Written</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right side - Hero Image */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative z-10">
              <Image
                width={800}
                height={600}
                src="/window.svg"
                alt="AI-powered collaborative writing" 
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};