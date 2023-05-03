import React from 'react';
import { usePromotionalBanner } from '../hooks/usePromotionalBanner';

export const PromotionalBanner = (): JSX.Element | null => {
  const { bannerRendered } = usePromotionalBanner();

  if (!bannerRendered) return null;

  return (
    <div className="promotional-banner">
      <p>50% launch sale! Use code TAKEHOME</p>
    </div>
  );
};
