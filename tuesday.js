// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// m8 minimalism
// by MDN
// https://instagram/markdenardo

bpm = 1

// s0.initScreen()
s1.initVideo("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2lnaHl1c2hmNTg2aGt0YjI2ZGpqZmVuOGdrNXF0M21meWdmOWtuZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7QCNgngVZFLrclmqMb/giphy.mp4")

s2.initVideo("https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3FjazF5c3czeDRuc3E1MzdyczEyMmo5YW82eGJ5ajdsYmFrb20yOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/myS6lWkJ1XFOZXDC3l/giphy.mp4")

const f = () => a.fft[0]
const arr4 = [1, 2, 3, 4]
const arr3 = [1, 2, 3]
const arm = arr4.map(e => e * Math.random(Math.PI))

src(s0)
	.scale(arm.ease('sin'))
	.diff(src(s0)
		.scale(0.9))
	.out(o0)
render(o0)

src(s1)
	.scale(arm.ease('sin'))
	.diff(src(s1)
		.scale(0.9))
	.out(o1)
render()


src(s2)
	.repeat(arm, arr3)
	.diff(src(s2)
		.scale(0.9))
	.out(o2)
render()
