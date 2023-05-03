import { useEffect, useState } from 'react';
import client from '../client';
import { launchBannerFlagKey } from '../feature-flag-config';

export const usePromotionalBanner = () => {
  const [bannerRendered, setBannerRendered] = useState<boolean>(false);

  useEffect(() => {
    client.on('ready', () => {
      const bannerFlag = client.variation(launchBannerFlagKey, false);

      setBannerRendered(bannerFlag);
    });
  }, []);

  return { bannerRendered };
};
