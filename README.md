## Portfolio v2

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. This project showcases your skills, projects, certifications, and experience with smooth animations and a clean UI.

---

### 🚀 Features
- **Next.js 13** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for rapid UI development
- **Framer Motion** for animations
- **Dark/Light Theme** toggle
- **SEO optimized** (next-seo, sitemap)
- **Contact form** with email sending (Nodemailer)
- **Responsive** and mobile-friendly
- **Project, Skills, Certifications, Experience** sections

---

### 📁 Project Structure

```
src/
  components/      # UI components (about, projects, skills, etc.)
  data/            # Data files (projects, skills, certifications, etc.)
  hooks/           # Custom React hooks
  layout/          # Layout components (navbar, footer)
  pages/           # Next.js pages (about, projects, certifications, etc.)
  scripts/         # Utility scripts (e.g., sitemap generator)
  styles/          # Global and theme CSS
  utility/         # Utility functions (classNames, email, etc.)
public/            # Static assets (images, fonts, icons)
```

---

### 🛠️ Technologies Used
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Nodemailer](https://nodemailer.com/)
- [Prettier](https://prettier.io/) & [ESLint](https://eslint.org/)

---

### 📦 Scripts

- `pnpm dev` — Start development server
- `pnpm build` — Build for production
- `pnpm start` — Start production server
- `pnpm lint` — Run ESLint
- `pnpm format:check` — Check formatting
- `pnpm format:fix` — Auto-format code

---

### ⚡ Getting Started

1. **Install dependencies:**
	```sh
	pnpm install
	```
2. **Run the development server:**
	```sh
	pnpm dev
	```
3. Open [http://localhost:3000](http://localhost:3000) to view the site.

---

### 📝 Customization
- Update your info in `src/data/` (projects, skills, certifications, etc.)
- Customize components in `src/components/`
- Update site metadata in `src/data/siteMetaData.mjs`

---

### 📄 License
This project is licensed under the MIT License.
