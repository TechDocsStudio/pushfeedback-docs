---
sidebar_label: Vue.js
---

# Feedback widget for Vue.js

Here's a step-by-step guide to help you install PushFeedback in your Vue.js project using NPM.

![Feedback wiget for docs screenshot](./images/feedback-widget-docs.png)

## Prerequisites

Before you begin, you'll need to have the following:

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A Vue.js project and Node.js installed.


## Installation

To integrate the PushFeedback widget into your Vue.js site:

1. Open your terminal or command prompt. Navigate to your project's root directory using the `cd` command:

    ```console
    cd path/to/your/project
    ```
    
    Replace `path/to/your/project` with your project's actual directory path.

1. With your terminal still open, run the following command to install PushFeedback:

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

For more about customization and additional features exploration, check out the [Customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [PushFeedback Support](https://pushfeedback.com/contact).