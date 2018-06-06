# Broccoli & Co.

![Broccoli Homepage Screenshot](https://github.com/dottjt/broccoli-co/blob/master/homepage.png "Broccoli Homepage Screenshot")


# SETUP

This application was built using Create React App. It utilises MobX for state management and Axios for making HTTP requests. 

In order to setup the application please the root of this repository and install all required dependencies:

```sh
git clone https://github.com/dottjt/broccoli-co.git
cd broccoli-co
yarn install
```


In order to run the application in development mode on port http://localhost:3000:

```sh
yarn start
```

In order to build the application and build static files for production: 

```sh
yarn build
```

In order to run automated tests please run:

```sh
yarn test
```


# Amends

- Decided to add a Recaptcha and a Close button to the popup form (technically the the recaptcha doesn't work, because it requires server-side validation, but added for the sake of completeness)
- Added my own wacky designs.
- 