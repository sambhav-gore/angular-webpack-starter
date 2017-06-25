## Starter Angular Application
Angular + Webpack + Karma + Firebase

This stater has basic setup for building angular app with webpack and unit tests inJasmine Karma

### Installing
1. Clone this repo
2. Run `$ npm install`
3. Run `$ typings install`

### Scripts

#### Test
```shell
$ npm run test
```

#### Build
```shell
$ npm run build
```

#### Dev Server
```shell
$ npm run server:dev
```

#### Deploy
Note: Enter Firebase app-id in .firebaserc file
```shell
$ npm run build

$ firebase deploy
```

This project gives you a starter, from this point you can import other required libraries for communicating with firebase backend (if required). Else if you wish only to use firebase hosting simply deploy the app.
