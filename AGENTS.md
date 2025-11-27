# Agent Guidelines for Szegedi Keringő Website

## Build/Lint/Test Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- No linting or testing scripts configured (add ESLint/Prettier if needed)
- No test runner configured (consider Vitest for component testing)

## Code Style Guidelines

### Astro Components
- Use TypeScript interfaces for props: `interface Props { title: string; subtitle?: string }`
- Destructure props with defaults: `const { title, subtitle = "" } = Astro.props`
- Frontmatter scripts use TypeScript, templates use Astro/HTML syntax
- No semicolons in JavaScript/TypeScript code

### TypeScript
- Strict TypeScript configuration (`astro/tsconfigs/strict`)
- Use const assertions and proper typing
- Arrow functions preferred over function declarations
- Template literals for string interpolation

### Styling
- Tailwind CSS with custom primary color palette (brown/beige theme)
- Font stack: Inter (sans), Georgia (serif)
- Responsive design with mobile-first approach
- Dark mode support with `dark:` prefix
- Use semantic class names and Tailwind utilities

### Content Management
- Content stored in `src/content.js` as nested objects by language
- Hungarian language content with structured organization
- Import content: `import { content } from '../content.js'`

### Accessibility & Error Handling
- Include proper ARIA attributes (`aria-expanded`, `sr-only`)
- Semantic HTML structure with keyboard navigation support
- Graceful fallbacks for images (onerror handlers)
- Proper alt text for images

### File Organization
- Components in `src/components/` with .astro extension
- Pages in `src/pages/` with .astro extension (multi-language routing)
- Static assets in `public/` directory
- Content configuration in `src/content.js`