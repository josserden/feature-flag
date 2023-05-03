import React from 'react';
import { useRequestReviewButton } from '../hooks/useRequestReviewButton';
import { DEFAULT_BG_COLOR } from '../utils/constants';

// Problem:
//     This should be coloured based on FF value
// Feature flag name:
//     details-section-cta-colour
// Setup:
//     Fill background color with flag value.

export const RequestReviewButton = () => {
  const { backgroundColor } = useRequestReviewButton();

  return (
    <button
      style={{
        backgroundColor: backgroundColor ?? DEFAULT_BG_COLOR,
      }}
    >
      Request doctor review
    </button>
  );
};
