import React, { useState } from 'react';
import Footer from '@theme-original/DocItem/Footer';

function FeedbackWidget() {
  const [selected, setSelected] = useState(null); // Track the selected button

  const buttonThumbsUp = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
    </svg>
  );
  
  const buttonThumbsDown = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
    </svg>
  );

  const projectId = 'wlkz1eomrs';

  const handleButtonClick = (rating) => {
    setSelected(rating);
  };

  return (
    <div className="feedback-widget margin-top--md margin-bottom--md">
      <span className="feedback-widget-label">Was this helpful?</span>
      <span className="feedback-widget-positive">
        <feedback-button
          project={projectId}
          rating="1"
          custom-font="True"
          button-style="default"
          modal-position="center"
          success-message="Your input helps us improve every day."
          submit="true"
        >
          <button
            className={`feedback-button ${selected === '1' ? 'selected' : ''}`}
            title="Yes"
            onClick={() => handleButtonClick('1')}
          >
            {buttonThumbsUp}
          </button>
        </feedback-button>
      </span>
      <span className="feedback-widget-negative">
        <feedback-button
          project={projectId}
          rating="0"
          custom-font="True"
          button-style="default"
          modal-position="center"
          success-message="Your input helps us improve every day."
          submit="true"
        >
          <button
            className={`feedback-button ${selected === '0' ? 'selected' : ''}`}
            title="No"
            onClick={() => handleButtonClick('0')}
          >
            {buttonThumbsDown}
          </button>
        </feedback-button>
      </span>

      <style>
        {`
          .feedback-widget {
            display: flex;
            align-items: center;
            gap: 0.25rem;
          }

          .feedback-widget-label {
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--ifm-heading-color);
            margin-right: 0.25rem;
          }

          .feedback-widget button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
            padding: 0;
            border: 1px solid var(--ifm-color-emphasis-300);
            color: var(--ifm-color-emphasis-600);
            background-color: transparent;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.15s, color 0.15s, border-color 0.15s;
          }

          .feedback-widget button svg {
            width: 16px;
            height: 16px;
          }

          .feedback-widget button:hover {
            background-color: rgba(0, 112, 244, 0.08);
            border-color: var(--ifm-color-primary);
            color: var(--ifm-color-primary);
          }

          .feedback-widget button.selected {
            background-color: rgba(0, 112, 244, 0.1);
            border-color: var(--ifm-color-primary);
            color: var(--ifm-color-primary);
          }
        `}
      </style>
    </div>
  );
}

export default function FooterWrapper(props) {
  return (
    <>
      <FeedbackWidget />
      <Footer {...props} />
    </>
  );
}
