---
sidebar_label: Fumadocs
---

# Feedback widget for Fumadocs

Here's a step-by-step guide to help you install PushFeedback in your Fumadocs project.

![Feedback widget for docs screenshot](./images/feedback-widget-starlight.png)

## Prerequisites

Before you begin, you'll need to have the following:

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A Fumadocs site and Node.js installed.

## Installation

To integrate the PushFeedback widget into your Fumadocs site:

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
    If you're using pnpm as your package manager, run `pnpm add pushfeedback-react` instead of the npm command above.
    :::

1. Create a new component file `components/feedback-widget.tsx` with the following content:

    ```tsx
    'use client';

    import React, { useEffect } from 'react';
    import { FeedbackButton } from 'pushfeedback-react';
    import { defineCustomElements } from 'pushfeedback/loader';
    import 'pushfeedback/dist/pushfeedback/pushfeedback.css';

    export function FeedbackWidget() {
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
                button-style="dark"
                custom-font="true">
                Feedback
            </FeedbackButton>
        );
    }
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [PushFeedback dashboard](../quickstart.md#2-create-a-project).

1. Import and add the `FeedbackWidget` component to your root layout file (`app/layout.tsx`):

    ```tsx
    import { FeedbackWidget } from '@/components/feedback-widget';

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en">
          <body>
            {children}
            <FeedbackWidget />
          </body>
        </html>
      );
    }
    ```

1. Start your Fumadocs project by running `npm run dev` in your terminal. Once it compiles successfully, verify that the feedback button appears and functions correctly on your site.

## Next steps

For more about customization and additional features exploration, check out the [Customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [PushFeedback Support](https://pushfeedback.com/contact).

