import * as LDClient from 'launchdarkly-js-client-sdk';
import { launchBannerFlagKey } from './feature-flag-config';

const context: LDClient.LDContext = {
  kind: 'user',
  key: launchBannerFlagKey,
};

const clientSideId = process.env.REACT_APP_LAUNCH_DARKLY_CLIENT_ID as string;

const client = LDClient.initialize(clientSideId, context);

export default client;
