# Agent Guidelines for Szegedi Keringő Website

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Code Style Guidelines

### Astro Components
- Use TypeScript interfaces for props (e.g., `interface Props { title: string; }`)
- Destructure props with defaults: `const { title, subtitle = "" } = Astro.props;`
- Frontmatter scripts use TypeScript, templates use Astro/HTML syntax

### TypeScript
- Strict TypeScript configuration (`astro/tsconfigs/strict`)
- Use const assertions and proper typing
- No semicolons in JavaScript/TypeScript code

### Styling
- Tailwind CSS with custom primary color palette
- Font stack: Inter (sans), Georgia (serif)
- Responsive design with mobile-first approach
- Use semantic class names and Tailwind utilities

### JavaScript
- Arrow functions preferred
- Template literals for string interpolation
- Client-side scripts in `<script>` tags for interactivity
- Proper event handling and DOM manipulation

### Content Management
- Content stored in `src/content.js` as nested objects
- Hungarian language content with structured organization
- Import content: `import { content } from '../content.js'`

### Accessibility
- Include proper ARIA attributes (`aria-expanded`, `sr-only`)
- Semantic HTML structure
- Keyboard navigation support

### File Organization
- Components in `src/components/` with .astro extension
- Pages in `src/pages/` with .astro extension
- Static assets in `public/` directory