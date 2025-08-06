import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'am';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    features: 'Features',
    pricing: 'Pricing',
    about: 'About',
    contact: 'Contact',
    getStarted: 'Get Started',
    signIn: 'Sign In',
    
    // Hero Section
    heroTitle: 'Write Smarter with AI-Powered Collaboration',
    heroSubtitle: 'Experience the future of document creation with intelligent writing assistance, real-time collaboration, and seamless teamwork.',
    startWriting: 'Start Writing',
    watchDemo: 'Watch Demo',
    
    // Features
    featuresTitle: 'Powerful Features for Modern Teams',
    featuresSubtitle: 'Everything you need to create, collaborate, and create amazing documents together.',
    
    aiSummarization: 'AI Summarization',
    aiSummarizationDesc: 'Instantly generate concise summaries of your documents with advanced AI technology.',
    
    smartParaphrasing: 'Smart Paraphrasing',
    smartParaphrasingDesc: 'Rewrite content with different tones and styles while maintaining the original meaning.',
    
    aiWriting: 'AI Writing Assistant',
    aiWritingDesc: 'Get intelligent suggestions and auto-completions to enhance your writing productivity.',
    
    realTimeCollab: 'Real-time Collaboration',
    realTimeCollabDesc: 'Work together seamlessly with your team with live editing and instant synchronization.',
    
    smartSuggestions: 'Smart Suggestions',
    smartSuggestionsDesc: 'Receive contextual writing suggestions and grammar improvements as you type.',
    
    autoComplete: 'Auto-complete',
    autoCompleteDesc: 'Speed up your writing with intelligent auto-completion powered by machine learning.',
    
    // Collaboration Section
    collabTitle: 'Built for Teams',
    collabSubtitle: 'Collaborate effortlessly with your team members in real-time.',
    collabDescription: 'Share documents, leave comments, track changes, and work together from anywhere in the world. Our platform makes teamwork simple and efficient.',
    
    // CTA Section
    ctaTitle: 'Ready to Transform Your Writing?',
    ctaSubtitle: 'Join thousands of teams already using our AI-powered document editor.',
    ctaButton: 'Start Free Trial',
    
    // Coming Soon
    comingSoon: 'Coming Soon',
  },
  am: {
    // Navigation
    home: 'ዋና ገጽ',
    features: 'ባህሪያት',
    pricing: 'ዋጋ',
    about: 'ስለ እኛ',
    contact: 'ድርጅት',
    getStarted: 'ጀምር',
    signIn: 'ግባ',
    
    // Hero Section
    heroTitle: 'በAI የሚተዳደር ትብብር ስማርት ፅሁፍ',
    heroSubtitle: 'የዶክተር ፍጥረት ወደፊት ዓላማ ከዘመናዊ ጽሁፍ ሥርዓት፣ በሰዓቱ ትብብር እና ሰላማዊ ቡድን ሥራ ጋር ይሞክሩ።',
    startWriting: 'ጽሁፍ ጀምር',
    watchDemo: 'ዴሞ ይመልከቱ',
    
    // Features
    featuresTitle: 'ለዘመናዊ ቡድኖች ኃይለኛ ባህሪያት',
    featuresSubtitle: 'በተባበሩ ሁኔታ ለመፍጠር፣ ለመተባበር እና አስደናቂ ሰነዶችን ለመፍጠር የሚያስፈልግዎት ሁሉ።',
    
    aiSummarization: 'AI ማጠቃለያ',
    aiSummarizationDesc: 'የላቀ AI ቴክኖሎጂ በመጠቀም የእርስዎን ሰነዶች አጭር ማጠቃለያዎችን በቅጽበት ያመነጩ።',
    
    smartParaphrasing: 'ብልህ ተርጓሚ',
    smartParaphrasingDesc: 'የመጀመሪያውን ትርጉም በመጠበቅ ይዘትን በተለያዩ ቃና እና ስልቶች እንደገና ይጻፉ።',
    
    aiWriting: 'AI ጽሁፍ ረዳት',
    aiWritingDesc: 'የጽሁፍ ምርታማነትዎን ለማሻሻል ብልህ ሀሳቦችን እና ራስ-ማጠናቀቂያዎችን ያግኙ।',
    
    realTimeCollab: 'በሰዓቱ ትብብር',
    realTimeCollabDesc: 'በቀጥታ አርትዖት እና ቅጽበታዊ ሲንክሮናይዜሽን ከቡድንዎ ጋር በማስተባበር ይሰሩ።',
    
    smartSuggestions: 'ብልህ ሀሳቦች',
    smartSuggestionsDesc: 'እያነበቡ ሲሄዱ የግንኙነት ጽሁፍ ሀሳቦችን እና ሰዋሰዋዊ ማሻሻያዎችን ይቀበሉ።',
    
    autoComplete: 'ራስ-ማጠናቀቂያ',
    autoCompleteDesc: 'በማሽን ትምህርት የሚተዳደር ብልህ ራስ-ማጠናቀቂያ ጋር ጽሁፍዎን ያፋጥኑ።',
    
    // Collaboration Section
    collabTitle: 'ለቡድኖች የተገነባ',
    collabSubtitle: 'ከቡድን አባሎችዎ ጋር በሰዓቱ ሁኔታ ያለምንም ጥረት ይተባበሩ።',
    collabDescription: 'ሰነዶችን ያጋሩ፣ አስተያየቶችን ይተዉ፣ ለውጦችን ይከታተሉ፣ እና ከአለም ማንኛውም ቦታ አብረው ይሰሩ። የእኛ መድረክ የቡድን ሥራን ቀላል እና ቀልጣፋ ያደርገዋል።',
    
    // CTA Section
    ctaTitle: 'ጽሁፍዎን ለመለወጥ ዝግጁ ነዎት?',
    ctaSubtitle: 'የእኛን AI-የሚተዳደር ሰነድ አርታዒ አስቀድመው እየተጠቀሙ ያሉ በሺዎች የሚቆጠሩ ቡድኖች ይቀላቀሉ።',
    ctaButton: 'ነፃ ሙከራ ጀምር',
    
    // Coming Soon
    comingSoon: 'በቅርቡ',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};