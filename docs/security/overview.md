---
sidebar_position: 1
sidebar_label: Overview
---

# Security overview

PushFeedback is designed to meet enterprise security requirements for data protection, compliance, and transparency.

## Configurable security features

| Feature | Description |
|---------|-------------|
| Role-based access (RBAC) | Restricts dashboard access to authorized users with segmented permissions. |
| Domain restrictions | Limits which domains can embed the feedback widget. |
| reCAPTCHA v3 protection | Optional invisible bot detection and spam prevention. [Learn more](recaptcha). |
| Rate limiting | Per-session and per-IP limits to prevent spam and abuse. |
| Bearer authentication | Enforces API key authentication for all API requests. |
| Granular API permissions | Scope each API key to specific permissions (`project_read`, `feedback_create`). |

## Security architecture

| Layer | Protection |
|-------|------------|
| Network | Firewalls, DDoS mitigation, continuous monitoring, and real-time alerts. |
| Data encryption | Encrypted in transit and at rest. Automated backups for recovery. |
| Audit logs | Detailed logs of security-sensitive operations for accountability. |
| Account isolation | Customer data is strictly separated between accounts. |
| Model training opt-out | Customer data is never shared with third-party model training. |
| GDPR compliance | User data handled in line with European data protection regulations. |

## AI data handling

PushFeedback uses third-party AI providers to power optional features such as AI-generated feedback reports. The following safeguards are in place:

- **Opt-out of model training:** Your feedback data is never used to train or improve AI models.
- **Data sent on demand:** Feedback data is only sent to AI providers when an AI feature is actively used.
- **Admin control:** Team admins can disable all AI capabilities from Team settings. See [Opting out of AI reports](../administration/analytics#opting-out-of-ai-reports) for details.

For more information on the AI providers we use, see [Our providers](providers).

See the [Privacy Policy](https://pushfeedback.com/privacy) for details on data handling.
