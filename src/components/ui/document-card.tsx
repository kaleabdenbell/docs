"use client";

import * as React from "react";
import { cn } from "@/lib/utils"; // Ensure this utility is set up
import { FileText, MoreVertical, Clock } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// If you want routing on click:
// import Link from "next/link";

export interface DocumentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  lastModified: string;
  isTemplate?: boolean;
  preview?: boolean;
  onClick?: () => void;
}

const DocumentCard = React.forwardRef<HTMLDivElement, DocumentCardProps>(
  (
    { title, lastModified, isTemplate = false, preview, className, onClick, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-2xl bg-gradient-card border border-border",
          "hover:shadow-elegant hover:border-primary/30 transition-all duration-300",
          "cursor-pointer",
          className
        )}
        onClick={onClick}
        {...props}
      >
        {/* Preview Section */}
        <div className="aspect-[4/3] p-6 bg-gradient-subtle border-b border-border/50">
          <div className="h-full flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 h-8 w-8 p-0"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Open</DropdownMenuItem>
                  <DropdownMenuItem>Rename</DropdownMenuItem>
                  <DropdownMenuItem>Share</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {preview && (
              <div className="flex-1 space-y-2">
                <div className="h-2 bg-foreground/10 rounded-full w-3/4"></div>
                <div className="h-2 bg-foreground/10 rounded-full w-full"></div>
                <div className="h-2 bg-foreground/10 rounded-full w-2/3"></div>
                <div className="h-2 bg-foreground/10 rounded-full w-4/5"></div>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground truncate mb-1 group-hover:text-primary transition-colors duration-200">
                {title}
              </h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                <span>{lastModified}</span>
              </div>
            </div>
            {isTemplate && (
              <span className="ml-2 px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                Template
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
);

DocumentCard.displayName = "DocumentCard";

export { DocumentCard };
