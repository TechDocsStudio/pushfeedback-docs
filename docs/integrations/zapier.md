---
sidebar_label: Zapier
---

# Zapier integration

Zapier is a powerful automation tool that connects your favorite apps and services, allowing you to automate repetitive tasks without any coding knowledge. With PushFeedback, you can integrate seamlessly with Zapier to create a multitude of automation workflows. 

## Prerequisites

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A Zapier account on a paid plan or during their trial period, as Webhooks by Zapier is a built-in tool only available for these users.

## Steps

To activate the webhook integration in PushFeedback, follow the steps outlined below:

1. Open [app.pushfeedback.com](https://app.pushfeedback.com).

2. Log in using your account credentials.

3. Once inside the dashboard, go to the **Projects** tab.

4. Select the project you wish to configure.

5. On the top-right corner of the page, click on the **Settings** button.

6. Under **Integrations**, select **Webhooks**.

7. Add the URL of the Zapier endpoint where you want to send the feedback data and configure your Zap on Zapier. For detailed instructions on setting up incoming webhooks in Zapier, refer to [Zapier's documentation](https://zapier.com/blog/what-are-webhooks#webhooks-zapier).

8. Save your changes by clicking **Save**.

9. To ensure the integration is working correctly, go to any webpage where you've implemented the PushFeedback widget and send a feedback entry. The data should be successfully forwarded to the specified endpoint.

## Webhook specification

See [Webhook specification](./webhooks.md#webhook-specification).

## Integrations and Examples

Zapier offers hundreds of integrations with popular apps and services, allowing you to create custom workflows tailored to your needs. Some examples of integrations you can achieve with PushFeedback and Zapier include:

- Sending feedback data to project management tools like Trello or Asana.
- Notifying your team in Slack or Microsoft Teams whenever new feedback is submitted.
- Adding feedback entries to a Google Sheets document for analysis and reporting.
- Integrating with CRM systems like Salesforce to keep track of customer feedback.

Start integrating PushFeedback with Zapier today to unlock the full potential of your feedback management process.
