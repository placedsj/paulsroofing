import { Hammer, Home, ShieldCheck, Wrench, Layout } from 'lucide-react';
import { NavItem, ServiceItem, TestimonialItem } from './types';

export const COMPANY_NAME = "Paul's Roofing";
export const PHONE_NUMBER = "(506) 271-4162";
export const EMAIL_ADDRESS = "paul@paulroofs.com";
export const ADDRESS = "Southern New Brunswick";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'About Paul', href: '#about' },
  { label: 'Reviews', href: '#testimonials' },
];

export const SERVICE_AREAS = [
  { name: "Quispamsis", coordinates: { lat: 45.4289, lng: -65.9456 } },
  { name: "Rothesay", coordinates: { lat: 45.3853, lng: -65.9972 } },
  { name: "Hampton", coordinates: { lat: 45.5262, lng: -65.8411 } },
  { name: "Grand Bay-Westfield", coordinates: { lat: 45.3461, lng: -66.2163 } },
  { name: "Saint John", coordinates: { lat: 45.2733, lng: -66.0633 } },
  { name: "St. Martins", coordinates: { lat: 45.3582, lng: -65.5342 } }
];

export const STATS = [
  { label: "Years Experience", value: "30+", icon: ShieldCheck },
  { label: "Roofs Installed", value: "500+", icon: Home },
  { label: "Satisfaction", value: "100%", icon: Hammer },
  { label: "Quality Grade", value: "A+", icon: Layout }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'metal',
    title: 'Metal Roofing',
    description: 'The ultimate in durability. Our metal roofs are energy-efficient, weather-resistant, and come in modern styles to enhance your home\'s curb appeal.',
    Icon: ShieldCheck,
    image: '/input_file_28.png',
    features: ["Energy Efficient", "Weather Resistant", "Maximum Longevity", "Modern Styles"]
  },
  {
    id: 'shingle',
    title: 'Shingle Roofing',
    description: 'A classic choice. We use high-grade architectural shingles that offer excellent protection and a wide range of colors to match your home.',
    Icon: Layout,
    image: '/input_file_24.png',
    features: ["Architectural Grade", "Versatile Design", "Superior Protection", "Diverse Colors"]
  },
  {
    id: 'flat',
    title: 'Flat Roofing',
    description: 'Specialized solutions for low-slope roofs. We install high-quality membrane systems that provide leak-proof protection.',
    Icon: Wrench,
    image: '/input_file_30.png',
    features: ["Leak-Proof Systems", "Membrane Technology", "Commercial Grade", "Superior Seal"]
  }
];

export const ROOF_COLORS = [
  { id: 'black', name: 'Estate Black', hex: '#1a1a1b', overlayOpacity: 0.85 },
  { id: 'charcoal', name: 'Charcoal Grey', hex: '#3d3d3f', overlayOpacity: 0.8 },
  { id: 'slate', name: 'Slate Blue', hex: '#4a5568', overlayOpacity: 0.75 },
  { id: 'brown', name: 'Barkwood Brown', hex: '#5c4033', overlayOpacity: 0.8 },
  { id: 'red', name: 'Barn Red', hex: '#7f1d1d', overlayOpacity: 0.7 },
  { id: 'green', name: 'Forest Green', hex: '#064e3b', overlayOpacity: 0.75 },
];

export const ROOF_MATERIALS = [
  { id: 'metal', name: 'Vicwest Metal' },
  { id: 'shingle', name: 'GAF Shingles' },
];

export const GALLERY_IMAGES = [
  '/input_file_21.png',
  '/input_file_22.png',
  '/input_file_23.png',
  '/input_file_24.png',
  '/input_file_27.png',
  '/input_file_28.png'
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Nancy Freeman',
    location: 'Quispamsis',
    quote: 'My new roof is fantastic! Honest and reliable service.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    id: '2',
    name: 'John Smith',
    location: 'Rothesay',
    quote: 'Transformed the look of our home entirely. Highly recommended!',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/84.jpg'
  },
  {
    id: '3',
    name: 'Sarah Riley',
    location: 'Hampton',
    quote: 'They don\'t just build roofs; they build relationships.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
];