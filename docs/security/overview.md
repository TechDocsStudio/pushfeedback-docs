---
sidebar_position: 1
sidebar_label: Overview
---

# Security overview

At PushFeedback, security is a core principle of our platform, designed to meet enterprise-level requirements with robust features that ensure data protection, compliance, and transparency.  

This document details how we protect sensitive information, enforce security controls, and comply with industry standards.

## Security framework

Our security approach is grounded in four key principles:  

1. **Confidentiality:** User and system data must remain protected from unauthorized access.  
2. **Integrity:** Data must be accurate and reliable, ensuring no unauthorized alterations.  
3. **Availability:** Security measures should not compromise the platform's accessibility or performance.  
4. **Compliance & trust:** Security is effective only when it aligns with regulations and builds trust with users.

These principles guide every decision, ensuring the platform remains secure and user data is safeguarded.

## Key security features

PushFeedback offers several **configurable security features** that allow users to customize protection based on their needs:

1. **Role-based authentication (RBAC):** Restricts admin panel access to authorized users, providing a segmented permission structure.

2. **Domain restrictions:** Each project has a unique Project ID to limit where the feedback widget can be embedded. Only authorized domains can interact with the widget, ensuring controlled and secure usage.

3. **reCAPTCHA v3 protection:** Optional Google reCAPTCHA v3 integration provides invisible bot detection and spam prevention. Learn how to [enable reCAPTCHA](recaptcha).

4. **Rate limiting:** To protect the system from abuse, rate limits are applied per user session and IP address. This helps prevent spam, DDoS attacks, and unauthorized interactions.

5. **Bearer authentication:** Enforces secure **Bearer Authentication** for all API communication between clients and servers, preventing unauthorized access to API resources.

6. **Granular API permissions:** Each API key can be scoped with specific permissions (e.g., `project_read`, `feedback_create`) to ensure principle of least privilege and provide fine-grained access control.

## Security architecture

Beyond configurable settings, PushFeedback **security architecture** delivers comprehensive protections at the data, network, and access layers:

1. **Network protection:** Firewalls, DDoS mitigation, and continuous monitoring help identify and mitigate threats. Logs capture security events and anomalies, providing real-time alerts and audit trails for proactive management.

2. **Data protection and resilience:** Sensitive data is encrypted both in transit and at rest. Regular automated backups ensure resilience, allowing for quick recovery in the event of failures or cyber incidents.

3. **Data integrity and auditability:** We maintain detailed audit logs of security-sensitive operations to prevent unauthorized modifications. This provides transparency and ensures accountability by tracking system interactions.

4. **Logical account separation:** Customer data is strictly isolated to ensure that each account remains separate, preventing unauthorized access and ensuring that resources are only available to the rightful owner.

5. **Regulatory compliance:** We adhere to **GDPR** to ensure user information is handled with transparency and in line with legal requirements.

By combining **user-configurable security features** with a **robust, enterprise-grade security architecture**, PushFeedback provides a multi-layered defense that ensures both flexibility and high standards of protection.

For more details on our data handling practices, see our [Privacy Policy](https://pushfeedback.com/privacy).
