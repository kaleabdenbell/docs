"use client";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/Landing/LanguageToggle";
import { useLanguage } from "@/hooks/use-language";
import {  Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex gap-3 items-center shrink-0 pr-6">
        <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={36} height={36} />
        </Link>
        <h3 className="text-xl">DocsAI</h3>
      </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
              {t('features')}
            </a>
            <a href="#collaboration" className="text-foreground/80 hover:text-foreground transition-colors">
              {t('about')}
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">
              {t('contact')}
            </a>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
            <Button variant="ghost" size="sm">
              {t('signIn')}
            </Button>
            <Button variant="hero" size="sm">
              {t('getStarted')}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
            <div className="py-4 space-y-2">
              <a href="#features" className="block px-4 py-2 text-foreground/80 hover:text-foreground transition-colors">
                {t('features')}
              </a>
              <a href="#collaboration" className="block px-4 py-2 text-foreground/80 hover:text-foreground transition-colors">
                {t('about')}
              </a>
              <a href="#contact" className="block px-4 py-2 text-foreground/80 hover:text-foreground transition-colors">
                {t('contact')}
              </a>
              <div className="px-4 pt-4 space-y-2">
                <Button variant="ghost" size="sm" className="w-full">
                  {t('signIn')}
                </Button>
                <Button variant="hero" size="sm" className="w-full">
                  {t('getStarted')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};