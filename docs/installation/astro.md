---
sidebar_label: Astro
---

# Feedback widget for Astro

Here's a step-by-step guide to help you install PushFeedback in your Astro project.

:::note
If you're using **Starlight**, the documentation framework built on Astro, refer to [Feedback widget for Starlight](starlight.md).
:::

![Feedback widget for docs screenshot](./images/feedback-widget-starlight.png)


## Prerequisites

Before you begin, you'll need to have the following:

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- An Astro project.

## Installation

To integrate the PushFeedback widget into your Astro site:

1. Open your Astro project in your preferred code editor.

1. Locate the `src/layouts/Layout.astro` file (or any layout file that wraps your pages) and insert the following code within the `<head>` section:

    ```html
    <!-- Initialize the PushFeedback widget -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.css">
    <script type="module" src="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.esm.js"></script>
    ```

1. Just before the closing `</body>` tag of your layout file, add the following snippet:

    ```html
    <feedback-button project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark">Feedback</feedback-button>
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [PushFeedback dashboard](../quickstart.md#2-create-a-project).

1. Open the website in a web browser to verify the feedback button appears and works correctly.

## Next steps

For more about customization and additional features exploration, check out the [Customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [PushFeedback Support](https://pushfeedback.com/contact).
