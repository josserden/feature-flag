import { useEffect, useState } from 'react';
import client from '../client';
import { launchBannerFlagKey } from '../feature-flag-config';

export const usePromotionalBanner = () => {
  const [bannerRendered, setBannerRendered] = useState<boolean>(false);

  useEffect(() => {
    client
      .waitUntilReady()
      .then(() => {
        const bannerFlag = client.variation(launchBannerFlagKey, false);
        setBannerRendered(bannerFlag);
      })
      .catch(err => {
        console.error('Error: ', err);
      });
  }, []);

  return { bannerRendered };
};
