# Broccoli & Co.

![Broccoli Homepage Screenshot](https://github.com/dottjt/broccoli-co/blob/master/homepage.png "Broccoli Homepage Screenshot")

# ONLINE

The project should be available, for your convenience:

> https://broccoli-pegpowhmdy.now.sh/

# SETUP

This application was built using Create React App. It utilises MobX for state management and Axios for making HTTP requests. It has been deployed using Now.

In order to setup this application, please go to the root folder of this repository and install all required dependencies:

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


# TWEAKS

- Added a Recaptcha to the form (technically it doesn't actually validate anything, because it requires server-side validation)
- Added a close button to the popup form. 
- Added my own design twists on the whole thing. 
