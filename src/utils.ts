import * as fs from "node:fs";
import * as readline from "node:readline";
import { createReadStream } from 'fs';

export function writeResult(day: number, result: unknown) {
	fs.writeFileSync(`outputs/${day}.txt`, JSON.stringify(result), 'utf-8');
}

export function getLineStream(fileName: string) {
	const fileStream = createReadStream(fileName)
	return readline.createInterface({ input: fileStream, crlfDelay: Infinity })
}