---
sidebar_label: React
---

# Feedback widget for React

PushFeedback collects user feedback directly from your website. This guide covers installation in a React project using NPM.

![Feedback widget for docs screenshot](./images/feedback-widget-starlight.png)

## Prerequisites

Before you begin, you need:

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A React application and Node.js installed.

## Installation

1. Install PushFeedback:

    ```console
    npm install pushfeedback-react
    ```

    :::info
    If you're using yarn as your package manager, run `yarn add pushfeedback-react` instead of the npm command above.
    :::

1. In the main component where you wish to place the feedback button (often `src/App.js`), embed the PushFeedback button:

    ```ts
    import React, { useEffect } from 'react';

    import { FeedbackButton } from 'pushfeedback-react';
    import { defineCustomElements } from 'pushfeedback/loader';
    import 'pushfeedback/dist/pushfeedback/pushfeedback.css';

    function App() {
        
        useEffect(() => {
            if (typeof window !== 'undefined') {
            defineCustomElements(window);
            }
        }, []);

        return (
            <div className="App">
                {/* Other components and content */}
                <FeedbackButton project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark">Feedback</FeedbackButton>
            </div>
        );
    }

    export default App;
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [PushFeedback dashboard](../quickstart.md#2-create-a-project).

1. Start your React app by running `npm start` or `yarn start` in your terminal. Once it compiles successfully, verify that the feedback button appears and functions correctly on your site.

## Next steps

Choose what to do next:

- [Customization](/category/customization) — Adjust the widget's layout, styles, and text.
- [Integrations](/category/integrations) — Forward feedback to Slack, email, Jira, and more.