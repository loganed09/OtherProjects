let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(" ");
//console.log(storyWords.length);

let betterWords = storyWords.filter(word => {
  return !unnecessaryWords.includes(word);
})

let overusedCount = betterWords.reduce((acc, val) => {
  if (val === overusedWords[0]) {
    acc++;
  } else if (val === overusedWords[1]){
    acc++;
  } else if (val === overusedWords[2]){
    acc++
  }
  return acc;
},0);

let unnecessaryWordCount = storyWords.reduce((acc, val) => {
  if (val === unnecessaryWords[0]) {
    acc++;
  } else if (val === unnecessaryWords[1]){
    acc++;
  } else if (val === unnecessaryWords[2]){
    acc++
  }
  return acc;
},0);

let sentences = 0;
betterWords.forEach(word => {
  if (word[word.length -1] === '.' || word[word.length -1] === '!'){
    sentences+=1;
  }
})

let finalMessage = () => {
  return `There are ${overusedCount} words overused in this essay.\nThe program also found ${unnecessaryWordCount} unnecessary words in the original essay. The program has removed these elements and created a better document. The new document has ${storyWords.length} words and ${sentences} sentences. Please view below: \n\n\n\n ${betterWords.join(' ')}`;
}

// console.log(betterWords.join(' '));

// console.log(overusedCount);
// console.log(unnecessaryWordCount);
// console.log(storyWords.length);
//console.log(sentences);

console.log(finalMessage());
