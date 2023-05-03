import { render } from '@testing-library/react';
import client from '../client';
import { RequestReviewButton } from '../components/request-review-button';
import { DEFAULT_BG_COLOR, MESSAGE } from '../utils/constants';

jest.mock('../client');

/* *
 * This scenario tests the RequestReviewButton component with the default background color.
 *
 * The RequestReviewButton component should render a button with the text "Request Review" and the default background color.
 *
 * The RequestReviewButton component should render a button with the text "Request Review" and the custom background color.

 */

describe('RequestReviewButton', () => {
  it(MESSAGE.FOR_BUTTON.WITH_DEFAULT_BG, () => {
    client.variation.mockImplementation((key, defaultValue) => defaultValue);

    const { getByText } = render(<RequestReviewButton />);

    const button = getByText(MESSAGE.FOR_MEDICATION.REQUEST_DOCTOR);
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ backgroundColor: DEFAULT_BG_COLOR });
  });

  it(MESSAGE.FOR_BUTTON.WITH_CUSTOM_BG, () => {
    client.variation.mockImplementation(() => '#123456');

    const { getByText } = render(<RequestReviewButton />);

    const button = getByText(MESSAGE.FOR_MEDICATION.REQUEST_DOCTOR);
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({ backgroundColor: '#123456' });
  });
});
