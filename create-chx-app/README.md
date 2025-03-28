<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=300&text=create-chx-app&color=0:6366F1,50:4F46E5,100:4338CA&fontColor=ffffff&fontSize=60&desc=Modern%20React%20Template%20Generator&descAlignY=65&animation=fadeIn">

<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Montserrat&weight=600&duration=4002&pause=1000&color=6366F1&width=435&separator=%3C&lines=React+%C3%97+TypeScript+%3D+Modern%20Development%3CI+don%E2%80%99t+just+create+templates;%3CI+elevate+development+experience.%3C%3CLet%E2%80%99s+create+beautiful+apps+together.+%E2%9C%A8" alt="Typing SVG" /></a>

  <p>
    <img src="https://img.shields.io/npm/v/create-chx-app?style=for-the-badge&color=6366F1" alt="npm version">
    <img src="https://img.shields.io/npm/dm/create-chx-app?style=for-the-badge&color=4F46E5" alt="npm downloads">
    <img src="https://img.shields.io/github/license/chama-x/create-chx-app?style=for-the-badge&color=4338CA" alt="license">
  </p>
</div>

A lightweight, developer-friendly React template with modern UI components, animations, and TypeScript support.

## ✨ Features

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

## 🚀 Quick Start

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

## 📝 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Lint code
- `npm run format` - Format code with Prettier

## 📁 Project Structure

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

## 🎨 UI Components

- **Buttons**: Standard, outline, glass, with variants
- **Cards**: Standard, floating, breathing, depth
- **Form Elements**: Inputs, selects, checkboxes, radios
- **Navigation**: Navbar, sidebar, tabs
- **Interactive Animations**: Hover effects, transitions, reveals
- **And many more!**

## 📦 Recent Updates

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

<div style="background: linear-gradient(45deg, #6366F1, #4338CA); padding: 3px; border-radius: 20px; margin: 30px 0; box-shadow: 0 4px 15px rgba(99, 102, 241, 0.2);">
    <div style="background: #1a1b27; padding: 30px; border-radius: 18px; border: 1px solid rgba(99, 102, 241, 0.1);">
        <div align="center">
            <p style="color: #ffffff; font-size: 16px; margin-bottom: 20px; text-shadow: 0 0 20px rgba(99, 102, 241, 0.3);">Let's create beautiful React apps together:</p>
            <a href="mailto:chama@cortana.lk" style="font-size: 20px; text-decoration: none; color: #6366F1; border-bottom: 1px dotted #6366F1;">chama@cortana.lk</a><br><br>
            <a href="https://www.linkedin.com/in/chamath-thiwanka/" style="font-size: 20px; text-decoration: none; color: #6366F1; border-bottom: 1px dotted #6366F1;">LinkedIn</a><br><br>
            <a href="https://twitter.com/chama_x" style="font-size: 20px; text-decoration: none; color: #6366F1; border-bottom: 1px dotted #6366F1;">Twitter</a><br>
        </div>
    </div>
</div>

## 📄 License

MIT © [Chamath Thiwanka (@chama-x)](https://github.com/chama-x)

## Repository Structure

This project is structured to separate the npm package from development files:

- **`create-chx-app/`**: Contains the npm package and template
- **Repository root**: Development environment for testing

See [STRUCTURE.md](./STRUCTURE.md) for detailed information about project organization.

## Deployment

### Netlify Deployment

The template directory is configured for deployment on Netlify. To deploy:

1. Connect your GitHub repository to Netlify
2. Set base directory to `create-chx-app/template`
3. The included `netlify.toml` will handle the build configuration

Demo: [https://create-chx-app.netlify.app](https://create-chx-app.netlify.app)
