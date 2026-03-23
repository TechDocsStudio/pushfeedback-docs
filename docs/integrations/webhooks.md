---
sidebar_label: Webhook
---

# Incoming Webhooks integration

PushFeedback sends a POST request to a URL of your choice each time a user submits feedback. Use webhooks to connect PushFeedback with any external system.


![Webhooks integration](./images/webhook-integration.png)

## Prerequisites

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.

## Set up a webhook

1. Open [app.pushfeedback.com](https://app.pushfeedback.com) and log in.

2. Go to **Projects** and select your project.

3. Click **Settings**, then under **Integrations**, select **Webhooks**.

7. Add the URL of the endpoint where you want to send the feedback data.

8. Save your changes by clicking **Save**.

9. To ensure the integration is working correctly, go to any webpage where you've implemented the PushFeedback widget and send a feedback entry. The data should be successfully forwarded to the specified endpoint.

## Webhook specification

Here's an example of a webhook payload that PushFeedback sends to the specified URL:


```json
{
  "id": "EVNT-feedback123",
  "object": "event",
  "creation_time": "2024-05-03T08:00:00Z",
  "type": "feedback.created",
  "api_version": "v1",
  "data": {
    "object": "feedback",
    "id": "feedback123",
    "project_id": "https://app.pushfeedback.com/team1/projects/project1/",
    "message": "This is a sample feedback message.",
    "metadata": "Feature A",
    "url": "https://example.com/page",
    "rating": 4,
    "rating_mode": "star",
    "has_screenshot": true,
    "pushfeedback_url": "https://app.pushfeedback.com/team1/projects/project1/",
    "text": "New feedback on PushFeedback: https://app.pushfeedback.com/team1/projects/project1/"
  }
}
```


