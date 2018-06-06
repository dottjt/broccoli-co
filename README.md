# Broccoli & Co.

![Broccoli Homepage Screenshot](https://github.com/dottjt/broccoli-co/blob/master/homepage.png "Broccoli Homepage Screenshot")

# ONLINE

This project is available online for your convenience:

> https://broccoli-sdurjtgaem.now.sh

NOTE: The link may not work, as they tend to take them down after a period of time, but given it was created within the past few hours, it should be fine.  

# DESIGN CONSIDERATIONS

I decided to go with a vibrant gradient background to represent the brand of the website. I think it makes the website feel more organic and more like a native application, rather than a static backdrop of information.

The orange and pink are philosophically meant to represent the feeling of "fruit in the morning", which ties into this idea of healthy eating (aka broccoli). The problem is that green isn't a particularly appetising, nor necessarily appealing colour, which is why we need to use associated colours to try and convey Broccoli's brand message.

On another level, the orange coming in from top-right hand corner is also meant to represent the morning sun, casting a shadow over the thick animated bezel of the primary button, creating this kind of "tropical nirvana" on your computer screen.

I know, folks. 

It all sounds very wanky, but I think these are the reasons why the website feels complete. 

# UX TWEAKS

- Added a Recaptcha to the form.
- Added a close button to the popup form.

# PROBLEM AREAS

- The automated testing is lacking (and blatantly not present in some areas). This is one of my primary weak points that I would like to grow and be mentored on. 
- The CSS is not as neat as it could be, but I didn't really have the time to refactor and make things pretty. 

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
