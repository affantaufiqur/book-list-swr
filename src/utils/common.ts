export const BASE_URL = "https://bookapi.cm.hmw.lol";

export function truncateText(text: string, maxLength: number = 30) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + "...";
}

export async function getDataFromApi<T>(query: string): Promise<T> {
  try {
    const req = await fetch(`${BASE_URL}/api/${query}`);
    if (!req.ok) {
      throw new Error("error fetching data");
    }
    const data: T = await req.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  const day: string | number = date.getDate();
  const month: string | number = date.getMonth() + 1;
  const year: number = date.getFullYear();

  const formattedDay: string = day < 10 ? `0${day}` : `${day}`;
  const formattedMonth: string = month < 10 ? `0${month}` : `${month}`;

  return `${formattedDay}/${formattedMonth}/${year}`;
}
