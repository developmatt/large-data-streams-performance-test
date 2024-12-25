import { createRandomUser } from "./generateRandomUser";

const INTERATIONS_LIMIT = 100;
export const AMOUNT_PER_ITERATION = 1000;

export function generateDataStream(): ReadableStream<number> {
  return new ReadableStream<any>({
    start(controller) {
      let counter = 0;

      function generate() {
        const dado = Array.from(
          { length: AMOUNT_PER_ITERATION },
          createRandomUser
        );
        controller.enqueue(JSON.stringify(dado));
        counter++;
        if (counter >= INTERATIONS_LIMIT) {
          controller.close();
        } else {
          setTimeout(generate, 10);
        }
      }

      generate();
    },
  });
}
