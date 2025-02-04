export const API_BASE_URL = process.env.API_BASE_URL ?? "";

export async function fetchFromApi<T>(url: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}/admin/${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("API Error");
  }
  return response.json();
}

export async function postToApi<I, O>(url: string, body: I): Promise<O> {
  const response = await fetch(`${API_BASE_URL}/${url}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("API Error");
  }
  return response.json();
}

export async function patchToApi<I, O>(url: string, body: I): Promise<O> {
  const response = await fetch(`${API_BASE_URL}/${url}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("API Error");
  }
  return response.json();
}

export async function deleteFromApi<I, O>(url: string): Promise<O> {
  const response = await fetch(`${API_BASE_URL}/${url}`, {
    method: "DELETE",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("API Error");
  }
  return response.json();
}
