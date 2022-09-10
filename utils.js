//take in an array of strings
//return true if the notes contain all

export function textContains(text, word) {
  //is, the, contain
  if (!text.toLowerCase().includes(word.toLowerCase())) return false;
  return true;
}
