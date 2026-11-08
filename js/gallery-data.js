/**
 * ==============================================================================
 * EDIT THIS FILE TO UPDATE YOUR WEBSITE CONTENT.
 * ==============================================================================
 * 
 * AL-SIRAJ MODEL HIGH SCHOOL - GALLERY DATA
 * 
 * To add a new photo to your gallery:
 * 1. Place your photo inside the "images/gallery/" or "images/campus/" folder.
 * 2. Add an entry below with title, category, image path, and description.
 * 
 * Categories available:
 * - "campus"
 * - "classrooms"
 * - "academic"
 * - "sports"
 * - "events"
 * - "celebrations"
 * 
 * ==============================================================================
 */

const GALLERY_DATA = [
  {
    id: "gal-1",
    title: "11-Kanal Main Campus & Academic Block",
    category: "campus",
    image: "images/campus/hero.jpg",
    caption: "Front architectural view of Al-Siraj Model High School with green lawns and paved main avenue."
  },
  {
    id: "gal-2",
    title: "Advanced Science & Biology Workstations",
    category: "academic",
    image: "images/facilities/lab.jpg",
    caption: "Students conducting optical and chemical science practicals under faculty guidance."
  },
  {
    id: "gal-3",
    title: "Sprawling Campus Sports Fields & Running Track",
    category: "sports",
    image: "images/facilities/sports.jpg",
    caption: "Students participating in morning assembly and athletic drills across the 11-kanal grounds."
  },
  {
    id: "gal-4",
    title: "Modern Computer Laboratory & Coding Center",
    category: "classrooms",
    image: "images/facilities/lab.jpg",
    caption: "High-speed workstations equipped with modern educational and programming software."
  },
  {
    id: "gal-5",
    title: "Annual Sports Day & Cricket Championship",
    category: "sports",
    image: "images/facilities/sports.jpg",
    caption: "Vibrant inter-house matches fostering teamwork, sportsmanship, and physical vigor."
  },
  {
    id: "gal-6",
    title: "Academic Leadership & Faculty Meeting",
    category: "events",
    image: "images/faculty/principal.jpg",
    caption: "Principal and senior educators planning curriculum pacing and student development."
  },
  {
    id: "gal-7",
    title: "Morning Assembly & National Anthem Ceremony",
    category: "celebrations",
    image: "images/facilities/sports.jpg",
    caption: "Dignified daily assembly instilling discipline, patriotism, and moral thoughts."
  },
  {
    id: "gal-8",
    title: "Interactive Classroom Learning & Smart Boards",
    category: "classrooms",
    image: "images/campus/hero.jpg",
    caption: "Spacious, well-ventilated classrooms designed for engaged student discussion."
  },
  {
    id: "gal-9",
    title: "Pakistan Independence Day Celebrations (14th August)",
    category: "celebrations",
    image: "images/campus/hero.jpg",
    caption: "Patriotic tableau, national songs, and speech competitions presented by students."
  },
  {
    id: "gal-10",
    title: "Seerat-un-Nabi (PBUH) & Tajweed Recitations",
    category: "academic",
    image: "images/campus/hero.jpg",
    caption: "Students of Hifz-ul-Quran division presenting melodious recitation with Tajweed."
  },
  {
    id: "gal-11",
    title: "Annual Prize Distribution Ceremony",
    category: "events",
    image: "images/faculty/principal.jpg",
    caption: "Recognizing high achievers, position holders, and exemplary student leaders."
  },
  {
    id: "gal-12",
    title: "Campus Entrance & Administrative Reception",
    category: "campus",
    image: "images/campus/hero.jpg",
    caption: "Welcoming reception desk assisting prospective parents and visitors."
  }
];

// Support export for module/bundler environments while keeping global browser compatibility
if (typeof module !== "undefined" && module.exports) {
  module.exports = GALLERY_DATA;
}
