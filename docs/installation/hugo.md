---
sidebar_label: Hugo
---

# Feedback widget for Hugo

Here's a step-by-step guide to help you install PushFeedback in your Hugo project.

![Feedback wiget for docs screenshot](./images/feedback-widget-docs.png)

## Prerequisites

Before you begin, you'll need to have the following:

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A Hugo project.

## Installation

To integrate the PushFeedback widget into your Hugo site:

1. Open your terminal or command prompt. Navigate to your project's root directory using the `cd` command:

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

For more about customization and additional features exploration, check out the [Configuration](/category/configuration) section.

Need assistance? We're here to help! Reach out to us at [PushFeedback Support](https://pushfeedback.com/contact).