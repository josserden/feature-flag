import { useEffect, useState } from 'react';
import client from '../client';
import { profileSectionFlagKey } from '../feature-flag-config';
import { TURN } from '../utils/constants';

export const useFeatureEnabled = () => {
  const [isFeatureEnabled, setIsFeatureEnabled] = useState<boolean>(TURN.OFF);

  useEffect(() => {
    const flagValue = client.variation(profileSectionFlagKey, 'variation');

    if (flagValue === 'variation') {
      setIsFeatureEnabled(TURN.ON);
    }
  }, []);

  return { isFeatureEnabled };
};
