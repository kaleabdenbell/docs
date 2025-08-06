"use client"
import { useLanguage } from "@/hooks/use-language";
import { 
  Brain, 
  Edit3, 
  Sparkles, 
  Users, 
  Lightbulb, 
  Zap,
  Clock
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: t('aiSummarization'),
      description: t('aiSummarizationDesc'),
      comingSoon: false,
    },
    {
      icon: Edit3,
      title: t('smartParaphrasing'),
      description: t('smartParaphrasingDesc'),
      comingSoon: false,
    },
    {
      icon: Sparkles,
      title: t('aiWriting'),
      description: t('aiWritingDesc'),
      comingSoon: false,
    },
    {
      icon: Users,
      title: t('realTimeCollab'),
      description: t('realTimeCollabDesc'),
      comingSoon: false,
    },
    {
      icon: Lightbulb,
      title: t('smartSuggestions'),
      description: t('smartSuggestionsDesc'),
      comingSoon: true,
    },
    {
      icon: Zap,
      title: t('autoComplete'),
      description: t('autoCompleteDesc'),
      comingSoon: true,
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            {t('featuresTitle')}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t('featuresSubtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-card rounded-2xl border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              {feature.comingSoon && (
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {t('comingSoon')}
                </Badge>
              )}
              
              <div className="mb-6">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Features Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Image
                width={800}
                height={600}
              src="/window.svg" 
              alt="AI Features" 
              className="w-full h-auto rounded-2xl shadow-elegant"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl font-bold">
              Powered by Advanced AI Technology
            </h3>
            <p className="text-lg text-muted-foreground">
              Our cutting-edge artificial intelligence understands context, tone, and intent to provide you with the most relevant suggestions and improvements.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-primary/5 rounded-lg">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="p-4 bg-accent/5 rounded-lg">
                <div className="text-2xl font-bold text-accent">3x</div>
                <div className="text-sm text-muted-foreground">Faster Writing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};