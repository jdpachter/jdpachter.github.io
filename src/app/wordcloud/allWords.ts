import { Word } from './word';

let WORD_STRINGS = new Map([
   ["photography", ""],
   ["music", ""],
   ["the gr8 outdoors", ""],
   ["swimming", ""],
   ["sailing", ""],
   ["aviation", ""],
   ["AI", ""],
   ["ethics", ""],
   ["exploring", ""],
   ["travel", ""],
   ["biking", ""],
   ["running", ""],
   ["long walks", ""],
   ["queer theory", ""],
   ["existentialism", ""],
   ["aesthetics", ""],
   ["justice", ""],
   ["consciousness", ""],
   ["structuralism", ""],
   ["phenomenology", ""],
   ["falibilism", ""],
   ["Frank Ocean", ""],
   ["will", ""]
 ]);

export const WORDS: Word[] = makeWordsList();

function makeWordsList(): Word[] {
  var wordList: Word[] = []
  var idCount = 0;
  for(let key of WORD_STRINGS.keys()) {
    wordList.push({id: idCount, text: key, link: WORD_STRINGS[key]});
    idCount++;
  }

  return wordList;
}
