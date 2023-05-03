import React from 'react';
import { PromotionalBanner } from './promotional-banner';

interface PageLayoutProps {
  children: React.ReactNode;
  className: string;
}

export const PageLayout = ({ children, className }: PageLayoutProps) => {
  return (
    <div className={`page-layout ${className}`}>
      <PromotionalBanner />

      {children}
    </div>
  );
};
