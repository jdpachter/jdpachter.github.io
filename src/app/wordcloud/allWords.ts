import { Word } from './word';

let WORD_STRINGS = new Map([
   ["AI ethics", "https://www.aaai.org/ocs/index.php/WS/AAAIW16/paper/view/12582/12346"],
   ["Biking", "https://www.youtube.com/watch?v=fYGPcfUqzL0"],
   ["Running", "https://www.strava.com/athletes/45011299"],
   ["Long walks", "https://thebolditalic.com/5-long-walks-to-really-get-to-know-san-francisco-3d65f82c0add"],
   ["Queer Theory", "https://www.jstor.org/stable/23611522?seq=1"],
   ["Existentialism", "https://en.m.wikipedia.org/wiki/Existence_precedes_essence"],
   ["Aesthetics", "https://en.wikipedia.org/wiki/Either/Or#Either"],
   ["Consciousness", "https://plato.stanford.edu/entries/zombies/#DoesConcEntaPoss"],
   ["Frank Ocean", "https://www.youtube.com/watch?v=atCvWBFbRsc"],
   ["Software ontology", "https://en.wikipedia.org/wiki/Chinese_room"],
   ["Photography", "https://lightroom.adobe.com/shares/662f2c34e04147b4bd8d56d95949db44"]
 ]);

export const WORDS: Word[] = makeWordsList();

function makeWordsList(): Word[] {
  var wordList: Word[] = []
  var idCount = 0;
  for(let key of WORD_STRINGS.keys()) {
    wordList.push({id: idCount, text: key, link: WORD_STRINGS.get(key)!});
    idCount++;
  }

  return wordList;
}
