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
    setTimeout(() => {
      document
        .querySelectorAll(' path,  line,  polyline')
        .forEach(p => tween(p));
      console.log(' path,  line,  polyline');
    }, 1000);
  })
  .to(
    '#ajaxContent',
    {
      opacity: 0,
      delay: 4,
      duration: 1.5,
    },
    '>'
  )
  .add(() => {
    // Hide grid texts
    new TextLinesReveal(document.querySelectorAll('.header')).in();
    new TextLinesReveal(document.querySelectorAll('.paragraph')).in();
  }, '5')
  .to(
    '.hero-image_wrapper',
    {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      //   stagger: 0.1,
      ease: 'power4.easeInOut',
      delay: 0.5,
    },
    '5'
  );
console.log('wire');

const tl = gsap.timeline({
  id: 'Timeline',
  // repeat: -1,
  repeatDelay: 1.5,
});

const colors = ['#FFFFFF', '#000000'];

function tween(node) {
  let path = node;
  const delay = Math.random() * 3;
  const length = path.getTotalLength();
  colors.forEach((color, index) => {
    if (index !== 0) {
      path = path.cloneNode();
      node.parentNode.appendChild(path);
    }
    path.setAttribute('stroke', color);

    tl.set(
      path,
      {
        strokeDasharray: length + 0.5,
        strokeDashoffset: length + 0.6,
        autoRound: false,
      },
      0
    );

    tl.to(
      path,
      {
        strokeDashoffset: 0,
        autoRound: false,
        duration: 1.2,
        // ease: "power3.out",
      },
      index * 0.25 + delay
    );
  });
}

document.querySelectorAll(' path,  line,  polyline').forEach(p => tween(p));
console.log(document.querySelectorAll('#ajaxContent')[0].children);
