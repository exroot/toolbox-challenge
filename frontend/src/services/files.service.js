import { HttpError } from "../utils/HTTPError";

const BASE_URL = "http://localhost:4000";

export const getAllFilesData = async (filter = "") => {
  try {
    const request = await fetch(`${BASE_URL}/files/data?filename=${filter}`);

    // Check if the response was successful (status code 200-299)
    if (!request.ok) {
      const errorData = await request.json(); // Attempt to parse error message from body
      throw new HttpError("", request.status, errorData);
    }

    const json = await request.json();

    return json;
  } catch (err) {
    throw err;
  }
};
