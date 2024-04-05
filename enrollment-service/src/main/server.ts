/* tslint:disable:no-console */
import './settings/alias';
import '~/main/jobs/consumers';

import { env } from '~/shared/env';
import { app } from '~/main/settings/app';

app.listen(env.port, () =>
  console.log(`🎯 server running at: http://localhost:${env.port}/`)
);
