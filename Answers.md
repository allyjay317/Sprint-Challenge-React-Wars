# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
React JS is a library that solves the problem of the DOM fully refreshing on any change, by introducing a virtual DOM comprised of Components that refresh piecemeal. Making the web experience just that much more snappy

1. Describe component state.
The ability for a React component to store and retrieve a set of data that is only changeable from a function

1. Describe props.
props are variables that can be passed to a component explicitly, in order to have actions in one component interact with other components

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
side effects are actions that are affecting anything outside of the function, such as logging, timers, and api calls. Basically anything that would be either in the global scope, or initializing async options. i.e. shadow layouts until load