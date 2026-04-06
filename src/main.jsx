import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/gsap.js'
import App from './App.jsx'

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

createRoot(document.getElementById('root')).render(<App />)
