import http from "http";
import { generateDataStream } from "./generateDataStream";

const PORT = 3000;

const startReadStream = async (req, res) => {
  const stream = generateDataStream();

  const reader = stream.getReader();

  async function consumirStream() {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      res.write(`Valor: ${value}\n`);
    }
  }

  await consumirStream();

  res.end();
};

const server = http.createServer(startReadStream);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
