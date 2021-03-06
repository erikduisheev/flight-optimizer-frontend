# Flight-Optimizer-Frontend

## About the project

`Flight-Optimizer` is a service that searches for the cheapest flights based on price per kilometer criteria.

### Information about client-side

This is the front-end side of `Flight-Optimizer` project.

Front-end is deployed to the **AWS Amplify services**: https://deployment.dkbw81rcej2op.amplifyapp.com/

CD pipelines run from the `deployment` branch. If you want to run the project locally, then clone it and run from `master` branch.

CI / CD is managed by **AWS Amplify Console Web Preview** application, which is installed to this repository. In order to deploy to AWS Amplify create pull request to `deployment` branch. AWS Amplify Console Web Preview will run CI pipelines. If CI pipelines were passed, merge pull request and AWS Amplify Console Web Preview will run CD automatically and deploy to AWS Amplify services.

### Information about server-side

Django Server is deployed to **Heroku services**: https://flight-optimizer-server.herokuapp.com/

The source code of the server is [here](https://github.com/erikduisheev/flight-optimizer-server).

Build status of the server can be found [here](https://github.com/erikduisheev/flight-optimizer-server/actions).

### Information about CLI

Python package that provides CLI for searching these specific flights is published on **PYPI**: https://pypi.org/project/flight-optimizer/.

The source code of CLI package can be found [here](https://github.com/erikduisheev/flight-optimizer).

Build status of CLI package is [here](https://github.com/erikduisheev/flight-optimizer/actions).

### Credits

Inspired by [B12 Team](https://www.b12.io/about)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
