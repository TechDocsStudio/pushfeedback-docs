---
sidebar_label: Hugo
---

# Feedback widget for Hugo

PushFeedback collects user feedback directly from your website. This guide covers installation in a Hugo project.

![Feedback widget for docs screenshot](./images/feedback-widget-starlight.png)

## Prerequisites

Before you begin, you need:

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A Hugo project.

## Installation

1. Navigate to your Hugo theme directory:

    ```console
    cd your-hugo-site/themes/your-theme-name/
    ```

    Replace `your-hugo-site` with the path to your Hugo site and `your-theme-name` with the name of the theme you're using.

1. Find the head partial, which is often located under `layouts/partials/`. Add the following code to this file:

    ```html
    <!-- Initialize the PushFeedback widget -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.css">
    <script type="module" src="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.esm.js"></script>
    ```

1. Next, find the footer partial (or wherever you'd like the feedback button to be placed) and add the following code just before the closing tags:

    ```html
    <feedback-button project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark">Feedback</feedback-button>
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [PushFeedback dashboard](../quickstart.md#2-create-a-project).

1. After making these changes, navigate back to your Hugo project root and run:

    ```console
    hugo server
    ```

    Once it builds successfully, verify that the feedback button appears and functions correctly on your site.

## Next steps

Choose what to do next:

- [Customization](/category/customization) — Adjust the widget's layout, styles, and text.
- [Integrations](/category/integrations) — Forward feedback to Slack, email, Jira, and more.