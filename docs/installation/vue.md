---
sidebar_label: Vue.js
---

# Feedback widget for Vue.js

PushFeedback collects user feedback directly from your website. This guide covers installation in a Vue.js project using NPM.

![Feedback widget for docs screenshot](./images/feedback-widget-starlight.png)

## Prerequisites

Before you begin, you need:

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A Vue.js project and Node.js installed.

## Installation

1. Install PushFeedback:

    ```console
    npm install pushfeedback
    ```

1. Open your main Vue component or the desired Vue component where you want the feedback widget to appear. Then, incorporate the PushFeedback styles and scripts:

    ```js
    <script>
    // Incorporate PushFeedback styles
    import 'pushfeedback/dist/pushfeedback/pushfeedback.css';

    // Initialize the PushFeedback widget
    import 'pushfeedback/dist/pushfeedback/pushfeedback.esm.js';
    </script>
    ```

1. In the template section of your Vue component, add the following snippet:

    ```html
    <template>
        <!-- Rest of your component's template -->

        <feedback-button 
            project="<YOUR_PROJECT_ID>" 
            button-position="bottom-right" 
            modal-position="bottom-right" 
            button-style="dark">
            Feedback
        </feedback-button>
    </template>
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [PushFeedback dashboard](../quickstart.md#2-create-a-project).

1. After making these changes, navigate back to your Vue.js project root and run:

    ```console
    npm run serve
    ```

    Open the website in a web browser to verify that the feedback button appears and works correctly.


## Next steps

Choose what to do next:

- [Customization](/category/customization) — Adjust the widget's layout, styles, and text.
- [Integrations](/category/integrations) — Forward feedback to Slack, email, Jira, and more.