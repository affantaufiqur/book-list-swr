export const BASE_URL = "https://bookapi.cm.hmw.lol";

export function truncateText(text: string, maxLength: number = 30) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
}
