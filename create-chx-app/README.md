# create-chx-app

![npm](https://img.shields.io/npm/v/create-chx-app)
![npm](https://img.shields.io/npm/dm/create-chx-app)
![GitHub](https://img.shields.io/github/license/chama-x/create-chx-app)

A lightweight, developer-friendly React template with modern UI components, animations, and TypeScript support.

## Features

- 🚀 **Modern React Stack**: React 18.3, TypeScript 5.6, Vite 6
- ⚡ **Lightning Fast**: Optimized development experience
- 🎨 **Beautiful UI**: Ready-to-use UI components and animations
- 🛠️ **Zero Config**: Get started in seconds
- 📱 **Responsive**: Mobile-first design principles
- 🔄 **State Management**: Built-in Zustand integration
- 🔍 **Data Fetching**: React Query for powerful async state
- 🎭 **Form Handling**: React Hook Form with Zod validation
- 🧪 **Testing Ready**: Vitest and Testing Library setup
- 🎯 **TypeScript**: Full type safety
- 🌑 **Dark Mode**: Built-in dark mode support
- 🔍 **SEO Ready**: Document head management with Helmet

## Quick Start

```bash
# Create a new project
npx create-chx-app my-app

# Change to the project directory
cd my-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier

## Project Structure

```
my-app/
├── public/            # Static assets
├── src/
│   ├── assets/        # Images, fonts, etc.
│   ├── components/    # Reusable components
│   │   ├── ui/        # UI components
│   │   └── ...
│   ├── contexts/      # React contexts
│   ├── hooks/         # Custom hooks
│   ├── layouts/       # Layout components
│   ├── pages/         # Page components
│   ├── services/      # API services
│   ├── stores/        # Zustand stores
│   ├── types/         # TypeScript types
│   ├── utils/         # Utility functions
│   ├── App.tsx        # App component
│   ├── main.tsx       # Entry point
│   └── ...
├── .eslintrc.js       # ESLint configuration
├── index.html         # HTML template
├── package.json       # Project dependencies
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## UI Components

- Buttons (with variants)
- Cards (standard, floating, breathing)
- Form elements
- Navigation components
- Interactive animations
- And many more!

## Recent Updates

### v1.0.16 (2024-06-12)

- Fixed CSS animation references for better stability
- Improved animation behavior

### v1.0.15 (2024-06-11)

- Fixed CSS syntax errors in animations
- Enhanced startup reliability

### v1.0.14 (2024-06-10)

- Added missing dependencies for full functionality
- Fixed dependency conflicts

See [CHANGELOG.md](./CHANGELOG.md) for the full history of changes.

## License

MIT © [Chamath Thiwanka (@chama-x)](https://github.com/chama-x)
