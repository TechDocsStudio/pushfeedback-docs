---
sidebar_label: VitePress
---

# Feedback widget for VitePress

Here's a step-by-step guide to help you install PushFeedback in your VitePress project.

![Feedback widget for docs screenshot](./images/feedback-widget-starlight.png)

## Prerequisites

Before you begin, you'll need to have the following:

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A VitePress site and Node.js installed.

## Installation

To integrate the PushFeedback widget into your VitePress site:

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

1. Create a custom layout component. In your `.vitepress/theme` directory, create a file named `Layout.vue`:

    ```vue
    <script setup>
    import { onMounted } from 'vue';
    import DefaultTheme from 'vitepress/theme';
    import 'pushfeedback/dist/pushfeedback/pushfeedback.css';

    const { Layout } = DefaultTheme;

    onMounted(async () => {
        if (typeof window !== 'undefined') {
            const { defineCustomElements } = await import('pushfeedback/loader');
            defineCustomElements(window);
        }
    });
    </script>

    <template>
        <Layout>
            <template #layout-bottom>
                <feedback-button 
                    project="<YOUR_PROJECT_ID>" 
                    button-position="bottom-right" 
                    modal-position="bottom-right" 
                    button-style="dark">
                    Feedback
                </feedback-button>
            </template>
        </Layout>
    </template>
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [PushFeedback dashboard](../quickstart.md#2-create-a-project).

1. Create or update your theme's index file at `.vitepress/theme/index.js` (or `.ts`):

    ```js
    import DefaultTheme from 'vitepress/theme';
    import Layout from './Layout.vue';

    export default {
        extends: DefaultTheme,
        Layout: Layout
    };
    ```

1. Start your VitePress project by running `npm run docs:dev` in your terminal. Once it compiles successfully, verify that the feedback button appears and functions correctly on your site.

## Next steps

For more about customization and additional features exploration, check out the [Customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [PushFeedback Support](https://pushfeedback.com/contact).

