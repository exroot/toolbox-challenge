const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(`App running at port: ${PORT}`);
});
