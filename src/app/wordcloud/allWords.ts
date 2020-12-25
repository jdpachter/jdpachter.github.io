import { Word } from './word';

 const WORD_STRINGS: string[] = [
  "photography", "music", "the gr8 outdoors", "swimming", "sailing",
  "aviation", "artificial intelligence", "ethics", "exploring", "travel",
  "biking", "running", "long walks", "being gay", "existentialism", "aesthetics",
  "justice", "consciousness", "structuralism", "phenomenology", "falibilism",
  "Frank Ocean","will"
];

export const WORDS: Word[] = makeWordsList();

function makeWordsList(): Word[] {
  var wordList: Word[] = []

  for(let w = 0; w <  WORD_STRINGS.length; w++) {
    wordList.push({id: w, text: WORD_STRINGS[w]});
  }
  
  return wordList;
}
