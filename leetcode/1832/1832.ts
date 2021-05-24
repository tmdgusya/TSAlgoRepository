const sentence: string = '"leetcode"';
const output: boolean = false;

//alphabet map 을 만들고, 모든 alphabet 이 만들어졌는지 확인한다.

function checkIfPangram(sentence: string): boolean {
  const isAlphabet = new RegExp("[a-z]");

  const map = new Map<string, number>();

  if (sentence.length < 26) {
    return false;
  }

  for (let i: number = 0; i <= sentence.length; i++) {
    const word: string = sentence.charAt(i);

    if (isAlphabet.test(word)) {
      map.set(word, 0);
    }
  }
  return map.size === 26;
}

console.log(checkIfPangram(sentence) === output);
