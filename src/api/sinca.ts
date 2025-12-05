import type { SincaApiResponse } from "../types/sinca";

const SINCA_API_URL = "https://sinca.mma.gob.cl/index.php/json/listadomapa2k19/";

async function fetchWithRetry(url: string, retries = 2, delay = 1000): Promise<Response> {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res;
  } catch (err) {
    if (retries <= 0) throw err;
    await new Promise((r) => setTimeout(r, delay));
    return fetchWithRetry(url, retries - 1, delay * 2);
  }
}

export async function fetchSincaData(): Promise<SincaApiResponse> {
  try {
    const response = await fetchWithRetry(SINCA_API_URL, 2, 1000);
    const data = await response.json();
    if (!Array.isArray(data)) {
      console.warn("fetchSincaData: unexpected payload, returning empty array");
      return [];
    }
    return data as SincaApiResponse;
  } catch (error) {
    console.error("Error fetching SINCA data:", error);
    throw error;
  }
}