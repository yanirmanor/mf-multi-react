# Module Federation Demo

This project demonstrates the use of Module Federation with three separate applications:

1. Host Application (React 16 with Webpack)
2. Remote Application 1 (React 16 with Repack)
3. Remote Application 2 (React 18 with Repack)

## Overview

This demo showcases how Module Federation can be used to dynamically load components from different applications, even when they use different versions of React or different bundlers.

### Applications

1. **Host Application**

   - Uses React 16
   - Bundled with Webpack
   - Acts as the main application that consumes federated modules

2. **Remote Application 1**

   - Uses React 16
   - Bundled with Repack
   - Exposes components to be used in the Host Application

3. **Remote Application 2**
   - Uses React 18
   - Bundled with Repack
   - Exposes components to be used in the Host Application

## Prerequisites

- Node.js (version 14 or later recommended) for repack node 16
- npm or yarn

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yanirmanor/mf-multi-react.git
   cd module-federation-demo
   ```

2. Install dependencies for each application:
   ```
   cd host && npm install
   cd ../remote1 && npm install
   cd ../remote2 && npm install
   ```

## Running the Demo

1. Start Remote Application 1:

   ```
   cd remote18
   npm start
   ```

2. Start Remote Application 2:

   ```
   cd remote
   npm start
   ```

3. Start the Host Application:

   ```
   cd host
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the Host Application.

## Project Structure

```
module-federation-demo/
├── host/
│   ├── src/
│   ├── webpack.config.js
│   └── package.json
├── remote18/
│   ├── src/
│   ├── repack.config.js
│   └── package.json
├── remote/
│   ├── src/
│   ├── repack.config.js
│   └── package.json
└── README.md
```

## Configuration

Each application has its own configuration file:

- Host Application: `webpack.config.js`
- Remote Application 1: `repack.config.js`
- Remote Application 2: `repack.config.js`

These files contain the Module Federation plugin configuration, defining which modules are exposed or consumed.

## Learn More

- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Repack](https://repack.netlify.app/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
