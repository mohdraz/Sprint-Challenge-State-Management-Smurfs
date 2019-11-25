1. What problem does the context API help solve?

   context API makes it easier and more efficient to pass props from parent to child. especially when there a number of props needing to be passed down to different children.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   actions are pieces of code which triggers a change to the state
   reducers - when actions are triggered, it send instruction to reducers, which then updates the state accordingly

   store contains state, actions which is then being to used to connect with different compoents

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

   application state is global which is available to all the components within the application. componet state is local and only accessible to that particular component.

   if state requires to be used by multiple components, then it need to defines as application state

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

   redux-thunk is a middleware application that handles asynchronous operations. `action-creators` function returns another functions instead of an object

1) What is your favorite state management system you've learned and this sprint? Please explain why!

   my favorite is redux, as it allows to separates different pieces of codes and then allows to connect them all into one
