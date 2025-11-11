---
sidebar_label: VuePress
---

# Feedback widget for VuePress

Here's a step-by-step guide to help you install PushFeedback in your VuePress project.

![Feedback widget for docs screenshot](./images/feedback-widget-starlight.png)

## Prerequisites

Before you begin, you'll need to have the following:

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A VuePress site and Node.js installed.

## Installation

To integrate the PushFeedback widget into your VuePress site:

1. Open your terminal or command prompt. Navigate to your project's root directory using the `cd` command:

    ```console
    cd path/to/your/project
    ```
    
    Replace `path/to/your/project` with your project's actual directory path.

1. With your terminal still open, run the following command to install PushFeedback:

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

For more about customization and additional features exploration, check out the [Customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [PushFeedback Support](https://pushfeedback.com/contact).

