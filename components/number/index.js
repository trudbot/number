import { applyStyles } from '../../utils/dom.js';
import numbers from './enum.js';
import {createClockElement} from '../clock/index.js'
import {random} from '../../utils/random.js'

export function createNumberElement({
  value = 0,
  width = "100%",
}) {
  const number = document.createElement('div');
  number.classList.add('__number_el');
  const numberStyles = {
    display: "flex",
    'flex-wrap': "wrap",
    width
  }
  applyStyles(number, numberStyles);

  const clockEls = [];
  numbers[value].forEach((d) => {
    const clockEl = createClockElement({
      width: `25%`,
      d1: d.d1,
      d2: d.d2,
      transitionDuration: random(0.3, 0.6)
    });
    clockEls.push(clockEl);
    number.append(clockEl.el);
  });

  function changeNumberValue(value) {
    numbers[value].forEach((d, i) => {
      clockEls[i].setPointerAngle(d.d1, d.d2);
    });
  }

  return {changeNumberValue, el: number};
}