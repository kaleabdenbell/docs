"use client"
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-primary text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Transform Your Writing Experience
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            {t('ctaTitle')}
          </h2>

          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            {t('ctaSubtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="accent" 
              size="lg" 
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
            >
              {t('ctaButton')}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <div className="text-sm opacity-75">
              No credit card required • 14-day free trial
            </div>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-75">
            <div className="text-center">
              <div className="text-2xl font-bold">50M+</div>
              <div className="text-sm">Documents Created</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">10K+</div>
              <div className="text-sm">Active Teams</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.9★</div>
              <div className="text-sm">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};