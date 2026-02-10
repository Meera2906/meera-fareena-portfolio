<div align="center">

# 🌟 Meera Fareena - Portfolio

<img src="https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React"/>
<img src="https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
<img src="https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind"/>

**A modern, interactive portfolio showcasing projects, skills, and professional journey**

<<<<<<< HEAD
[View Live Demo](https://meera-fareena-portfolio.vercel.app/) • [Report Bug](https://github.com/Meera2906/meera-fareena-portfolio/issues) • [Request Feature](https://github.com/Meera2906/meera-fareena-portfolio/issues)
=======
[View Live Demo]([#](https://meera-fareena-portfolio.vercel.app/)) • [Report Bug](#) • [Request Feature](#)
>>>>>>> dbbcb8882ca3e4129474aadb3d7790f903211862

</div>

---

## ✨ Features

- 🎨 **Modern UI/UX** - Sleek glassmorphism design with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎯 **Interactive Navigation** - Smooth tab-based navigation system
- 🌙 **Dark Theme** - Eye-friendly dark mode interface
- 🚀 **Project Showcase** - Dynamic carousel displaying featured projects
- 💼 **Professional Timeline** - Visual representation of work experience and education
- 🛠️ **Skills Matrix** - Organized display of technical and soft skills

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Meera2906/meera-fareena-portfolio.git
   cd meera-fareena-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Update `.env.local` with your Gemini API key:
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Add your profile picture**
   
   Place your image as `pfp.png` in the `public/` folder

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5173`

---

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy

Deploy to your preferred platform:
- **Vercel**: `vercel deploy`
- **Netlify**: Drag & drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` branch

---

## 🎨 Customization

### Update Personal Information

Edit `constants.tsx` to customize:

```typescript
export const PERSONAL_INFO = {
  name: "YOUR NAME",
  title: "Your Title",
  email: "your.email@example.com",
  // ... more fields
};
```

### Modify Projects

Add or edit projects in `constants.tsx`:

```typescript
export const PROJECTS: Project[] = [
  {
    title: "Project Name",
    period: "Date",
    description: ["Feature 1", "Feature 2"],
    tech: ["Tech1", "Tech2"],
    image: "image-url"
  }
];
```

### Change Theme Colors

Modify Tailwind classes in component files or extend `tailwind.config.js`

---

## 📁 Project Structure

```
meera-fareena-portfolio/
├── components/
│   ├── Navigation.tsx      # Top navigation bar
│   ├── Hero.tsx           # Landing section
│   ├── ProjectsCarousel.tsx # Projects showcase
│   ├── SkillsSection.tsx  # Skills display
│   ├── TimelineSection.tsx # Work & education timeline
│   └── Footer.tsx         # Footer component
├── public/
│   └── pfp.png           # Profile picture
├── constants.tsx         # All content data
├── types.ts             # TypeScript interfaces
├── App.tsx              # Main app component
├── index.tsx            # Entry point
├── .env.local           # Environment variables
└── package.json         # Dependencies
```

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, TypeScript |
| **Styling** | Tailwind CSS, Custom CSS |
| **Build Tool** | Vite |
| **AI Integration** | Google Gemini API |
| **Deployment** | Vercel / Netlify |

---

## 📸 Screenshots

<div align="center">

### Hero Section
*Modern landing page with animated elements*

### Projects Carousel
*Interactive showcase of featured projects*

### Skills & Timeline
*Professional experience and technical skills*

</div>

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📧 Contact

**Meera Fareena**

- 📧 Email: meerafareena2905@gmail.com
- 💼 LinkedIn: [meera-fareena-90007a330](https://linkedin.com/in/meera-fareena-90007a330)
- 🐙 GitHub: [@Meera2906](https://github.com/Meera2906)

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

Made with ❤️ by Meera Fareena

</div>
