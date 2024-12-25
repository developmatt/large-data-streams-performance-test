import http from "http";
import { startReadStream } from "./startReadStream";

const PORT = 3000;

const server = http.createServer(startReadStream);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
