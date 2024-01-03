import { Emission } from './store/cbam'

export const fix = (howMany: number) => (n: number) =>
	Math.round(n * 10 ** howMany) / 10 ** howMany

export const fix3 = fix(3)

export const nanGuard = (a: number, b: number) =>
	b === 0 ? 0 : a / b

export const fixEmission = (em: Emission): Emission => ({
	direct: fix3(em.direct),
	indirect: fix3(em.indirect),
})

export const relu = (_: number) => Math.max(_, 0)

export const sum = (a: Array<number>) =>
	a.reduce((a, b) => a + b, 0)
