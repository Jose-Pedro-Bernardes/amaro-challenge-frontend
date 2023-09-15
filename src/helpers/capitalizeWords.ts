import { nfd } from "unorm";

export function capitalizeWords(sentence: string) {
  const normalizedSentence = nfd(sentence);

  const words = normalizedSentence.split(" ");

  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    return word;
  });

  return capitalizedWords.join(" ");
}
