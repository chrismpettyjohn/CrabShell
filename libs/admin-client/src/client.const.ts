import { CRAB_SESSION_STORAGE } from "@crabshell/public-client";

export const API_BASE_URL = `${process.env.API_BASE_URL ?? ""}/admin`;

export async function fetchFromApi<T>(url: string): Promise<T> {
  const token = localStorage.getItem(CRAB_SESSION_STORAGE);
  const response = await fetch(`${API_BASE_URL}/${url}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
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
  });
  if (!response.ok) {
    throw new Error("API Error");
  }
  return response.json();
}

export async function patchToApi<I, O>(url: string, body: I): Promise<O> {
  const token = localStorage.getItem(CRAB_SESSION_STORAGE);
  const response = await fetch(`${API_BASE_URL}/${url}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("API Error");
  }
  return response.json();
}

export async function deleteFromApi<I, O>(url: string): Promise<O> {
  const token = localStorage.getItem(CRAB_SESSION_STORAGE);
  const response = await fetch(`${API_BASE_URL}/${url}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("API Error");
  }
  return response.json();
}
