("use strict");
import bodymovin from "bodymovin";

const animData = {
  container: document.getElementById("bm"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "./data/star-comp.json",
};

const anim = lottie.loadAnimation(animData);

anim.addEventListener("DOMLoaded", function () {
  console.log(anim.renderer);
  console.log(anim.renderer.layers);
  console.log(anim.renderer);
  anim.play();
});
