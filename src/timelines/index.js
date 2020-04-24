import { TimelineMax as Timeline } from 'gsap';

export const play = (pathname, node, appears) => {
  let delay = appears ? 0 : 1
  let timeline = new Timeline()

  timeline.from(node, 1, { delay, rotateY: '-90deg' })

  timeline.eventCallback("onStart", () => {
    node.classList.add('is-animating')
  })

  timeline.eventCallback("onComplete", () => {
    node.classList.remove('is-animating')
  })
  
  window
    .loadPromise
    .then(() => requestAnimationFrame(() => timeline.play()))
}

export const exit = (node) => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 1, { rotateY: '90deg' });

  timeline.eventCallback("onStart", () => {
    node.classList.add('is-animating')
  })

  timeline.eventCallback("onComplete", () => {
    node.classList.remove('is-animating')
  })
  timeline.play();
}
