export const API_BASE_URL = process.env.API_BASE_URL ?? "";

export const CRAB_SESSION_STORAGE = "crab-sess";

export async function fetchFromApi<T>(url: string): Promise<T> {
  const token = localStorage.getItem(CRAB_SESSION_STORAGE);
  const response = await fetch(`${API_BASE_URL}/${url}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("API Error");
  }
  return response.json();
}

export async function postToApi<I, O>(url: string, body: I): Promise<O> {
  const token = localStorage.getItem(CRAB_SESSION_STORAGE);
  const response = await fetch(`${API_BASE_URL}/${url}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("API Error");
  }
  return response.json();
}
