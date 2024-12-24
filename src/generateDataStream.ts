export function generateDataStream(): ReadableStream<number> {
  return new ReadableStream<number>({
    start(controller) {
      let counter = 0;
      
      function generate() {
        const dado = Math.floor(Math.random() * 100);
        controller.enqueue(dado);
        counter++;
        if (counter >= 10) {
          controller.close();
        } else {
          setTimeout(generate, 1000);
        }
      }

      //Start generate stream
      generate();
    }
  });
}
