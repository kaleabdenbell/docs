"use client"
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import { Globe } from "lucide-react";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
      className="flex items-center gap-2"
    >
      <Globe className="h-4 w-4" />
      {language === 'en' ? 'አማርኛ' : 'English'}
    </Button>
  );
};