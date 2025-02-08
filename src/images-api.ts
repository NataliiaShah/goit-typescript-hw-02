import axios from "axios";
interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
}

interface UnsplashResponse {
  results: Image[];
  total: number;
  total_pages: number;
}

axios.defaults.baseURL = `https://api.unsplash.com/`;
const ACCESS_KEY = `2N1SVW6p-h7zTwIX34mVl0ZMU6_-eMpnOii3YhNjMn0`;

export const getImagesUnplash = async <T>(
  searchImg: string,
  pageNumber: number
): Promise<T | undefined> => {
  const params: Record<string, string> = {
    query: searchImg,
    page: pageNumber.toString(),
    per_page: "10",
    client_id: ACCESS_KEY,
  };

  try {
    const response = await axios.get<UnsplashResponse>(
      `search/photos/?${new URLSearchParams(params).toString()}`
    );
    return response.data as T;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error occurred");
    }
  }
};