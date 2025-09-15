---
sidebar_position: 2
---

# Production checklist

Use this checklist to confirm that essential security measures are configured for optimal protection on the PushFeedback widget before going to production. Each item provides straightforward actions to help you secure data, control access, and maintain compliance.

## For widget integrations

:::info Widget Integrations Only
The following steps apply only to implementations using the **feedback widget**.
:::

- [ ] **Restrict allowed domains**: List only the domains authorized to host your feedback widget in  **Projects** > **Settings** > **Allowed domains**. This restricts embedding to approved sites, helping prevent unauthorized access.

- [ ] **Enable two-factor authentication (2FA)**: Navigate to **My Account** > **Profile** and enable 2FA for all accounts with access to the dashboard to enhance access security.

- [ ] **Configure data privacy (optional)**: Choose whether to display a custom terms and conditions modal in the footer. For more information, see [Layout customization](../customization/layout.mdx).


## For API integrations

:::info API Integrations Only
The following steps apply only to direct integrations using the **Enterprise API**. These steps are not necessary for widget-based implementations.
:::

- [ ] **Enable bearer authentication**: Ensure each API client request includes a bearer token in the header as follows: `Authorization: Api-Key <token>`.

- [ ] **Set up regular API keys rotation**: Establish a schedule for rotating API keys periodically to enhance security.

- [ ] **Verify token security**: Confirm that tokens are not publicly accessible (e.g., in repositories) and are shared only with authorized team members.

- [ ] **Use secure API key storage**: Store API keys in environment variables, encrypted configuration files, or dedicated secrets management systems (e.g., AWS Secrets Manager, Azure Key Vault, HashiCorp Vault). Never hardcode keys in your application code or commit them to version control.

- [ ] **Deactivate unused tokens**: Immediately disable any tokens that are no longer in use to prevent unauthorized access.

Completing this checklist ensures that your PushFeedback integration is secure, protecting data integrity and meeting compliance standards.
