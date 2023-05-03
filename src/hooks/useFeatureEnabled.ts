import { useEffect, useState } from 'react';
import client from '../client';
import { profileSectionFlagKey } from '../feature-flag-config';
import { TURN } from '../utils/constants';

export const useFeatureEnabled = () => {
  const [isFeatureEnabled, setIsFeatureEnabled] = useState<boolean>(TURN.OFF);

  useEffect(() => {
    client
      .waitUntilReady()
      .then(() => {
        const flagValue = client.variation(profileSectionFlagKey, 'variation');

        if (flagValue === 'variation') {
          setIsFeatureEnabled(TURN.ON);
        }
      })
      .catch(err => {
        console.error('Error: ', err);
      });
  }, []);

  return { isFeatureEnabled };
};
