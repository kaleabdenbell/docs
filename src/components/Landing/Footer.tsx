"use client"
import { useLanguage } from "@/hooks/use-language";
import { PenTool, Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <PenTool className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                DocsAI
              </span>
            </div>
            <p className="text-muted-foreground">
              AI-powered collaborative writing platform for modern teams.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                {t('features')}
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                {t('pricing')}
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                API
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Integrations
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                {t('about')}
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Careers
              </Link>
              <Link href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                {t('contact')}
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Status
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 DocsAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};