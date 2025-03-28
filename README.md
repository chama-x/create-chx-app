# CHX React Template

A flexible, developer-friendly React template with modern UI components, animations, and TypeScript support.

## Features

- 🔄 Modern React with TypeScript
- ⚡ Vite for fast development and building
- 🎨 TailwindCSS for styling
- 📊 React Query for data fetching
- 🧩 Zustand for state management
- 📝 React Hook Form with Zod validation
- 🧪 Vitest for testing
- 📱 PWA support
- 🔍 TypeScript strict mode
- 🛠️ ESLint and Prettier for code quality

## Getting Started

### Installation

Due to some package dependency conflicts with the latest versions of ESLint and TypeScript, you need to use the `--legacy-peer-deps` flag when installing dependencies:

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

## Component Showcase

The template includes a component showcase page at `/components` where you can view and interact with all the available UI components.

## Project Structure

```
src/
├── assets/        # Static assets like images, fonts
├── components/    # Reusable UI components
│   ├── Examples/  # Example implementations
│   ├── Form/      # Form-related components
│   └── UI/        # UI components like Button, Card, etc.
├── contexts/      # React context providers
├── hooks/         # Custom React hooks
├── layouts/       # Page layouts and templates
├── pages/         # Route-based page components
├── services/      # API services and external integrations
├── stores/        # State management (Zustand stores)
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
```

## Notable Dependencies

- **React**: v18.3.1
- **React Router**: v6.22.1
- **TailwindCSS**: v3.4.1
- **React Query**: v5.17.19
- **Zustand**: v4.5.0
- **React Hook Form**: v7.50.1
- **Zod**: v3.22.4
- **Axios**: v1.6.7
- **Vitest**: v1.2.2
- **TypeScript**: v5.6.2

## License

MIT
