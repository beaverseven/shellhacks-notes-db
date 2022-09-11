import pdfParse from "pdf-parse";

//take in an array of strings
//return true if the notes contain all
export function textContains(text, word) {
  //is, the, contain
  if (!text.toLowerCase().includes(word.toLowerCase())) return false;
  return true;
}

export default async function pdfToText(src_url) {
  const textContent = await pdfParse(src_url).then((res) => res.text);

  return textContent;
}

// await pdfToText("./resume.pdf").then((res) => console.log(res));
