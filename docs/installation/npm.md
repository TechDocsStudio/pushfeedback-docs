---
sidebar_label: NPM
---

# Feedback widget for NPM projects

PushFeedback collects user feedback directly from your website. This guide covers installation via NPM.

![Feedback widget for docs screenshot](./images/feedback-widget-starlight.png)

## Prerequisites

Before you begin, you need:

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- Node.js installed.


## Installation

1. Install PushFeedback:

    ```console
    npm install pushfeedback
    ```

3. Make sure you embed the styles and scripts in your primary JS or entry file:

    ```js
    // Incorporate PushFeedback styles
    import 'pushfeedback/dist/pushfeedback/pushfeedback.css';

    // Initialize the PushFeedback widget
    import 'pushfeedback/dist/pushfeedback/pushfeedback.esm.js';
    ```

4. Just before the closing `</body>` tag of your website's HTML, add the following snippet:

    ```html
    <feedback-button project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark">Feedback</feedback-button>
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [PushFeedback dashboard](../quickstart.md#2-create-a-project).

1. Open the website in a web browser to verify the feedback button appears and works correctly.

## Next steps

Choose what to do next:

- [Customization](/category/customization) — Adjust the widget's layout, styles, and text.
- [Integrations](/category/integrations) — Forward feedback to Slack, email, Jira, and more.