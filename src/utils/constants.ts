export const MESSAGE = {
  FOR_BANNER: {
    RENDER: 'Render promotional banner when feature flag is enabled',
    NOT_RENDER:
      'Do not render promotional banner when feature flag is disabled',
    TITLE: '50% launch sale!',
  },
  FOR_MEDICATION: {
    RENDER:
      'Render medication when details section for users with flag value "variation"',
    NOT_RENDER:
      'Do not render medication details section for users without flag value "variation"',
    MEDICATION_NOT_AVAILABLE:
      'Do not render medication details section when medication is not available',
    SIDE_EFFECTS: 'Queezy, sleepy',
    WARNINGS: 'Increased heart rate',
    CONTACT_DOCTOR: 'Experiencing any of these? Please contact your doctor',
    REQUEST_DOCTOR: 'Request doctor review',
  },
  FOR_BUTTON: {
    WITH_DEFAULT_BG:
      'Render with default background color when feature flag is off',
    WITH_CUSTOM_BG:
      'Render with custom background color when feature flag is on',
  },
};

export const DEFAULT_BG_COLOR = '#fff';

export const TURN = {
  ON: true,
  OFF: false,
};
