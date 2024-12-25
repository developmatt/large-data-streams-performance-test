# 🚀 Performance Test Project with Large Data Sets

Welcome to the **Performance Test with Large Data Sets** project! 🎉

This project was created to test ways to read and generate reports efficiently when working with large data sets. The idea is to simulate a database query with a very large number of responses and then check ways to handle this data without compromising the application's performance. 🚀

## 📋 Description

In this project, we create a function that simulates generating a continuous data stream. We use a simple HTTP server to consume and display this data in real-time. The goal is to explore different approaches to handling large volumes of data efficiently.

## 📂 Project Structure

- `src/generateDataStream.ts`: Contains the `generateDataStream` function that generates a stream of random data.
- `src/index.ts`: Sets up an HTTP server that consumes the generated data stream and displays the received values.
- `package.json`: Project configurations and development scripts.
- `tsconfig.json`: TypeScript configurations.

## 🚀 How to Run

1. Clone this repository:
   ```sh
   git clone https://github.com/developmatt/large-data-streams-performance-test

## Results so far
100 per iteration
{
  rss: '105.91 MB -> Resident Set Size - total memory allocated for the process execution',
  heapTotal: '24.17 MB -> total size of the allocated heap',
  heapUsed: '17.09 MB -> actual memory used during the execution',
  external: '4.06 MB -> V8 external memory'
}

1000 Memory Usage:
{
  rss: '157.85 MB -> Resident Set Size - total memory allocated for the process execution',
  heapTotal: '75.71 MB -> total size of the allocated heap',
  heapUsed: '40.38 MB -> actual memory used during the execution',
  external: '4.52 MB -> V8 external memory'
}

10000 per iteration
{
  rss: '196.24 MB -> Resident Set Size - total memory allocated for the process execution',
  heapTotal: '97.97 MB -> total size of the allocated heap',
  heapUsed: '46.95 MB -> actual memory used during the execution',
  external: '9.33 MB -> V8 external memory'
}
100000 per iteration
{
  rss: '318.61 MB -> Resident Set Size - total memory allocated for the process execution',
  heapTotal: '212.46 MB -> total size of the allocated heap',
  heapUsed: '192.33 MB -> actual memory used during the execution',
  external: '84.25 MB -> V8 external memory'
}

