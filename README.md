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