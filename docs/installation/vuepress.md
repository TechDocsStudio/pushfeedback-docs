---
sidebar_label: VuePress
---

# Feedback widget for VuePress

PushFeedback collects user feedback directly from your website. This guide covers installation in a VuePress project.

![Feedback widget for docs screenshot](./images/feedback-widget-starlight.png)

## Prerequisites

Before you begin, you need:

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A VuePress site and Node.js installed.

## Installation

1. Install PushFeedback:

    ```console
    npm install pushfeedback
    ```

    :::info
    If you're using yarn as your package manager, run `yarn add pushfeedback` instead of the npm command above.
    :::

1. Create a client app enhancement file. In your `.vuepress` directory, create a file named `enhanceApp.js` (or `clientAppEnhance.js` for VuePress 2.x):

    **For VuePress 1.x** (`.vuepress/enhanceApp.js`):

    ```js
    import 'pushfeedback/dist/pushfeedback/pushfeedback.css';

    export default ({ Vue, options, router, siteData }) => {
        if (typeof window !== 'undefined') {
            import('pushfeedback/loader').then(module => {
                module.defineCustomElements(window);
            });
        }
    };
    ```

    **For VuePress 2.x** (`.vuepress/client.js`):

    ```js
    import { defineClientConfig } from '@vuepress/client';
    import 'pushfeedback/dist/pushfeedback/pushfeedback.css';

    export default defineClientConfig({
        async enhance({ app, router, siteData }) {
            if (typeof window !== 'undefined') {
                const { defineCustomElements } = await import('pushfeedback/loader');
                defineCustomElements(window);
            }
        },
    });
    ```

1. Create a global component to display the feedback button. Create a file `.vuepress/components/FeedbackButton.vue`:

    ```vue
    <template>
        <feedback-button 
            project="<YOUR_PROJECT_ID>" 
            button-position="bottom-right" 
            modal-position="bottom-right" 
            button-style="dark">
            Feedback
        </feedback-button>
    </template>

    <script>
    export default {
        name: 'FeedbackButton'
    };
    </script>
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [PushFeedback dashboard](../quickstart.md#2-create-a-project).

1. Add the component to your theme's layout or to individual pages. For a global approach, modify your theme's `Layout.vue` file or create a custom layout:

    ```vue
    <template>
        <div id="app">
            <Content />
            <FeedbackButton />
        </div>
    </template>

    <script>
    import FeedbackButton from '../components/FeedbackButton.vue';

    export default {
        components: {
            FeedbackButton
        }
    };
    </script>
    ```

1. Start your VuePress project by running `npm run dev` or `yarn dev` in your terminal. Once it compiles successfully, verify that the feedback button appears and functions correctly on your site.

## Next steps

Choose what to do next:

- [Customization](/category/customization) — Adjust the widget's layout, styles, and text.
- [Integrations](/category/integrations) — Forward feedback to Slack, email, Jira, and more.

