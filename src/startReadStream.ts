import { generateDataStream } from "./generateDataStream";
import fs from "fs";
import { renderMemoryUsage } from "./renderMemoryUsage";

export const startReadStream = async (req, res) => {
  const stream = generateDataStream();
  const reader = stream.getReader();

  async function readStream() {
    while (true) {
      const { value, done } = await reader.read();
      fs.appendFile("data.json", value?.toString() ?? "", (err) => {});
      if (done) break;
    }
  }
  await readStream();
  renderMemoryUsage();
  res.end();
};