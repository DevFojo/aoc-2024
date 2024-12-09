import { getLineStream, writeResult } from "./utils";

const inputFileName = 'inputs/1.txt'

function parseLine(line: string): [number, number] {
	const [left, right] = line.split(/\s+/, 2).map(n => parseInt(n, 10))
	return [left, right];
}

const run = async () => {
	const lineStream = getLineStream(inputFileName);

	const left: number[] = [], right: number[] = [];
	for await (const line of lineStream) {
		const [l, r] = parseLine(line)
		left.push(l)
		right.push(r)
	}

	left.sort()
	right.sort()

	let totalDistance = 0;
	for (let i = 0; i < left.length; i++) {
		totalDistance += Math.abs(left[i] - right[i])
	}

	const frequencyRightMap = right.reduce((acc, cur) => {
		acc.set(cur, (acc.has(cur) ? acc.get(cur) + 1 : 1));
		return acc;
	}, new Map<number, number>())

	const similarityScore = left.reduce((acc, cur) => {
		if (frequencyRightMap.has(cur)) {
			acc += BigInt(cur) * BigInt(frequencyRightMap.get(cur))
		}
		return acc
	}, BigInt(0))
	writeResult(1, { totalDistance, similarityScore: similarityScore.toString() })
}

run()