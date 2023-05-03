import React from 'react';
import { PromotionalBanner } from './promotional-banner';

interface PageLayoutProps {
  children: React.ReactNode;
  className: string;
}

// Problem:
//     This should be conditionally rendered based on feature flag enrolment.
// Feature flag name:
//     general-render-launch-banner
// Setup:
//     Show to users with flag value: true

export const PageLayout = ({
  children,
  className,
}: PageLayoutProps): JSX.Element => {
  return (
    <div className={`page-layout ${className}`}>
      <PromotionalBanner />

      {children}
    </div>
  );
};
