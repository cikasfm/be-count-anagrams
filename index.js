import { countAnagrams } from "./anagrams.js";

console.log(`Test results:`);

const testCases = [
  { text: "abc", word: "d", expected: 0 },
  { text: "abacadabda", word: "ab", expected: 3 },
  { text: "abacadabaadaab", word: "aba", expected: 4 },
  { text: "abcba", word: "abc", expected: 2 }
];

let out = "";

testCases.forEach(({ text, word, expected }, idx) => {
  const result = countAnagrams(text, word);
  const ok = result === expected;
  const log = ok ? console.log : console.error;

  log(`${ok ? "✔" : "✖"} Test ${idx + 1}: expected = ${expected}, actual = ${result}`);
});