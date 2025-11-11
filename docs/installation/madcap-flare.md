---
sidebar_label: MadCap Flare
---

# Feedback widget for MadCap Flare

Here's a step-by-step guide to help you install PushFeedback in your MadCap Flare documentation.

![Feedback widget for docs screenshot](./images/feedback-widget-starlight.png)

## Prerequisites

Before you begin, you'll need to have the following:

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- MadCap Flare installed and a project opened.

## Installation

To integrate the PushFeedback widget into your MadCap Flare documentation:

1. Open your MadCap Flare project.

1. Navigate to **Resources > Stylesheets** in the Project Organizer.

1. Open your main stylesheet (or create a new one if needed).

1. Add the following CSS import at the top of your stylesheet:

    ```css
    @import url('https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.css');
    ```

1. Navigate to **Resources > Master Pages** in the Project Organizer.

1. Open your master page (e.g., `Default.htm` or the specific master page you're using for your documentation).

1. Before the closing `</head>` tag, insert the following script:

    ```html
    <script type="module" src="https://cdn.jsdelivr.net/npm/pushfeedback/dist/pushfeedback/pushfeedback.esm.js"></script>
    ```

1. Near the closing `</body>` tag, add the feedback button:

    ```html
    <feedback-button project="<YOUR_PROJECT_ID>" button-position="bottom-right" modal-position="bottom-right" button-style="dark">Feedback</feedback-button>
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [PushFeedback dashboard](../quickstart.md#2-create-a-project).

1. Save all changes to your master page and stylesheet.

1. Build your MadCap Flare project by going to **Project > Build Primary** (or the specific target you're using).

1. Once the build is complete, open the generated HTML output in a web browser to verify that the feedback button appears and functions correctly on every topic.

## Tips

- If you have multiple master pages, you'll need to add the feedback button to each master page where you want it to appear.
- You can customize the button's position and style by modifying the attributes in the `<feedback-button>` element.
- The feedback button will automatically appear on all pages that use the modified master page.

## Next steps

For more about customization and additional features exploration, check out the [Customization](/category/customization) section.

Need assistance? We're here to help! Reach out to us at [PushFeedback Support](https://pushfeedback.com/contact).

