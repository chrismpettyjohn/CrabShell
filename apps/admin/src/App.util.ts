export function getFormattedDateTime(date: Date) {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  return `${month}/${day}/${year} ${hours}:${minutes}${ampm}`;
}

export function getMonthDateYear(date: Date): string {
  return date
    .toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-");
}

export function toLocalISOString(timestamp: number) {
  const date = new Date(timestamp * 1000);
  const offset = date.getTimezoneOffset() * 60000; // Adjust for timezone offset
  return new Date(date.getTime() - offset).toISOString().slice(0, 16);
}
