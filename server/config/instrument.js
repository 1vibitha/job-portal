// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://ef0dad002a14af6ba854f9a9ce06a98c@o4510420514832384.ingest.us.sentry.io/4510420672905216",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  integrations: [
    Sentry.mongooseIntegration()
  ],
  sendDefaultPii: true,
});
