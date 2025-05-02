---
sidebar_label: Jira
---

# Jira integration

With PushFeedback, you can forward user feedback directly to your preferred Jira board using [Jira Cloud Automation](https://support.atlassian.com/cloud-automation/docs/jira-cloud-automation/) or [Jira Data Center Automations](https://confluence.atlassian.com/automation/), depending on your distribution.

This integration lets you manage feedback using the same tools for project management, enhancing assignment and tracking of feedback issues.

## Prerequisites

Before you begin, ensure you have:
- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A Jira workspace (Cloud or Data Center) with access to Automation options.

## 1. Configure Jira automations

This section guides you through setting up the automation rule in Jira that will receive feedback from PushFeedback.

### Create the automation rule

1. Go to **Project settings** in your Jira project.
2. Navigate to **Automation** under **Project settings**.
3. Click **Create rule**:

    ![Create rule with Jira](./images/jira-create-rule.png)

### Configure the automation rule

1. Choose the **Incoming webhook** trigger:

    ![Configure incoming webhook with Jira](./images/jira-create-incoming-webhook.png)


2. Click **Next**.

3. Create a **Then** component:

    ![Create then component with Jira](./images/jira-then-action.png)

4. Configure the **Then** component to **Create work item**:

    ![Create issue with Jira](./images/jira-create-issue.png)

    :::tip
    If you don't see the **Create work item** component, ensure **All actions** is marked.
    :::
5. Configure the **Create work item** action as follows:

    ![Configure issue with Jira](./images/jira-configure-issue.png)

    1. **Project:** Set the Jira project where you want to create the issue.
    2. **Issue type:** Select the issue type you want to create.
    3. **Summary:** Set to ``{{webhookData.summary}}``.
    4. **Description:** Set to ``{{webhookData.description}}``.

7. Click **Next**.

8. Click **Turn on rule**, set a name for your rule, and assign the necessary permissions:

    ![Turn on the rule](./images/jira-turn-on-rule.png)

### Get the incoming webhook details

1. Click the **Incoming webhook**.

2. On **Work criteria**, select  **No work items from the webhook**:

    ![Exclude automation](./images/jira-configure-webhook.png)

3. Copy the webhook URL and secret - you'll need these in the following section.

    :::important
    Save both the webhook URL and secret in a secure location. You'll need them to configure PushFeedback.
    :::

4. Click **Update**.

## 2. Configure PushFeedback

Now that your Jira automation is set up, let's configure PushFeedback to send feedback to it.

1. Open [app.pushfeedback.com](https://app.pushfeedback.com).
2. Log in with your account credentials.
3. Once in the dashboard, go to the **Projects** tab.
4. Select the project you wish to configure.
5. In the top-right corner, click on the **Settings** button.
6. Under **Integrations**, select **Jira**.

7. Configure the webhook settings:

    ![Jira integration](./images/jira-integration.png)

    1. Paste the webhook URL you copied from Jira
    2. If your Jira project requires authentication:
        - Paste the webhook secret in the **Secret** field
        - The secret will be sent as an `X-Automation-Webhook-Token` header with each request

8. Save your changes by clicking **Save**.

## 3. Test the integration

To ensure everything is working correctly:

1. Go to any webpage where you've implemented the feedback widget and submit a feedback entry.
2. Confirm the feedback appears on your specified Jira board as a new issue:

    ![Jira board](./images/jira-board.png)

3. Verify that all relevant details are correctly mapped and visible on the Jira issue.

## Troubleshooting

If the integration isn't working:
- Double-check the webhook URL and secret in PushFeedback.
- Verify the Jira automation rule is enabled.
- Check the Jira audit log for any error messages.
