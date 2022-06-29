# Measuring Product Adoption

Product adoption tracks how users use [Resoto](https://resoto.com)—from their first visit to the [website](https://resoto.com) and [documentation](https://resoto.com/docs) to the execution of [CLI commands](https://resoto.com/docs/reference/cli) and scheduling of [jobs](https://resoto.com/docs/concepts/automation/job). Product analytics inform product development, pinpointing roadblocks to adoption and identifying how we can help users get more value out of Resoto. Product adoption metrics are how we measure the success of our product.

In general, we opt for open-source tools over proprietary solutions whenever possible.

For Product Adoption, we currently employ the use of four tools:

1. [**Scarf**](https://scarf.sh), for package download and web traffic analytics
2. [**PostHog**](https://posthog.com), for product analytics
3. [**Plausible**](https://plausible.io), for website usage analytics

## Scarf

We utilize two of [Scarf](https://scarf.sh)'s products: the [Scarf Gateway](https://about.scarf.sh/scarf-gateway) and [Documentation Insights](https://about.scarf.sh/documentation-insights).

### Scarf Gateway

The [Scarf Gateway](https://about.scarf.sh/scarf-gateway) that acts as a central access point to our containers and packages, irrespective of where we host them. Scarf sits in front of and redirects traffic to the registry hosting our Docker images. In this way, Scarf provides us with distribution and download metrics, including data on commercial users of [Resoto](https://resoto.com).

### Documentation Insights

[Documentation Insights](https://about.scarf.sh/documentation-insights) allows us to measure web traffic on our [company](https://some.engineering) and [product](https://resoto.com) websites, by providing a lightweight "tracking pixel" that gets loaded by website visitors. This gives us insights into which parts of our [documentation](https://resoto.com/docs) are most frequently visited and which businesses are accessing our [documentation](https://resoto.com/docs).

## PostHog

[PostHog](https://posthog.com) is a platform for product analytics, feature flags, session recording, and plug-ins. We currently use their product analytics only.

Users are able to [disable telemetry](https://resoto.com/docs/reference/telemetry#disabling) when they install Resoto, meaning we receive analytics from a subset of the entire user base.

All analytics are anonymous—**we do not capture or store any personally identifiable information (PII)**. There are no unique identifiers that allow us to correlate a [Resoto](https://resoto.com) installation back to an actual person.

### Metrics

Product analytics should start with engagement and retention. If users keep coming back using our product more frequently and put automations in place, then we're doing something right! 👍

We currently track the following metrics:

- **# of new installations:** net new installations, by counting the global unique IDs (UUID) that [Resoto](https://resoto.com) generates for every new install.

- **# of started instances of `resotocore`:** newly started [Resoto](https://resoto.com) instances, irrespective of whether they are new or existing installs.

  Each time a user starts and stops a [Resoto](https://resoto.com) installation, this value is incremented. This metric informs us of overall usage, and includes installations that run for less than one hour.

- **# of running installations:** the number of installations that have been running for longer than one hour.

  We exclude any installations where a user starts and stops [Resoto](https://resoto.com) for a single collect run. Running [Resoto](https://resoto.com) non-stop in the background is a first indicator that users are getting continuous value.

- **# executed CLI commands:** the aggregate number of [commands](https://resoto.com/docs/reference/cli) run across the installed base of [Resoto](https://resoto.com), either through ad-hoc or automated usage.

  Users can run commands ad-hoc via the [CLI](https://resoto.com/docs/reference/cli) or their own custom interfaces to the [API](https://resoto.com/docs/reference/api). Users can also schedule commands with a [job](https://resoto.com/docs/concepts/automation/job) or [workflow](https://resoto.com/docs/concepts/automation/workflow). The number of executed [CLI commands](https://resoto.com/docs/reference/cli) indicates aggregate engagement with our shell. Users receive value either because of automation or ad-hoc answers about their infrastructure.

- **# of installations that execute jobs:** how many installations of [Resoto](https://resoto.com) run at least one [job](https://resoto.com/docs/concepts/automation/job).

  [Jobs](https://resoto.com/docs/concepts/automation/job) take a [CLI command](https://resoto.com/docs/reference/cli) and trigger it automatically based on a schedule, an event, or a combination of both. The use of [jobs](https://resoto.com/docs/concepts/automation/job) means users have found a way to use [Resoto](https://resoto.com) to automate a task, making them more productive.

## Plausible

[Plausible](https://plausible.io) is an open-source web analytics tool that tracks website usage without collecting personally identifiable information (PII) and without using cookies. [Plausible](https://plausible.io) complies with privacy regulations such as the GDPR, CCPA, and PECR.

[Plausible](https://plausible.io) allows us to track the number of unique visitors, total page views, bounce rate, and visit duration in addition to viewing traffic referral sources for both our [company](https://some.engineering) and [product](https://resoto.com) websites.
