# HootSim

CAD Simulation for HootCAD - Physics simulations for JSCAD objects using Ammo.js

## Overview

HootSim is a TypeScript library that provides solid body dynamics and physics simulation capabilities for JSCAD (JavaScript CAD) applications. Built on top of Ammo.js (a JavaScript port of the Bullet physics engine), HootSim enables realistic physics simulations of CAD objects.

## Installation

```bash
npm install hootsim
```

## Usage

```typescript
import { getVersion } from 'hootsim';

console.log(`HootSim version: ${getVersion()}`);
```

**Note:** The API for physics simulations is currently under development. This is the bootstrap version that establishes the foundation for future features.

## Development

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/owlprecision/HootSim.git
cd HootSim

# Install dependencies
npm install
```

### Build

```bash
npm run build
```

This compiles the TypeScript code to JavaScript in the `dist` directory.

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Linting

```bash
# Run ESLint
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

### Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm test` - Run tests with Jest
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run clean` - Remove build artifacts

## Technologies

- **TypeScript** - Type-safe JavaScript
- **Ammo.js** - JavaScript port of Bullet physics engine
- **Jest** - Testing framework
- **ESLint** - Code linting and quality

## License

MIT License - see [LICENSE](LICENSE) file for details

## Contributing

This project is currently in its bootstrap phase. API development will be added in future iterations.

