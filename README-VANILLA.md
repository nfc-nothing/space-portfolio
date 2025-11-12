# Space Portfolio - Vanilla HTML/CSS/JS Version

This is a vanilla HTML, CSS, and JavaScript version of the space-themed portfolio website, converted from the original Next.js/React/TypeScript implementation.

## 🚀 Features

- ✨ **Pure HTML/CSS/JS** - No frameworks or build tools required
- 🎨 **Space Theme** - Beautiful animated star background
- 📱 **Fully Responsive** - Works on all devices (desktop, tablet, mobile)
- 🎭 **Smooth Animations** - CSS animations and transitions
- 🔗 **Smooth Scrolling** - Anchor-based navigation with smooth scroll
- 🎯 **Intersection Observer** - Elements animate on scroll
- 🍔 **Mobile Menu** - Responsive hamburger menu for mobile devices

## 📁 File Structure

```
space-portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript for interactivity
└── public/             # Static assets
    ├── logo.png
    ├── hero-bg.svg
    ├── lock-main.png
    ├── lock-top.png
    ├── favicon.ico
    ├── skills/         # Skill icons
    ├── projects/       # Project images
    └── videos/         # Background videos
```

## 🎯 Getting Started

### Prerequisites

No prerequisites needed! Just a modern web browser.

### Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/nfc-nothing/space-portfolio.git
   cd space-portfolio
   ```

2. **Open in browser**
   
   **Option 1: Direct file access**
   ```bash
   # Simply open the file in your browser
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

   **Option 2: Using a local server (recommended for videos)**
   ```bash
   # Python 3
   python3 -m http.server 8080
   
   # Python 2
   python -m SimpleHTTPServer 8080
   
   # Node.js (with http-server)
   npx http-server -p 8080
   ```

3. **Open in browser**
   ```
   http://localhost:8080
   ```

## 🎨 Features Breakdown

### Navigation
- Fixed navbar with logo and navigation links
- Social media icons (Instagram, Facebook, Twitter)
- Responsive hamburger menu for mobile devices
- Smooth scroll to sections on click

### Sections

#### Hero Section
- Animated welcome badge
- Gradient text effects
- Call-to-action button
- Hero image with SVG graphics
- Background video (blackhole.webm)

#### Skills Section
- Dynamic skill icons loaded via JavaScript
- Grid layout with responsive design
- Hover effects on skill items
- Background video (skills-bg.webm)

#### Encryption Section
- Interactive lock animation (hover effect)
- Background video (encryption-bg.webm)
- Centered content with gradient text

#### Projects Section
- Three project cards with images
- Hover effects with scale and shadow
- Direct links to project demos
- Responsive grid layout

#### Footer
- Three columns: Community, Social Media, About
- Social media links with SVG icons
- Dynamic copyright year
- Responsive layout

## 🎭 Animations

### CSS Animations
- **Star Background**: Infinite scrolling star field
- **Twinkle Effect**: Stars fade in and out randomly
- **Slide In Animations**: Elements slide in from different directions
- **Fade In**: Smooth opacity transitions
- **Hover Effects**: Scale and shadow transformations

### JavaScript Animations
- **Intersection Observer**: Elements animate when scrolled into view
- **Parallax Effect**: Hero video moves on scroll
- **Mobile Menu Toggle**: Smooth menu open/close
- **Dynamic Stars**: JavaScript-generated star field

## 🎨 Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --bg-primary: #030014;
    --purple-primary: rgb(112, 66, 248);
    --text-white: #ffffff;
    /* ... more variables */
}
```

### Content
Edit `index.html` to update:
- Personal name and title
- Project information
- Social media links
- Footer content

### Skills
Edit the `skillsData` array in `script.js`:
```javascript
const skillsData = [
    { name: 'HTML', image: 'html.png', width: 80, height: 80 },
    // ... add more skills
];
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Animations, flexbox, grid, custom properties
- **JavaScript (ES6+)** - DOM manipulation, Intersection Observer API
- **Google Fonts** - Inter and Cedarville Cursive fonts
- **SVG** - Icons and graphics

## 📝 Conversion Notes

This vanilla version was converted from the original Next.js implementation:

### Removed Dependencies
- ❌ Next.js
- ❌ React
- ❌ TypeScript
- ❌ Tailwind CSS
- ❌ Framer Motion
- ❌ Three.js (replaced with CSS star animation)
- ❌ React Icons (replaced with SVG)

### Replaced With
- ✅ Pure HTML/CSS/JS
- ✅ CSS animations (replacing Framer Motion)
- ✅ CSS star background (replacing Three.js)
- ✅ Inline SVG icons (replacing React Icons)
- ✅ Intersection Observer API (for scroll animations)

## 🚀 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select branch and folder
4. Your site will be live at `https://username.github.io/space-portfolio`

### Netlify
1. Drag and drop the folder to Netlify
2. Or connect your GitHub repository
3. Deploy automatically

### Vercel
1. Import your repository
2. Set build settings (none needed for static site)
3. Deploy

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🙏 Credits

- Original Next.js version by [Sanidhya Kumar Verma](https://github.com/sanidhyy)
- Converted to vanilla HTML/CSS/JS for broader accessibility

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ using HTML, CSS, and JavaScript
