export class HttpError extends Error {
  constructor(message = "", status, data = null) {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.data = data;
  }
}
