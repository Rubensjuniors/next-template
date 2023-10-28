function soma(a: number, b: number) {
  return a + b
}

describe('Função de Soma', () => {
  test('soma 1 + 2 é igual a 3', () => {
    expect(soma(1, 2)).toBe(3)
  })

  test('soma -1 + 2 é igual a 1', () => {
    expect(soma(-1, 2)).toBe(1)
  })

  test('soma 0 + 0 é igual a 0', () => {
    expect(soma(0, 0)).toBe(0)
  })
})