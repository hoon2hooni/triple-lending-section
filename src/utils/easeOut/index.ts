/**
 * 모든 시간 단위는 초 단위 입니다.
 */

export function easeOutQuart(
  currentTime: number,
  target: number,
  duration: number,
): number {
  return (
    -target *
    ((currentTime = currentTime / duration - 1) *
      currentTime *
      currentTime *
      currentTime -
      1)
  )
}

export function easeOutExpo(
  currentTime: number,
  startValue: number,
  target: number,
  duration: number,
): number {
  return currentTime >= duration
    ? startValue + target
    : target * (-Math.pow(2, (-10 * currentTime) / duration) + 1) + startValue
}
