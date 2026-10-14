import { ApiErrorClass, isApiError } from "./api-error";

export async function serverFetch<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiErrorClass(
        errorData.message || "Request failed",
        response.status,
        errorData.code
      );
    }

    return response.json() as Promise<T>;
  } catch (error) {
    if (isApiError(error)) {
      throw error;
    }
    throw new ApiErrorClass(
      error instanceof Error ? error.message : "An unknown error occurred"
    );
  }
}
