# Image Gallery

A responsive image gallery built with **React, Vite, and Tailwind CSS**. It fetches photos from the Lorem Picsum API and displays them in a clean, paginated layout with smooth GSAP animations.

<p align="center">
  <a href="https://image-gallery-eta-nine.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-View%20Gallery-2ea44f?style=for-the-badge" alt="Live Demo">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/GSAP-Animations-88CE02?style=flat&logo=greensock&logoColor=black" alt="GSAP">
</p>

## Live Demo

**Explore the project:** [Image Gallery](https://image-gallery-eta-nine.vercel.app/)

**GitHub Repository:** [Image-Gallery](https://github.com/uttamchaudhary322-prog/Image-Gallery)

## About the Project

Image Gallery is a front-end web application designed to provide a simple and visually appealing way to explore photographs online.

The application retrieves images dynamically from the Lorem Picsum API and presents them in a responsive grid. It also includes pagination, animated elements, and mobile-friendly navigation to provide a smooth browsing experience across different screen sizes.

## Features

- **Responsive Design:** Adapts to desktop, tablet, and mobile screens.
- **Dynamic Image Loading:** Fetches photos from the Lorem Picsum API.
- **Pagination:** Displays 20 photos per page with previous and next navigation.
- **Photo Information:** Displays the available author information alongside images.
- **Image Links:** Opens the associated image or source page in a new tab.
- **Mobile Navigation:** Includes a collapsible navigation menu for smaller screens.
- **Animated Hero Section:** Features a typewriter-style title effect.
- **GSAP Animations:** Adds motion effects to the header, hero section, and gallery.
- **Loading Indicator:** Shows a loading state while photo data is being fetched.
- **Social Links:** Provides links to GitHub, LinkedIn, and Instagram.

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| Vite | Development server and production build tool |
| Tailwind CSS | Styling and responsive layouts |
| GSAP | Animations and visual effects |
| Axios | Making API requests |
| Lucide React | Icons |
| Lorem Picsum API | Providing photos and image metadata |

## Getting Started

Follow these instructions to run the project on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm, which is included with Node.js
- An internet connection to fetch images from the API

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/uttamchaudhary322-prog/Image-Gallery.git
```

**2. Navigate to the project directory**

```bash
cd Image-Gallery
```

**3. Install the dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Open the local URL displayed in your terminal. Vite typically uses:

```text
http://localhost:5173
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check the code |

## Project Structure

```text
Image-Gallery/
├── public/
│   └── Static assets
├── src/
│   ├── assets/
│   │   └── Images and other assets
│   ├── components/
│   │   ├── header.jsx
│   │   ├── hero.jsx
│   │   ├── gallery.jsx
│   │   └── gsap.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## API Integration

The project uses the [Lorem Picsum API](https://picsum.photos/) to retrieve photos.

The gallery uses the following endpoint:

```text
https://picsum.photos/v2/list?page={page}&limit=20
```

### API Parameters

- `page`: Specifies the page of photos to retrieve.
- `limit`: Specifies the number of photos returned per request. This project uses 20 photos per page.

The application requires an internet connection to retrieve photo data and load the images.

## Future Improvements

Possible enhancements for future versions include:

- Add image search and category-based filtering.
- Introduce a full-screen image preview.
- Implement direct image downloads.
- Improve API error handling and retry functionality.
- Add enhanced loading placeholders.
- Improve accessibility and keyboard navigation.

## Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository.
2. Create a new branch for your changes.
3. Commit your changes with a descriptive message.
4. Open a pull request explaining your improvements.

## License

No license has currently been specified for this repository. Please contact the repository owner regarding reuse or redistribution.

---

<p align="center">
  Built with React and a passion for web development.
</p>