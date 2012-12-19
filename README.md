imagebox-3d.js
==============

Allows you to create a "showcase" or "lightbox" with 3D animations using CSS3 and JavaScript.

## Terminology

First things first:  
You will find two phrases throughout this documentation:
* START state: The initial state - the image is fully displayed, like nothing ever happened
* END state: The animation that transforms the image is done. It doesn't need to be hidden, its just the end of your animation.

## How to use

To use imagebox-3d, you need to do the following:

1. Load the js/imagebox-3d.js along with jQuery
2. Load the csS/imagebox-3d.js stylesheet
3. Call imagebox3D(<selector>,<delay for start state>) and you're done.

You can use any valid jQuery selector. The delay is the number of milliseconds it stays in the START state.  
Checkout the simple.html in the examples folder for a basic demo.

## I want more fanciness! HOW?

You have much flexibility - you can for example set the delay to stay in END state 
or callbacks to do something when the START or END states are reached.  

You can, of course, also change the animations by modifying the imagebox-3d.css with your desired CSS animations.

See the flickr.html example for a more advanced application with imagebox3D.


## License

The boring stuff.
This lovely thing is licensed under the MIT license. Have fun!