# create-chx-app v1.0.11

## 🛠️ SVG Support for Vite 6

We've resolved the final compatibility issue to ensure perfect Vite 6 support:

- **Replaced vite-plugin-svgr**: The plugin was incompatible with Vite 6, showing version conflicts
- **Implemented a custom SVG loader**: Built a direct integration using @svgr/core for SVG support
- **Added proper Babel dependencies**: Ensured all necessary tools for SVG transformation are available

## 🔍 Technical Details

We've replaced the external plugin with a more robust internal implementation:

```js
// Custom SVG loader plugin
{
  name: 'vite-svg-loader',
  enforce: 'pre',
  async transform(code, id) {
    if (!id.endsWith('.svg')) return null
    
    // Read and transform SVG files to React components
    const svg = await fs.promises.readFile(id, 'utf8')
    const svgComponent = await svgr.transform(svg, {...options})
    
    return { code: svgComponent, map: null }
  }
}
```

## ⚡ Zero-Config Installation

With this final fix, you can now install the template with absolute confidence:

```bash
npm i
```

No errors, no warnings, no special flags required - it just works.

## 🚀 Usage

```bash
# Create your project
npx create-chx-app my-app-name

# Get started instantly
cd my-app-name
npm i
npm run dev
```

---

Built for developers by Chamath Thiwanka (@chama-x) 