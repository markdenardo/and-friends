// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// m8 minimalism
// by MDN
// https://instagram/markdenardo

bpm = 1

// s0.initScreen()
s1.initVideo("https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWU4cWg5enhzajkxNXdoemF5czJveWRwejNxNHkxbjhxYWs3ZnZjaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fdd85RxytnbqU58hwP/giphy.mp4")

s2.initVideo("https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXlzc2ppNWdxY3VudnF6NGx4ODd1cW1mdWhodWZrcThnM283OW1kaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YZdNFzYZIEi0cCaSpn/giphy.mp4")

const f = () => a.fft[0]
const arr4 = [1, 2, 3, 4]
const arr3 = [1, 2, 3]
const arm = arr4.map(e => e * Math.random(Math.PI))

// src(s0)
// 	.scale(arm.ease('sin'))
// 	.diff(src(o0)
// 		.scale(0.9))
// 	.out(o0)
// render(o0)

src(s2)
	.repeat([1, 2, 3], [1, 2, 3, 4])
	.scrollX(.15)
	.diff(src(o1)
		.scale(.97))
	.out(o1)

render(o1)
