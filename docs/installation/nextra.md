---
sidebar_label: Nextra
---

# Feedback widget for Nextra

Here's a step-by-step guide to help you install PushFeedback in your Nextra project.

![Feedback widget for docs screenshot](./images/feedback-widget-starlight.png)

## Prerequisites

Before you begin, you'll need to have the following:

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A Nextra site and Node.js installed.

## Installation

To integrate the PushFeedback widget into your Nextra site:

1. Open your terminal or command prompt. Navigate to your project's root directory using the `cd` command:

    ```console
    cd path/to/your/project
    ```
    
    Replace `path/to/your/project` with your project's actual directory path.

1. With your terminal still open, run the following command to install PushFeedback:

    ```console
    npm install pushfeedback-react
    ```

    :::info
    If you're using yarn as your package manager, run `yarn add pushfeedback-react` instead of the npm command above.
    :::

1. Create a new component file `components/FeedbackWidget.tsx` (or `components/FeedbackWidget.jsx` for JavaScript) with the following content:

    ```tsx
    import React, { useEffect } from 'react';
    import { FeedbackButton } from 'pushfeedback-react';
    import { defineCustomElements } from 'pushfeedback/loader';
    import 'pushfeedback/dist/pushfeedback/pushfeedback.css';

    export default function FeedbackWidget() {
        useEffect(() => {
            if (typeof window !== 'undefined') {
                defineCustomElements(window);
            }
        }, []);

        return (
            <FeedbackButton 
                project="<YOUR_PROJECT_ID>" 
                button-position="bottom-right" 
                modal-position="bottom-right" 
                button-style="dark">
                Feedback
            </FeedbackButton>
        );
    }
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [PushFeedback dashboard](../quickstart.md#2-create-a-project).

1. Update your Nextra theme configuration file (`theme.config.tsx` or `theme.config.jsx`) to include the feedback widget. If you're using the Nextra Docs theme, add it to the `main` function:

    ```tsx
    import FeedbackWidget from './components/FeedbackWidget'

    export default {
      // ... other config options
      main: ({ children }) => {
        return (
          <>
            {children}
            <FeedbackWidget />
          </>
        )
      }
    }
    ```

1. Start your Nextra project by running `npm run dev` or `yarn dev` in your terminal. Once it compiles successfully, verify that the feedback button appears and functions correctly on your site.

## Next steps

For more about customization and additional features exploration, check out the [Customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [PushFeedback Support](https://pushfeedback.com/contact).

