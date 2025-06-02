export const getErrorType = (err, filename) => {
  try {
    return {
      errorType: err.status === 404 ? "Not found" : "Server Error",
      msg:
        err.status === 404
          ? `No se han encontrado archivos con el filename: ${filename}.`
          : "Hubo un error en el lado del servidor",
      status: err.status || 500,
    };
  } catch (err) {
    throw err;
  }
};
