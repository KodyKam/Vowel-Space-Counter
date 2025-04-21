// document.getElementById("vowel-count").addEventListener("click", () => {
//     const sentence = document.getElementById("sentence-input").value;
//     const vowels = sentence.match(/[aeiou]/gi);
//     const vowelCount = vowels ? vowels.length : 0; //any matches? then show the length (number of vowels)

//     document.getElementById("result").textContent = `There are ${vowelCount} vowels in your sentence.`;
// })

// document.getElementById("space-count").addEventListener("click", () => {
//     const sentence = document.getElementById("sentence-input").value;
//     const spaces = sentence.match(/ /g);
//     const spaceCount = spaces ? spaces.length : 0; //any matches? then show the length (number of vowels)

//     document.getElementById("result").textContent = `There are ${spaceCount} spaces in your sentence.`;
// })

const inputField = document.getElementById("sentence-input");
const result = document.getElementById("result");

inputField.addEventListener("input", () => {
  const sentence = inputField.value;

  const vowelMatches = sentence.match(/[aeiou]/gi);
  const spaceMatches = sentence.match(/ /g);

  const vowelCount = vowelMatches ? vowelMatches.length : 0;
  const spaceCount = spaceMatches ? spaceMatches.length : 0;

  result.textContent = `Vowels: ${vowelCount} | Spaces: ${spaceCount}`;
});

document.getElementById("vowel-count").addEventListener("click", () => {
    const sentence = inputField.value;
    const vowels = sentence.match(/[aeiou]/gi);
    const vowelCount = vowels ? vowels.length : 0;

    result.textContent = `There are ${vowelCount} vowels in your sentence.`;
})

document.getElementById("space-count").addEventListener("click", () => {
    const sentence = inputField.value;
    const spaces = sentence.match(/ /g);
    const spaceCount = spaces ? spaces.length : 0;

    result.textContent = `There are ${spaceCount} spaces in your sentence.`;
})