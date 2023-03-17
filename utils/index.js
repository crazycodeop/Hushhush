export function shuffleArr(arr) {
	return arr
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);
}

export function getRandomInt(max) {
	const maxNum = max + 1;
	return Math.floor(Math.random() * maxNum);
}
