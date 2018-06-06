# Broccoli & Co.

![Broccoli Homepage Screenshot](https://github.com/dottjt/broccoli-co/blob/master/homepage.png "Broccoli Homepage Screenshot")

# ONLINE

This project is available online for your convenience:

> https://broccoli-pegpowhmdy.now.sh/

# DESIGN CONSIDERATIONS

I decided to go with a vibrantly colourful gradient background to represent the brand of the website. I think it makes the website feel more organic and more like a native application, rather than a static website.

The orange and pink are philosophically meant to represent the feeling of "fruit in the morning", which ties into this idea of healthy eating (aka broccoli). The problem is that green isn't a particularly appetising, nor necessarily appealing colour, which is why we need to use associated colours to try and convey Broccoli's brand message.

On another level, the orange coming in from top-right hand corner is also meant to represent the morning sun, casting the thick animated shadows of the main button, creating this kind of tropical nirvana on your computer screen.

I know. It all sounds very wanky. But I think these are the reasons why this design work. 

# UX TWEAKS

- Added a Recaptcha to the form (technically it doesn't actually validate anything, provided it requires server-side validation, but I added it none-the-less for completeness.)
- Added a close button to the popup form.  

# SETUP

This application was built using Create React App. It utilises MobX for state management and Axios for making HTTP requests. It has been deployed online using Now.

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
