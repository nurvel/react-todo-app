

# TODO APP

This React Todo App is created to clarify the structure and functionalities between React / Redux / TypeSript. The branches have the same app created with different implementations.

## BRANCHES

| BRANCH                     | ABOUT |
| -------------------------- | ----- |
| master                     | same as ts-react-redux-observables |
| js-react                   | vanilla react - state in components, no typescript |
| js-react-redux             | state in redux |
| ts-react-redux             | implemented typesript |
| js-react-redux-hooks       | connect CHANGED to useSelector & dispatch as handle to state in components |
| ts-react-redux-observables | epics / rxjs / observables to manace async state + refactored component structure |

## FUNCTIONALITIES
- Save a todo item  (description, important(y/n))
- Manage todo-items
  - Toggle important (y/n)
  - Mark as done
  - Delete todo
- Filter the view
  - important / non-important
  - done / status open


## HOW TO RUN THE APP LOCALLY
Start the local json-server in other prompt and react app in other
```
npm install # first things first
npm run server # start json-server to port 3001
npm run start # start react app to port 3000
```



## Nice sources
s
How to use Typescript with Redux
https://www.youtube.com/watch?v=dZZxegovK9Q

Redux ja hooks - more simple way to get a handle to state ja action creators in components than connect
https://thoughtbot.com/blog/using-redux-with-react-hooks
