---
sidebar_label: Jekyll
---

# Feedback widget for Jekyll

Here's a step-by-step guide to help you install PushFeedback in your Jekyll project.

![Feedback wiget for docs screenshot](./images/feedback-widget-docs.png)

## Prerequisites

Before you begin, you'll need to have the following:

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A Jekyll project.

## Installation

To integrate the PushFeedback widget into your Jekyll site:

1. Open your terminal or command prompt. Navigate to your project's root directory using the `cd` command:

    ```console
    cd path/to/your/project
    ```
    
    Replace `path/to/your/project` with your project's actual directory path.

1. Open the `_includes/head.html` file (or the equivalent file that contains the `<head>` section in your Jekyll theme). Append the following code:

    ```html
    <!-- Initialize the PushFeedback widget -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.css">
    <script type="module" src="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.esm.js"></script>
    ```

1. Open `_includes/footer.html` or the specific file where you'd like the feedback button to appear. Add the following snippet just before its closing tags:

    ```html
    <feedback-button project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark">Feedback</feedback-button>
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [PushFeedback dashboard](../quickstart.md#2-create-a-project).

1. After making these changes, navigate back to your Jekyll project root and run:

    ```console
    jekyll build
    ```

    Once it builds successfully, verify that the feedback button appears and functions correctly on your site.

## Next steps

For more about customization and additional features exploration, check out the [Customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [PushFeedback Support](https://pushfeedback.com/contact).