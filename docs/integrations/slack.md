---
sidebar_label: Slack
---

# Slack integration

PushFeedback sends feedback notifications to a Slack channel using [incoming webhooks](https://api.slack.com/messaging/webhooks).

![Slack integration](./images/slack-integration.png)

## Prerequisites

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A Slack workspace.

## Set up the Slack integration

1. Open [app.pushfeedback.com](https://app.pushfeedback.com) and log in.

2. Go to **Projects** and select your project.

3. Click **Settings**, then under **Integrations**, select **Slack**.

7. Add the incoming webhook URL provided by Slack. For detailed instructions on setting up incoming webhooks in Slack, refer to [Slack's documentation](https://api.slack.com/messaging/webhooks).

8. Save your changes by clicking **Save**.

9. To ensure the changes are in place, go to any webpage where you've implemented the PushFeedback widget and send a feedback entry. You should receive a notification in the Slack channel associated with the webhook.
