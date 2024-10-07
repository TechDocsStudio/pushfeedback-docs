---
sidebar_label: Next.js
---

# Feedback widget for Next.js

Here's a step-by-step guide to help you install PushFeedback in your Next.js project using NPM.

![Feedback widget for docs screenshot](./images/feedback-widget-starlight.png)

## Prerequisites

Before you begin, you'll need to have the following:

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A Next.js application and Node.js installed.

## Installation

To integrate the PushFeedback widget into your Next.js site:

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

    This will download and install the PushFeedback package into your project.


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

For more about customization and additional features exploration, check out the [Customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [PushFeedback Support](https://pushfeedback.com/contact).