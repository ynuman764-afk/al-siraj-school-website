/**
 * ==============================================================================
 * EDIT THIS FILE TO UPDATE YOUR WEBSITE CONTENT.
 * ==============================================================================
 * 
 * AL-SIRAJ MODEL HIGH SCHOOL - NEWS & EVENTS DATA
 * 
 * To add a new announcement or event, duplicate one of the objects below,
 * change the title, date, category and description.
 * 
 * Categories available: "Admissions", "Academic", "Sports", "Islamic", "Events"
 * 
 * ==============================================================================
 */

const NEWS_DATA = [
  {
    id: "news-1",
    title: "Admissions Open for Session 2026–2027 (Play Group to 9th & Hifz)",
    date: "November 2026",
    category: "Admissions",
    featured: true,
    image: "images/campus/hero.jpg",
    summary: "Registration forms are now available at the school admission counter and through our online admission portal for Play Group to 9th Class.",
    fullContent: "Al-Siraj Model High School (Boys New Campus, Shahbazpur Road) proudly invites prospective parents to register for the 2026–2027 academic session. Our 11-kanal modern campus offers state-of-the-art facilities, qualified subject mentors, and balanced Islamic education. Merit scholarships and sibling fee concessions are available. Prospective parents are invited to book a campus walk-through on weekdays between 8:30 AM and 1:30 PM."
  },
  {
    id: "news-2",
    title: "Annual Science Exhibition & Robotics Showcase 2026",
    date: "October 2026",
    category: "Academic",
    featured: true,
    image: "images/facilities/lab.jpg",
    summary: "Students from Middle and Secondary grades presented innovative working models in solar physics, automated water irrigation, and chemical reactions.",
    fullContent: "The school grounds echoed with scientific excitement as our young researchers demonstrated working models of hydro-electric generators, smart street lighting, and biology cell models. Chief Guest academic dignitaries praised the conceptual clarity and confidence of Al-Siraj students. First prize was awarded to Grade 9 students for their Solar-Powered Water Purification System."
  },
  {
    id: "news-3",
    title: "Inter-House Cricket Championship & Athletics Meet",
    date: "September 2026",
    category: "Sports",
    featured: true,
    image: "images/facilities/sports.jpg",
    summary: "Jinnah House clinched the champions trophy in thrilling finals held at our 11-kanal campus grounds witnessed by parents and teachers.",
    fullContent: "The annual sports week brought vibrant athletic spirit to the sprawling 11-kanal campus. Matches were held in cricket, football, 100m sprint, tug-of-war, and relay races. The Principal awarded medals and emphasized that physical fitness and sportsmanship are vital pillars of the Al-Siraj educational philosophy."
  },
  {
    id: "news-4",
    title: "Seerat-un-Nabi (PBUH) Conference & Husn-e-Qirat Contest",
    date: "August 2026",
    category: "Islamic",
    featured: false,
    image: "images/campus/hero.jpg",
    summary: "Students demonstrated melodious Tajweed recitations and delivered inspiring speeches on the noble character of Prophet Muhammad (PBUH).",
    fullContent: "Organized by the Hifz-ul-Quran Department, the conference welcomed parents and guests from across the region. Certificates of commendation and commemorative gifts were distributed among participants who memorized Surahs with accurate Makhaarij and Tajweed rules."
  },
  {
    id: "news-5",
    title: "Matriculation BISE Exam Orientation & Workshop for 9th Class",
    date: "July 2026",
    category: "Academic",
    featured: false,
    image: "images/facilities/lab.jpg",
    summary: "Senior examiners conducted a specialized seminar on paper presentation, time management, and board marking rubrics for Matric students.",
    fullContent: "To equip students with optimal examination strategy, senior Board resource persons conducted an intensive workshop. Students reviewed past five years solved papers, effective diagram labeling, and time management strategies for the upcoming BISE board examinations."
  },
  {
    id: "news-6",
    title: "Parent-Teacher Progress Meeting (PTM) & Mid-Term Reviews",
    date: "June 2026",
    category: "Events",
    featured: false,
    image: "images/campus/hero.jpg",
    summary: "Individual performance cards, attendance analytics, and constructive teacher feedback shared with parents in an organized session.",
    fullContent: "Al-Siraj hosted its term Parent-Teacher Meeting where parents engaged one-on-one with class mentors and subject specialists. Parents appreciated the transparent grading, disciplined environment, and remedial support provided to boost every student's learning trajectory."
  }
];

// Support export for module/bundler environments while keeping global browser compatibility
if (typeof module !== "undefined" && module.exports) {
  module.exports = NEWS_DATA;
}
