/**
 * 모든 시간 단위는 초 단위 입니다.
 * EaseOut의 함수들은 https://www.geeksforgeeks.org 의 fabric.js 에서 구현한 함수들을 사용했습니다.
 *
 * easeOutQuart는 https://www.geeksforgeeks.org/fabric-js-easeoutquart-method/?ref=gcse
 * easeOutExpo는 https://www.geeksforgeeks.org/fabric-js-easeoutExpo-method/?ref=gcse
 * 를 참고했습니다.
 *
 *
 */

export function easeOutQuart(
  elapsedTime: number,
  startValue: number,
  target: number,
  duration: number,
): number {
  return elapsedTime >= duration
    ? startValue + target
    : -target *
        ((elapsedTime = elapsedTime / duration - 1) *
          elapsedTime *
          elapsedTime *
          elapsedTime -
          1) +
        startValue
}

export function easeOutExpo(
  elapsedTime: number,
  startValue: number,
  target: number,
  duration: number,
): number {
  return elapsedTime >= duration
    ? startValue + target
    : target * (-Math.pow(2, (-10 * elapsedTime) / duration) + 1) + startValue
}
