# Abdul Aziz Permana - Premium Portfolio Website

A modern, professional portfolio website showcasing expertise in QA Automation, Backend Development, and Mobile Engineering.

## 🌟 Features

- ✨ **Modern Design**: Clean, minimalist, and professional aesthetic
- 🎨 **Dark Mode Support**: Seamless dark/light theme switching
- 📱 **Fully Responsive**: Perfect on all devices (mobile, tablet, desktop)
- ⚡ **High Performance**: Optimized for speed and SEO
- 🎬 **Smooth Animations**: Elegant Framer Motion transitions
- 🔍 **SEO Optimized**: Meta tags, Open Graph, and structured data
- ♿ **Accessibility**: WCAG compliant and keyboard navigable
- 🎯 **Interactive Elements**: Engaging hover effects and animations

## 🚀 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Shadcn UI

## 📋 Project Structure

```
app/
├── components/
│   ├── LoadingScreen.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── WhatIDo.tsx
│       ├── Experience.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Achievements.tsx
│       ├── Education.tsx
│       └── Contact.tsx
├── globals.css
├── layout.tsx
└── page.tsx
public/
├── images/
└── favicon.ico
tailwind.config.js
tsconfig.json
next.config.js
package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdulazizpermana/portfolio.git
   cd abdul-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your information
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open browser**
   Navigate to `http://localhost:3000`

## 📝 Customization Guide

### Update Personal Information

**Hero Section** (`app/components/sections/Hero.tsx`)
- Change name and title
- Update professional summary
- Modify tech badges

**About Section** (`app/components/sections/About.tsx`)
- Update stats and experience details
- Modify expertise highlights

**Experience Section** (`app/components/sections/Experience.tsx`)
- Add/remove job positions
- Update company names and dates
- Modify responsibilities and technologies

**Skills Section** (`app/components/sections/Skills.tsx`)
- Update skill categories
- Modify skill names and proficiency levels

**Projects Section** (`app/components/sections/Projects.tsx`)
- Add portfolio projects
- Update GitHub links and descriptions
- Add project images/icons

**Education Section** (`app/components/sections/Education.tsx`)
- Update degree names and dates
- Modify school names

**Contact Section** (`app/components/sections/Contact.tsx`)
- Update contact information
- Modify social links

### Styling Customization

**Colors** - Edit in `tailwind.config.js`:
```javascript
extend: {
  colors: {
    accent: 'hsl(217 91% 60%)', // Blue accent
    // Modify color values as needed
  }
}
```

**Typography** - Update font sizes and families:
```javascript
// In tailwind.config.js
fontSize: {
  // Customize sizes
}
```

**Animations** - Modify in `globals.css` and component files:
```css
@keyframes customAnimation {
  /* Define your animations */
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

- **Netlify**: Connect GitHub repo directly
- **Docker**: Use provided Dockerfile
- **Traditional Server**: Run `npm run build && npm run start`

## 🔧 Build & Production

```bash
# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 📊 Performance Optimization

- Image optimization with Next.js Image
- CSS minification via Tailwind
- JavaScript code splitting
- Lazy loading for sections
- Font optimization

## 🔐 Security

- No sensitive data in frontend
- HTTPS recommended for deployment
- Content Security Policy headers
- XSS and CSRF protection

## 📚 Resources & Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)

## 🤝 Contributing

Feel free to fork and customize this portfolio for your own use.

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

- **Email**: hi@abdulazizpermana.com
- **LinkedIn**: [Abdul Aziz Permana](https://linkedin.com/in/abdulazizpermana)
- **GitHub**: [@abdulazizpermana](https://github.com/abdulazizpermana)

## 🙏 Credits

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion.

---

**Last Updated**: 2025
