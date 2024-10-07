import React from 'react';
import Footer from '@theme-original/DocItem/Footer';



function FeedbackWidget() {
  const buttonThumbsUp = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>;
  const buttonThumbsDown = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg>;
  // Replace with your <PROJECT_ID>
  const projectId = 'jfvzioa17q';

  return(
      <div className="feedback-widget margin-top--md margin-bottom--md">
          <div className="margin-bottom--sm">
              <b>Was this helpful?</b>
          </div>
          <span className="feedback-widget-positive">
              <feedback-button project={projectId} rating="1" custom-font="True" button-style="default" modal-position="center">
                <button className="button button--outline button--primary button--sm" title="Yes">
                    {buttonThumbsUp}
                </button>
              </feedback-button>
          </span>
          <span className="feedback-widget-negative margin-left--sm">
              <feedback-button project={projectId} rating="0" custom-font="True" button-style="default" modal-position="center">
                <button className="button button--outline button--primary button--sm" title="No">
                    {buttonThumbsDown}
                </button>
              </feedback-button>
          </span>
      </div>
  );
}

export default function FooterWrapper(props) {
  return (
    <>
    <biel-button 
        project="dl1kps0old"
        header-title="PushFeedback chatbot"
        button-position="bottom-right"
        modal-position="bottom-right"
        button-style="dark">
        Ask AI
      </biel-button>
      <FeedbackWidget/>
      <Footer {...props} />
    </>
  );
}
