/**
 *
 * @param {Number}   progress Progress should be 0 - 1
 * @param {Number}   from     Start animated number
 * @param {Number}   to       End animated number
 * @param {Number}   delay    Delay of animate
 * @param {Number}   advance  Advance of animate
 * @param {Function} easing   Easing function
 * @returns {Number}
 */
export default (progress, from = 0, to = 1, delay = 0, advance = 0, easing) => {
  if (progress <= delay) progress = 0;
  else if (progress >= (1 - advance)) progress = 1;
  else progress = (progress - delay) / (1 - delay - advance);

  if (typeof easing === 'function') {
    progress = easing(progress);
  }

  return (1 - progress) * from + progress * to;
};
