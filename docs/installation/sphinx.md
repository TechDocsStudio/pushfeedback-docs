---
sidebar_label: Sphinx
---

# Feedback widget for Sphinx

PushFeedback collects user feedback directly from your website. This guide covers installation in a Sphinx project using PIP.

![Feedback widget for docs screenshot](./images/feedback-widget-starlight.png)

## Prerequisites

Before you begin, you need:

- A PushFeedback account. If you don't have one, [sign up for free](https://app.pushfeedback.com/accounts/signup/).
- A project created in your PushFeedback dashboard. If you haven't created one yet, follow the steps in the [Quickstart](../quickstart.md#2-create-a-project) guide.
- A Sphinx project.

## Installation

1. Install the Sphinx extension:

    ```console
    pip install sphinx-pushfeedback
    ```

2. Add the extension to your Sphinx project's `conf.py` file:

    ```python
    extensions ['sphinx_pushfeedback']
    ```
3. Configure your project ID in the `conf.py` file:

    ```python
    pushfeedback_project = '<YOUR_PROJECT_ID>'
    pushfeedback_feedback_button_text = "Feedback"
    ```

    Replace `<YOUR_PROJECT_ID>` with your project's ID from the [PushFeedback dashboard](../quickstart.md#2-create-a-project).

4. Build the documentation:

    ```console
    make html
    ```

    Once built, open your documentation in a web browser. Verify that the feedback button appears and works correctly on your site.

## Customization

Add any [configuration](../customization/layout.mdx) option to your `conf.py` file, with the following modifications:

1. Prefix configuration options with `pushfeedback_`. For instance, `project` would be `pushfeedback_project`.

2. Use underscores instead of hyphens as words separator. For example, `button-position` becomes `pushfeedback_button_position`.

Here's an example:

```python
pushfeedback_button_style = "light"
```
