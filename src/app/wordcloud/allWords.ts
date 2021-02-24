import { Word } from './word';

let WORD_STRINGS = new Map([
   ["AI ethics", "https://www.aaai.org/ocs/index.php/WS/AAAIW16/paper/view/12582/12346"],
   ["biking", "https://www.youtube.com/watch?v=fYGPcfUqzL0"],
   ["running", "https://www.strava.com/athletes/45011299"],
   ["long walks", "https://thebolditalic.com/5-long-walks-to-really-get-to-know-san-francisco-3d65f82c0add"],
   ["queerness", "https://www.jstor.org/stable/23611522?seq=1"],
   ["existentialism", "https://en.m.wikipedia.org/wiki/Existence_precedes_essence"],
   ["aesthetics", "https://en.wikipedia.org/wiki/Either/Or#Either"],
   ["justice", "https://plato.stanford.edu/entries/plato-ethics-politics/#EthiPartOneWhatJust"],
   ["consciousness", "https://plato.stanford.edu/entries/zombies/#DoesConcEntaPoss"],
   ["phenomenology", "https://plato.stanford.edu/entries/husserl/#EpoPerNoeHylTimConPheRed"],
   ["Frank Ocean", "https://www.youtube.com/watch?v=atCvWBFbRsc"],
   ["belief", "https://plato.stanford.edu/entries/pragmatic-belief-god/#WilJamWilBelArg"],
   ["software ontology", "https://en.wikipedia.org/wiki/Chinese_room"],
   ["value", "https://plato.stanford.edu/entries/value-intrinsic-extrinsic/#TheSucThiIntValAll"]
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
