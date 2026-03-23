---
sidebar_label: Next.js
---

# Feedback widget for Next.js

PushFeedback collects user feedback directly from your website. This guide covers installation in a Next.js project using NPM.

![Feedback widget for docs screenshot](./images/feedback-widget-starlight.png)

## Prerequisites

Before you begin, you need:

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A Next.js application and Node.js installed.

## Installation

1. Install PushFeedback:

    ```console
    npm install pushfeedback-react
    ```

    :::info
    If you're using yarn as your package manager, run `yarn add pushfeedback-react` instead of the npm command above.
    :::

1. Create a wrapper for the feedback button by creating a file under the path `components/pushfeedback.tsx` and paste the following code:

    ```ts
    import React, { useEffect } from 'react';
    import { FeedbackButton } from 'pushfeedback-react';
    import { JSX, defineCustomElements } from 'pushfeedback/loader';
    import { StyleReactProps } from 'pushfeedback-react/dist/types/react-component-lib/interfaces';
    import 'pushfeedback/dist/pushfeedback/pushfeedback.css';

    const DynamicFeedbackButtonComponent = (props: React.JSX.IntrinsicAttributes & JSX.FeedbackButton & Omit<React.HTMLAttributes<HTMLFeedbackButtonElement>, "style"> & StyleReactProps & React.RefAttributes<HTMLFeedbackButtonElement>) => {
    useEffect(() => {
        defineCustomElements(window);
    }, []);

    return <FeedbackButton {...props} />;
    };

    export default DynamicFeedbackButtonComponent;
    ```

1. In the component where you wish to display the feedback button (often `_pages/app.tsx` or `app/layout.tsx`), include it shown below:

    ```js
    'use client'
    import dynamic from 'next/dynamic';

    export default function Banner() {

    const DynamicFeedbackButton = dynamic(() => import('@/components/utils/pushfeedback'), {
        ssr: false,
    });  
    
    return (
    <div className="App">
    {/* Other components and content */}
    <DynamicFeedbackButton project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark" custom-font="true">Feedback</DynamicFeedbackButton>
    </div>
    );
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [PushFeedback dashboard](../quickstart.md#2-create-a-project).

1. Start your Next.js app by running `npm start` or `yarn start` in your terminal. Once it compiles successfully, verify that the feedback button appears and functions correctly on your site.

## Next steps

Choose what to do next:

- [Customization](/category/customization) — Adjust the widget's layout, styles, and text.
- [Integrations](/category/integrations) — Forward feedback to Slack, email, Jira, and more.