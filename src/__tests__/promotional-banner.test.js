import { render, screen } from '@testing-library/react';
import { PromotionalBanner } from '../components/promotional-banner';

import { MESSAGE } from '../utils/constants';

jest.mock('uuid', () => {
  const base = '9134e286-6f71-427a-bf00-';
  let current = 100000000000;

  return {
    v4: () => {
      const uuid = base + current.toString();
      current++;

      return uuid;
    },
  };
});
/* *
 * This scenario tests the rendering of a component called PromotionalBanner based on the value returned by the variation method of a client object. There are two tests:
 *
 * test(MESSAGE.FOR_BANNER.RENDER) checks if the component is rendered when the variation method returns true. It creates a mock client object with the variation method returning true, renders the component with this mock client object, and asserts that a specific text message is present in the rendered component.
 *
 * test(MESSAGE.FOR_BANNER.NOT_RENDER) checks if the component is not rendered when the variation method returns false. It creates a mock client object with the variation method returning false, renders the component with this mock client object, and asserts that the specific text message is not present in the rendered component.
 */

test(MESSAGE.FOR_BANNER.RENDER, () => {
  const mockClient = {
    on: jest.fn(),
    variation: jest.fn().mockReturnValue(true),
  };

  render(<PromotionalBanner client={mockClient} />);

  expect(screen.getByText(MESSAGE.FOR_BANNER.TITLE)).toBeInTheDocument();
});

test(MESSAGE.FOR_BANNER.NOT_RENDER, () => {
  const mockClient = {
    on: jest.fn(),
    variation: jest.fn().mockReturnValue(false),
  };

  render(<PromotionalBanner client={mockClient} />);

  expect(screen.queryByText(MESSAGE.FOR_BANNER.TITLE)).not.toBeInTheDocument();
});
