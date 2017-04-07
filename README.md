# A test for zoo2
A tracking app

# Where I got.

Hi guys, so if you run this you will see I basically got nowhere, bad times. But I thought I would take the time and explain my stumbling blocks. I limited it to 90mins and well, that didn't go too well :p

So, a problem was getting the svg for the logos to work. I tried multiple versions but it seems most of them weren't es6 compatible. And then i feel. 

The truth is, I got so little done setting up everything that its difficult to even begin. But I had planned to break out all the small components as seen with the logo component. As for the responsive design I was planning to go with susy for the grid and start mobile first. This fits in nicely with css moudles. For the login modules in the router I would use `onEnter` passing a function that checks if the user is logged in or not. 
    
All the shared elements would sit in the shared folder, followed by the shared css sitting in the comp folder. 

Anyway, I doubt I have sold it very well here, but I stuck to the 90mins.

Cheers guys
  



#Getting started

Simply run `npm install`

* Once installed run `npm start`
* Navigate to `localhost:8080`
* See the project.

# Contributing
We are using Commitizen for our commits.

`npm install -g commitizen`

Init commitizen configuration

`commitizen init hutber-conventional-changelog --save-dev --save-exact`

## Useage

When making changes, add files then

`git cz`
