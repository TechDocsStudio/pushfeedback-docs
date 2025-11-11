---
sidebar_label: Webflow
---

# Feedback widget for Webflow

Here's a step-by-step guide to help you install PushFeedback in your Webflow site.

![Feedback widget for docs screenshot](./images/feedback-widget-starlight.png)

## Prerequisites

Before you begin, you'll need to have the following:

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A Webflow site with the ability to add custom code (available on paid plans).

## Installation

To embed the PushFeedback widget into your Webflow site:

1. Log in to your Webflow account and open your project.

1. Navigate to **Project Settings** by clicking the gear icon in the left sidebar.

1. Go to the **Custom Code** tab.

1. In the **Head Code** section, add the following code to load the PushFeedback styles and scripts:

    ```html
    <!-- Initialize the PushFeedback widget -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.css">
    <script type="module" src="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.esm.js"></script>
    ```

1. In the **Footer Code** section (which is inserted before the closing `</body>` tag), add the feedback button:

    ```html
    <feedback-button project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark">Feedback</feedback-button>
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [PushFeedback dashboard](../quickstart.md#2-create-a-project).

1. Click **Save Changes**.

1. Publish your Webflow site to see the changes live.

1. Open your published website in a web browser to verify the feedback button appears and functions correctly.

## Next steps

For more about customization and additional features exploration, check out the [Customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [PushFeedback Support](https://pushfeedback.com/contact).

