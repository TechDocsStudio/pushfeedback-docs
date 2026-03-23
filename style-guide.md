# Documentation Style Guide

## Voice and tone

- Be direct and task-focused. No marketing language, no filler ("Ready to get started?", "Congratulations!").
- Use present tense and active voice. Write "PushFeedback sends a notification" not "PushFeedback will send a notification".
- Address the reader as "you". Refer to the product as "PushFeedback".

## Structure

- **Start with context**: Landing pages and tutorials should open with one factual sentence about what the product (or feature) does — not a value proposition.
- **Explain before you instruct**: Add a one-sentence explanation of a concept before asking the reader to create or configure it (e.g., "A project groups your website URLs and controls where the feedback widget appears.").
- **Connect sections**: Use bridge sentences between tutorial steps so the page reads as a continuous flow, not isolated procedures (e.g., "Now that the widget is installed, verify that the feedback button appears on your site.").
- **Self-contained sections**: Don't abstract shared setup steps into a separate section. If two sections use the same snippet (e.g., a `<head>` import or `npm install`), duplicate it in both. Readers may land on one section directly via anchor link.
- **End with actionable next steps**: List all relevant paths forward with a one-line description and a direct link. Frame it as a decision ("Choose what to do next:").

## Formatting

- **Tables over nested bullet lists** when comparing items (integration options, plan differences, widget properties).
- **Tip/warning admonitions get descriptive titles** (e.g., `:::tip[Not seeing the widget?]` not just `:::tip`).
- **Meta descriptions**: One sentence, under 160 characters.
- **Headings**: Use numbered headings (`## 1. Create your account`) only in sequential tutorials. Use plain headings elsewhere.

## What to cut

- Redundant lead-in sentences ("Follow these steps to create a project:" before a heading that says "Create a project").
- Overly polite language ("Please allow a few minutes").
- Celebration copy ("Congratulations! You've successfully...").
- Vague filler ("providing the necessary details", "complete your account setup").
- Hand-holding terminal instructions ("Open your terminal or command prompt. Navigate to your project's root directory using the `cd` command").
- "With your terminal still open" and similar continuity filler.

## Grammar

- Use the Oxford comma (email, password, and company name).
- Clarify ambiguous UI references — if the user clicks two buttons, say "Click **Create**, then click **Done**" not "Click **Create** and **Done**".

## SEO

- **H1 titles are locked for SEO**. Installation page H1s (e.g., "Feedback widget for Docusaurus") are optimized for search rankings — do not change them. Use `sidebar_label` for clean sidebar navigation.
- **Don't add sections that weren't in the original**. Only edit existing content — don't invent new sections. New content requires explicit request.
- **Meta descriptions** should mention the feedback widget (e.g., "Add a feedback widget to your Docusaurus site with PushFeedback.").
