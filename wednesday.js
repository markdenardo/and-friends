// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// m8 minimalism
// by MDN
// https://instagram/markdenardo
bpm = 1

s0.initScreen()

const f = () => a.fft[0]
const arr4 = [1, 2, 3, 4]
const arr3 = [1, 2, 3]
const arm = arr4.map(e => e * Math.random(Math.PI))

src(s0)
	.scale(arm.ease('sin'))
	.diff(src(o0)
		.scale(0.9))
	.out(o0)
render(o0)

src(s0)
	.pixelate(50, 50)
	.out(o1)
render(o1)

src(o0)
	.scale(arm.ease('sin'))
	.diff(src(o0)
		.scale(0.9))
	.pixelate(50, 50)
	.out(o2)
render(o2)

src(o0)
	.blend(o1, f * 50)
	.blend(o2, f / 100)
	.out(o3)

render(o0)
