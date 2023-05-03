import React from 'react';
import { usePromotionalBanner } from '../hooks/usePromotionalBanner';

// Problem:
//     This should be conditionally rendered based on feature flag enrolment.
// Feature flag name:
//     general-render-launch-banner
// Setup:
//     Show to users with flag value: true

export const PromotionalBanner = (): JSX.Element | null => {
  const { bannerRendered } = usePromotionalBanner();

  if (!bannerRendered) return null;

  return (
    <div className="promotional-banner">
      <p>50% launch sale! Use code TAKEHOME</p>
    </div>
  );
};
