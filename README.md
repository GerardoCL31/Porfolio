# Portfolio - Gerardo Corona López

Personal portfolio website built with React and Vite, showcasing selected web development projects.

## Requirements

- Node.js 16.0 or higher
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/GerardoCL31/Porfolio.git
cd Porfolio
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The server will be available at `http://localhost:5173/`

To access from another device (mobile):
```bash
npm run dev -- --host
```

## Build for Production

Generate the optimized version:
```bash
npm run build
```

Production-ready files will be generated in the `dist/` folder.

## Preview

To preview the compiled version before deploying:
```bash
npm run preview
```

## Deployment

### Option 1: one.com

1. Run `npm run build`
2. Upload the contents of the `dist/` folder to your hosting via FTP/SFTP
3. Make sure the files go to `public_html` or your domain's public folder

### Option 2: Vercel (Recommended)

1. Link the repository with [Vercel](https://vercel.com)
2. Vercel will automatically detect it's a Vite project
3. Automatic deployment on each push to `main`

### Option 3: GitHub Pages

1. Modify `vite.config.js` by adding `base: '/Porfolio/'`
2. Run `npm run build`
3. Upload to the `gh-pages` branch

## Available Scripts

| Command | Description |
|---------|------------|
| `npm run dev` | Start development server |
| `npm run build` | Generate production build |
| `npm run preview` | Preview the build |
| `npm run lint` | Check code with ESLint |

## Project Structure

```
Porfolio/
├── src/
│   ├── App.jsx          # Main component
│   ├── App.css          # App styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/
│   └── images/          # Public images
├── dist/                # Production build (generated)
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

## Customization

### Adding New Projects

Edit `src/App.jsx` and add an object to the `repos` array:

```javascript
{
  name: 'Project Name',
  description: 'Brief description',
  icon: 'Image URL',
  link: 'GitHub URL',
  demoLink: 'Demo URL (optional)'
}
```

### Changing Styles

- Global styles: `src/index.css`
- App styles: `src/App.css`

## Responsive Design

The site is optimized for:
- Desktop (1200px+)
- Tablet (640px - 960px)
- Mobile (< 640px)

## Troubleshooting

If you encounter issues, make sure to:

1. Have Node.js updated: `node --version`
2. Clear cache: `rm -rf node_modules && npm install`
3. Clear browser cache: `Ctrl+Shift+R` or `Cmd+Shift+R`

## License

This project is for personal use. All listed projects have their own repositories on GitHub.

## Author

Gerardo Corona López - [GitHub](https://github.com/GerardoCL31)

---

Questions? Open an issue on the repository.
