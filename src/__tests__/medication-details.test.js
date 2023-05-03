import React from 'react';
import { render } from '@testing-library/react';
import { MedicationDetails } from '../components/medication-details';
import client from '../client';
import { MESSAGE } from '../utils/constants';

jest.mock('../client');

/* *
 * This scenario tests the rendering of a component called MedicationDetails based on the value returned by the variation method of a client object. There are three tests:
 *
 * test(MESSAGE.FOR_MEDICATION.RENDER) checks if the component is rendered when the variation method returns 'variation'. It creates a mock client object with the variation method returning 'variation', renders the component with this mock client object, and asserts that a specific text message is present in the rendered component.
 *
 * test(MESSAGE.FOR_MEDICATION.NOT_RENDER) checks if the component is not rendered when the variation method returns 'off'. It creates a mock client object with the variation method returning 'off', renders the component with this mock client object, and asserts that the specific text message is not present in the rendered component.
 *
 * test(MESSAGE.FOR_MEDICATION.MEDICATION_NOT_AVAILABLE) checks if the component is not rendered when the variation method returns 'off'. It creates a mock client object with the variation method returning 'off', renders the component with this mock client object, and asserts that the specific text message is not present in the rendered component.
 */

describe('MedicationDetails', () => {
  const medication = {
    sideEffects: MESSAGE.FOR_MEDICATION.SIDE_EFFECTS,
    warnings: MESSAGE.FOR_MEDICATION.WARNINGS,
  };

  beforeEach(() => {
    client.variation.mockReturnValue('variation');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it(MESSAGE.FOR_MEDICATION.RENDER, () => {
    const { getByText } = render(<MedicationDetails medication={medication} />);

    expect(getByText(MESSAGE.FOR_MEDICATION.SIDE_EFFECTS)).toBeInTheDocument();
    expect(getByText(MESSAGE.FOR_MEDICATION.WARNINGS)).toBeInTheDocument();
    expect(
      getByText(MESSAGE.FOR_MEDICATION.CONTACT_DOCTOR),
    ).toBeInTheDocument();
    expect(
      getByText(MESSAGE.FOR_MEDICATION.REQUEST_DOCTOR),
    ).toBeInTheDocument();
  });

  it(MESSAGE.FOR_MEDICATION.NOT_RENDER, () => {
    client.variation.mockReturnValue('off');

    const { queryByText } = render(
      <MedicationDetails medication={medication} />,
    );
    expect(
      queryByText(MESSAGE.FOR_MEDICATION.SIDE_EFFECTS),
    ).not.toBeInTheDocument();
    expect(
      queryByText(MESSAGE.FOR_MEDICATION.WARNINGS),
    ).not.toBeInTheDocument();
    expect(
      queryByText(MESSAGE.FOR_MEDICATION.CONTACT_DOCTOR),
    ).not.toBeInTheDocument();
    expect(
      queryByText(MESSAGE.FOR_MEDICATION.REQUEST_DOCTOR),
    ).not.toBeInTheDocument();
  });

  it(MESSAGE.FOR_MEDICATION.MEDICATION_NOT_AVAILABLE, () => {
    const { queryByText } = render(<MedicationDetails />);

    expect(
      queryByText(MESSAGE.FOR_MEDICATION.SIDE_EFFECTS),
    ).not.toBeInTheDocument();
    expect(
      queryByText(MESSAGE.FOR_MEDICATION.WARNINGS),
    ).not.toBeInTheDocument();
    expect(
      queryByText(MESSAGE.FOR_MEDICATION.CONTACT_DOCTOR),
    ).not.toBeInTheDocument();
    expect(
      queryByText(MESSAGE.FOR_MEDICATION.REQUEST_DOCTOR),
    ).not.toBeInTheDocument();
  });
});
