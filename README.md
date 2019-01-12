## Redux
#### Redux Cycle:
* Action Creator
* Action
    * Action has Type & Payload
* Dispatch
* Reducers
* State

####
in Action, type is required and payload is optional

* named export allows to export many functions from a single file.  Place the `export` keyword in front of the function declaration.  Named exports have curly braces in the import statement.

* by convention, component names are capitalized


* [inverted header - semantic ui](https://react.semantic-ui.com/elements/header/#variations-inverted)
* [HomePageLayout on Github](https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/HomepageLayout.js)
* [REACT TRAINING / REACT ROUTER](https://reacttraining.com/react-router/web/example/basic)

##
```javascript
function connect() {
    return function() {
        return 'Hi there!'
    }
}
```
//call function connect
connect()

//call function that got returned and invoke it
connect()()

* state object is where all of the data is stored in the Redux store
* Redux does not automatically detect action creators being called.
* Redux does not automatically detect a function returning an object that is an 'action'.
* everytime you want to call an action creator from the connect you will pass it into the connect() function.  instead of calling it inside of the function method nested within the class component.

* instead of receiving the entire props object, we will destructure out just the properties that we care about:

```javascript
const SongDetail = props => {...}
//destructuring song property out of the Song object
const SongDetail = ({ song }) => {...}
```

* `selectedSong` piece of state inside of the Redux store starts off as null

* function called from the entire state object from redux:
```javascript
const mapStateToProps = (state) => {
    //return an object that has the property count and the value
    return { count: state.count }
}
```

* [jsonPlaceholder API](http://jsonplaceholder.typicode.com/)

### Redux Project Structure:
* /src
    * /actions - Contains files related to action creators
    * /components - Files related to components
    * /reducers - Files related to reducers
    * index.js - Sets up both react and redux sides of the app

## Webpack
* joins different files together



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
