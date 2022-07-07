import { easeOutExpo, easeOutQuart } from '@utils/easeOut'

describe('easeOut 함수들 테스트', () => {
  test('easeOutExpo 경계값 테스트', () => {
    expect(easeOutExpo(0, 0, 1000, 5)).toBe(0)
    expect(easeOutExpo(5, 0, 1000, 5)).toBe(1000)
  })

  test('easeOutQuart 경계값 테스트', () => {
    expect(easeOutQuart(0, 0, 1000, 5)).toBe(0)
    expect(easeOutQuart(5, 0, 1000, 5)).toBe(1000)
  })
})
