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
      <div className="margin-bottom--sm">
        <b>Was this helpful?</b>
      </div>
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
      <span className="feedback-widget-negative margin-left--sm">
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

      {/* Style Block for Button Hover */}
      <style>
        {`
          .feedback-widget button {
            transition: background-color 0.3s, color 0.3s, border-color 0.3s;
            border: 2px solid var(--feedback-primary-color);
            color: var(--feedback-primary-color);
            background-color: transparent;
            border-radius: 8px;
            padding: 8px 16px;
            cursor: pointer;
          }

          .feedback-widget button.selected {
            background-color: var(--feedback-primary-color);
            color: white;
            border-color: var(--feedback-primary-color);
          }

          .feedback-widget button:hover {
            background-color: var(--feedback-primary-color);
            color: white;
            border-color: var(--feedback-primary-color);
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
