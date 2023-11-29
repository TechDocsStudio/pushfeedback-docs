# Vue

This guide explains how to integrate the PushFeedback button into your Vue.js application.

## **Prerequisites**

- A Vue.js project set up (preferably using Vue CLI).
- Familiarity with Vue's component structure.
- Your PushFeedback project ID.

## **1. Install via NPM**

Navigate to your Vue project directory and run:

```npm install pushfeedback
```
## **2. Add PushFeedback to Your Component**

### **a. Import the Stylesheet**

In your main `App.vue` or any other global component, add the following to the `<style>` section:

```@import 'pushfeedback/dist/pushfeedback/pushfeedback.css';
```
### **b. Use the Component in Vue**

In the script section of the Vue component where you want to use the feedback button, import the PushFeedback module:

```<script>
import 'pushfeedback/dist/pushfeedback/pushfeedback.esm.js';

export default {
  name: 'YourComponentName',
  // other component properties...
}
</script>
```
### **c. Add the Feedback Button**

In the template section of your component, add:

```<feedback-button project="<YOUR_PROJECT_ID>">Send feedback</feedback-button>
```
Replace `<YOUR_PROJECT_ID>` with your actual PushFeedback project ID.

## **3. Build and Verify**

If you're using Vue CLI, run:

```npm run serve
```
Navigate to the local server URL (typically `http://localhost:8080/`) to verify the PushFeedback button appears and works correctly on your Vue application.

## **Final Thoughts**

Vue's flexibility and component-driven architecture make it relatively straightforward to integrate third-party modules like PushFeedback. By adding this feedback mechanism, you're enhancing user engagement and potentially gathering valuable insights.

