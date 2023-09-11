import { TextLinesReveal } from './textLinesReveal';
import gsap from 'gsap';
// gsap.set('.loader_wrapper', { display: 'flex' });

const loaderTl = gsap.timeline({
  onComplete: () => {
    gsap.set('.loader_wrapper', { display: 'none' });
    gsap.set('.line', { translateY: '100%' });
  },
});

loaderTl
  //   .to('.loader_progress-inner', {
  //     duration: 6,
  //     translateX: 0,
  //     ease: 'slow(0.7, 0.7, false)',
  //   })
  //   .to('.loader_progress-outer', { duration: 1, width: '100%' })
  //   .to('.loader_progress-outer', { duration: 1, height: '100%' })
  //   .set('.hero-header_wrapper', {
  //     opacity: '100%',
  //   })
  .add(() => {
    // Hide grid texts
    new TextLinesReveal(document.querySelectorAll('.header')).in();
    new TextLinesReveal(document.querySelectorAll('.paragraph')).in();
  }, '>')
  .to(
    '.hero-image_wrapper',
    {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      //   stagger: 0.1,
      ease: 'power4.easeInOut',
      delay: 0.5,
    },
    '>'
  );
console.log('wire');

//include HTML
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName('*');
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute('w3-include-html');
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = 'Page not found.';
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute('w3-include-html');
          includeHTML();
        }
      };
      xhttp.open('GET', file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
