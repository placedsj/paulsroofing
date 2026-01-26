import { Hammer, Home, ShieldCheck, Umbrella, Wrench } from 'lucide-react';
import { NavItem, ServiceItem, TestimonialItem } from './types';

export const COMPANY_NAME = "Paul's Roofing";
export const PHONE_NUMBER = "(506) 271-4162";
export const EMAIL_ADDRESS = "quotes@paulsroofing.ca";
export const ADDRESS = "Quispamsis, New Brunswick";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About', href: '#about' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'installation',
    title: 'New Roof Installation',
    description: 'Specializing in GAF Timberline HDZ asphalt shingles and Vicwest steel roofing, our installations are engineered for the East Coast. We strip every roof to the deck to inspect for rot, install premium ice and water shields in valleys and eaves, and ensure proper attic ventilation to extend your roof\'s lifespan. Whether you choose the classic look of architectural shingles or the lifetime durability of standing seam metal, we guarantee a weather-tight finish.',
    Icon: Home,
    image: 'https://images.unsplash.com/photo-1632759902344-77e8a93910c6?q=80&w=800&auto=format&fit=crop',
    features: ["GAF & IKO Certified", "Ice & Water Shielding", "Proper Attic Ventilation", "50-Year Material Warranty"]
  },
  {
    id: 'repair',
    title: 'Roof Repair',
    description: 'Immediate solutions for wind-damaged shingles, leaking skylights, and deteriorated flashing. We address the root cause of leaks, not just the symptoms, using high-grade sealants and matching materials. From fixing ice dam damage in February to replacing blown-off shingles in September, our team restores the integrity of your roof to protect your home’s interior from water damage and mold.',
    Icon: Wrench,
    image: 'https://images.unsplash.com/photo-1629731636181-7f09322e6b26?q=80&w=800&auto=format&fit=crop',
    features: ["Storm Damage Specialist", "Leak Tracing Experts", "Flashing Replacement", "Emergency Tarping"]
  },
  {
    id: 'inspection',
    title: 'Roof Inspection',
    description: 'A proactive 21-point assessment covering every inch of your roofing system. We examine shingle condition for granular loss, check chimney step-flashing, verify gutter drainage, and inspect attic insulation for moisture. Ideal for new homebuyers or insurance documentation, our detailed reports provide clear photos of defects and honest recommendations for maintenance or replacement.',
    Icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1594950965706-538943f6797a?q=80&w=800&auto=format&fit=crop',
    features: ["21-Point Checklist", "Photo Documentation", "Insurance Assessments", "No-Obligation Quotes"]
  }
];

export const ROOF_COLORS = [
  { id: 'onyx', name: 'Onyx Black', hex: '#343434', overlayOpacity: 0.85 },
  { id: 'slate', name: 'Slate Grey', hex: '#565656', overlayOpacity: 0.75 },
  { id: 'brown', name: 'Driftwood', hex: '#5D4037', overlayOpacity: 0.8 },
  { id: 'red', name: 'Terra Cotta', hex: '#8D4038', overlayOpacity: 0.75 },
  { id: 'green', name: 'Forest Green', hex: '#2E4B38', overlayOpacity: 0.8 },
  { id: 'blue', name: 'Harbor Blue', hex: '#34495E', overlayOpacity: 0.8 }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'Quispamsis',
    quote: 'Paul’s team was incredible. They finished our metal roof in two days and left the yard spotless. Highly recommended!',
    rating: 5
  },
  {
    id: '2',
    name: 'Mike Doucette',
    location: 'Rothesay',
    quote: 'Best pricing I found in the Valley, but the quality didn’t suffer. The new architectural shingles look amazing.',
    rating: 5
  },
  {
    id: '3',
    name: 'Linda Cormier',
    location: 'Hampton',
    quote: 'We had a leak during that last big storm. Paul came out personally to patch it until the weather cleared for a full replacement.',
    rating: 5
  }
];

export const FAQ_ITEMS = [
  {
    question: "How long does a roof replacement typically take?",
    answer: "Most residential roof replacements in Quispamsis are completed within 1-2 days. Complex roof lines or larger commercial projects may take longer. We always ensure your property is watertight before leaving for the day."
  },
  {
    question: "Do you install roofs during the winter?",
    answer: "Yes, we operate year-round. While some materials like standard asphalt shingles require specific temperatures to seal immediately, we use specialized techniques and cold-weather materials to ensure a secure installation even in winter months."
  },
  {
    question: "What warranties do you offer?",
    answer: "We provide a 10-year workmanship warranty on all our installations. Additionally, the materials we use (like GAF or IKO shingles) come with manufacturer warranties ranging from 25 years to lifetime limited coverage."
  },
  {
    question: "How do I know if I need a repair or a full replacement?",
    answer: "Not every leak requires a new roof. During our free inspection, we'll assess the condition of your shingles, flashing, and roof deck. If the damage is localized and the roof is relatively young, a repair is often the most cost-effective solution."
  },
  {
    question: "Do you help with insurance claims?",
    answer: "Absolutely. We have extensive experience working with insurance adjusters for storm and wind damage claims. We can provide detailed assessments and photos to help support your claim."
  }
];