import { useEffect, useState } from 'react';
import client from '../client';
import { detailsCtaFlagKey } from '../feature-flag-config';
import { DEFAULT_BG_COLOR } from '../utils/constants';

export const useRequestReviewButton = () => {
  const [backgroundColor, setBackgroundColor] =
    useState<string>(DEFAULT_BG_COLOR);

  useEffect(() => {
    client
      .waitUntilReady()
      .then(() => {
        const backgroundColorFlag = client.variation(
          detailsCtaFlagKey,
          DEFAULT_BG_COLOR,
        );

        setBackgroundColor(backgroundColorFlag);
      })
      .catch(err => {
        console.error('Error: ', err);
      });
  }, []);

  return { backgroundColor };
};
