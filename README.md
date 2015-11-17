# Financial Redux App

This project serves as a **simple** boilerplate to start building an financial application in React and Redux. Hign Frequency messeging via websockets.

<img src="http://g.recordit.co/bR2KXSbJUQ.gif" width="728" />

# Features

- Async server-side rendering
- Hot reloading middleware
- Redux DevTools and Logging
- Redux Routing
- Coinbase Websocket API integration
- Real-time Bitcoin pricing heartbeat chart
- Throttled connection with URL params

## Stack

- React.js
- Webpack
- Express
- Redux
- Babel
- D3

## Development Installation

In the project's directory, run the following commands:

```
$ npm install
$ npm start
```

Then Visit

```
http://localhost:3002/home/10
//10 is the throttle. 1 - 100 (1 being fastest)
```

## Releasing to Production

Production has Devtools, logging and hot reloading middleware removed and the scripts/css compressed. 

In the project's directory, run the following commands:

```
$ npm run build
$ npm run start-prod
```

Then Visit

```
http://localhost:3002/home/10
```

## Run Test
```
npm test
```

## Other Boilerplate code

[Portfolio Redux App](https://github.com/caljrimmer/portfolio-redux-app)
[Isomorphic Redux App](https://github.com/caljrimmer/isomorphic-redux-app)
