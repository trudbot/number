import { applyStyles } from "../../utils/dom.js";

export function createClockElement({
  width = "100%",
  d1 = 0,
  d2 = 0,
  pointerThickness = 2,
  transitionDuration = 0.3
}) {
  const clock = document.createElement('div');
  const p1 = document.createElement('span');
  const p2 = document.createElement('span');

  clock.classList.add('__clock_el');
  p1.classList.add('__pointer_el', `__pointer_el_1`);
  p2.classList.add('__pointer_el', `__pointer_el_2`);

  // 指针基础样式
  const pointerStyles = {
    position: "absolute",
    width: "50%",
    height: `${pointerThickness}px`,
    left: "50%",
    top: `calc(50% - ${pointerThickness / 2}px)`,
    "transform-origin": "left center",
    transition: `transform ${transitionDuration}s`
  };
  applyStyles(p1, pointerStyles);
  applyStyles(p2, pointerStyles);

  const clockStyles = {
    position: "relative",
    width,
    'aspect-ratio': '1/1'
  }
  applyStyles(clock, clockStyles);
  clock.append(p1, p2);

  // 设置指针角度
  function setPointerAngle(d1, d2) {
    p1.style.transform = `rotate(${d1}deg)`;
    p2.style.transform = `rotate(${d2}deg)`;
  }
  setPointerAngle(d1, d2);

  return {
    el: clock,
    setPointerAngle
  }
}
