const blurbButton = document.querySelector(".blurbButton");
const altCoverButton = document.querySelector(".altCoverButton");
const container = document.querySelector(".book-container");
const lastWord =  document.querySelector(".lastWord");

console.log(blurbButton);
console.log(altCoverButton);

let originalBlurbValue = blurbButton.textContent;
let originalBtnValue = altCoverButton.textContent;

blurbButton.addEventListener('click', () => {
  if (container.classList.contains("blurb")) {
    container.classList.remove("blurb");
    blurbButton.textContent = originalBlurbValue;
  }
  else {
    container.classList.add("blurb");
    blurbButton.textContent = "Close";
  }
});



// altCoverButton.addEventListener('click', () => {
//   if (container.classList.contains("alternative")) {
//     container.classList.remove("alternative");
//     altCoverButton.textContent = originalBtnValue;
    
//     lastWord.style.textShadow = "var(--title-text-shadow)";
//   }
  
//   else {
//     container.classList.add("alternative");
//     altCoverButton.textContent = "View Original";
    
    
//     if(container.classList.contains("blurb")) { 
//       lastWord.style.textShadow = "unset"; 
//     }
//   }
// });

//bug as it never shows the text shadow again - Fixed!
//add transition and look into adding the borders - Done!
//add a transition for the button changing -Doesn't work properly
//change grid columns with the blurb class, and change the display of the back cover and spine with another property - Done!
// add the actual blurb! and check word spacing - Done!
// fix the image of the backCover - Decided to leave it at the bottom with overflow hidden to not interfere with the text
// fix the use of divs for the last word of the title - Done! Only had to change the display to inline-block!
// change the button positioning - Probably put them inside the container, but have them not change their color. They could be inside a second grid row - Done!
//fixed the line-height
//Perhaps make it responsive? - Done! Could be done better most likely
//first letter - Make it accesible, and work on firefox
//dark mode
//language toggle
//on load animation (put a comment after the book's display for a cool glitch)
//Change it from being too big when viewed on a laptop screen. Maxwidth fix? -Kind of done! Edit: Now done!
//Ligther text colour for the title to aid readability
//Improved the readability of the blurb by not altering the line-height for smaller screens
//Fix the border of the spine on Chrome
//Fix the animation for the blurb on Firefox - Done! *
//Change the margin of the buttons for lower screen sizes - Done!
//P.S. Why is the spine thinner on Firefox?**
//Nested the media query for phones inside the one for laptops, changing the container width there. Now the book is centered on all screen sizes.
//Fix the horizontal scroll bar on mobile - Done! *
//Consider the use of `toggle` when changing the covers
//If I wanted to animate the book opening, I could probably do it by changing the position of the back and spine
//Fixed the spine width on Firefox by adding a width to the spine, and then doing a calc by 0.7 instead of 0.8 for the smaller screens, as the alignment felt off otherwise.
//Fix the subtle layout shift when changing the cover designs
//open and close book with the arrow keys

// *All I had to do was set the grid-template-columns of the container to `none`.

// **Perhaps it could be due to the the margin of the last word. On chrome it actually changes the size of the container, unlike on firefox


//*TIP* large letter spacing can mess up justified text
//Using calc on line-height is not a good idea, as it is automatically calculated, if I am not mistaken. It otherwise makes the text hard to read, and changes the placing of the image. I used a unitless value, which might be the culprit.
