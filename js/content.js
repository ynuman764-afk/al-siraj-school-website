/**
 * ==============================================================================
 * EDIT THIS FILE TO UPDATE YOUR WEBSITE CONTENT.
 * ==============================================================================
 * 
 * AL-SIRAJ MODEL HIGH SCHOOL - WEBSITE CONTENT & DESCRIPTIONS
 * 
 * Update texts, paragraphs, programs, facility descriptions and values below.
 * All changes will reflect immediately on the corresponding pages.
 * 
 * ==============================================================================
 */

const SITE_CONTENT = {
  // --- Homepage Hero Content ---
  hero: {
    headline: "Building Bright Futures Through Quality Education",
    subheadline: "At AL-SIRAJ MODEL HIGH SCHOOL, we inspire young minds, build strong character and prepare students for a successful future in our modern 11-Kanal campus.",
    badgeText: "SESSION 2026–2027 ADMISSIONS OPEN",
    primaryButtonText: "Explore Our School",
    primaryButtonLink: "about.html",
    secondaryButtonText: "Apply for Admission",
    secondaryButtonLink: "admission.html",
    heroImage: "images/campus/hero.jpg",
    calloutText: "11 Kanal Modern Campus with State-of-the-Art Science & IT Labs"
  },

  // --- Welcome Section ---
  welcome: {
    title: "Welcome to AL-SIRAJ MODEL HIGH SCHOOL",
    subtitle: "A Beacon of Academic Excellence & Moral Uprightness in Pakistan",
    paragraph1: "AL-SIRAJ MODEL HIGH SCHOOL (Al-Siraj Model Boys High School, New Campus) stands as a landmark of educational progress on Shahbazpur Road. Spread across a sprawling 11-kanal purpose-built campus, our institution integrates rigorous scholastic standards with Islamic ethical values.",
    paragraph2: "We believe that true education enlightens the mind ('Al-Siraj' – The Illuminating Lamp) while grounding students in discipline, empathy, and intellectual curiosity. From Play Group through 9th Class and our prestigious Hifz-ul-Quran division, every student receives attentive, personalized mentoring in an atmosphere of warmth and high expectations.",
    bulletPoints: [
      "Modern 11-Kanal spacious campus with lush green lawns and sports fields.",
      "Dedicated Science, Robotics & IT Computer Laboratories.",
      "Synchronized Hifz-ul-Quran program with continuous academic curriculum.",
      "Experienced teachers committed to concept-based learning."
    ],
    ctaText: "Read More About Our Story",
    ctaLink: "about.html",
    image: "images/campus/hero.jpg"
  },

  // --- Why Choose Us (6 Core Pillars) ---
  whyChooseUs: [
    {
      id: "faculty",
      title: "Qualified & Experienced Faculty",
      description: "Subject specialists trained in modern pedagogy, child psychology, and board exam methodologies who mentor every pupil with care.",
      icon: "bi-award-fill"
    },
    {
      id: "environment",
      title: "Modern Learning Environment",
      description: "Well-ventilated, multimedia-equipped classrooms designed to foster focus, active participation, and creative problem-solving.",
      icon: "bi-buildings-fill"
    },
    {
      id: "character",
      title: "Character Building & Ethics",
      description: "Grounded in Islamic ethics, mutual respect, and civic responsibility under the timeless guidance of Quran and Sunnah.",
      icon: "bi-heart-pulse-fill"
    },
    {
      id: "attention",
      title: "Individual Student Attention",
      description: "Balanced teacher-to-student ratios with dedicated remedial sessions, individualized progress tracking, and weekly parent reviews.",
      icon: "bi-people-fill"
    },
    {
      id: "academics",
      title: "Academic Excellence",
      description: "Consistently outstanding board results, structured periodic assessments, and mastery of conceptual STEM sciences.",
      icon: "bi-journal-check"
    },
    {
      id: "facilities",
      title: "Modern 11-Kanal Campus",
      description: "Expansive sports grounds, advanced science laboratories, computerized library, and robust 24/7 security perimeter.",
      icon: "bi-shield-check"
    }
  ],

  // --- Academic Programs Offered ---
  academicPrograms: [
    {
      title: "Play Group & Kindergarten",
      ageGroup: "Ages 3 - 5 Years",
      summary: "Activity-based early childhood education combining sensorial phonics, motor skill development, and joyful moral stories in colorful, safe classrooms.",
      highlights: ["Phonics & Urdu Alphabet Mastery", "Montessori Activity Kits", "Social Skills & Etiquette"],
      badge: "Early Years"
    },
    {
      title: "Primary Classes (Grade 1 - 5)",
      ageGroup: "Ages 6 - 10 Years",
      summary: "Strong conceptual foundations in English, Mathematics, General Science, Urdu, and Islamiyat with emphasis on reading, cursive penmanship, and basic arithmetic.",
      highlights: ["Mental Math & Logic", "Bilingual Reading Programs", "Hands-on Discovery Tasks"],
      badge: "Primary Division"
    },
    {
      title: "Middle Classes (Grade 6 - 8)",
      ageGroup: "Ages 11 - 13 Years",
      summary: "Analytical skill reinforcement, laboratory-based science experiments, computer programming fundamentals, and structured debate/speech clubs.",
      highlights: ["Pre-Board Exam Orientation", "Introductory IT & Coding", "Sports & Co-curriculars"],
      badge: "Middle Division"
    },
    {
      title: "Pre-9th Class",
      ageGroup: "Class 8 Graduating Cohort",
      summary: "Specialized bridge curriculum designed to give students early exposure to Matriculation Science subjects, syllabus pacing, and numerical solving.",
      highlights: ["Early Matric Syllabus Coverage", "Physics & Chemistry Labs", "Weekly Diagnostic Tests"],
      badge: "Bridge Program"
    },
    {
      title: "9th Class (Matriculation)",
      ageGroup: "Science & Computer Science Groups",
      summary: "Rigorous Board of Intermediate & Secondary Education (BISE) exam preparation with past-paper workshops, weekly mock tests, and individual doubt-clearing.",
      highlights: ["BISE Exam Strategy", "Full Syllabus Revisions", "Extensive Practical Lab Work"],
      badge: "Board Prep"
    },
    {
      title: "Hifz-ul-Quran Department",
      ageGroup: "Parallel to Regular Grades",
      summary: "Revered Hifz program under certified Huffaz-e-Karam, featuring Tajweed-e-Quran, daily Nazra revisions, and parallel modern schooling so no academic year is lost.",
      highlights: ["Tajweed Rules Mastery", "Synchronized School Curriculum", "Spiritual & Character Mentoring"],
      badge: "Quranic Academy"
    }
  ],

  // --- Campus Facilities ---
  facilities: [
    {
      title: "Science Laboratories",
      description: "Dedicated Physics, Chemistry, and Biology workbenches stocked with modern glass apparatus, analytical balances, and safety gear for hands-on experimentation.",
      image: "images/facilities/lab.jpg",
      icon: "bi-flask"
    },
    {
      title: "Computer & IT Laboratory",
      description: "Modern desktop workstations with high-speed internet, coding tools, typing tutors, and educational multimedia software supervised by IT faculty.",
      image: "images/facilities/lab.jpg",
      icon: "bi-laptop"
    },
    {
      title: "11-Kanal Sports Grounds",
      description: "Spacious grass turf for cricket, football, volleyball, athletics, and regular physical training that keep students energized and physically resilient.",
      image: "images/facilities/sports.jpg",
      icon: "bi-trophy"
    },
    {
      title: "Well-Stocked School Library",
      description: "A tranquil reading sanctuary with classical Urdu literature, Islamic encyclopedias, children's reference books, and scientific journals.",
      image: "images/campus/hero.jpg",
      icon: "bi-book"
    },
    {
      title: "Smart Multimedia Classrooms",
      description: "Airy, illuminated classrooms with comfortable student benches, display boards, and audio-visual projection facilities for engaging lessons.",
      image: "images/campus/hero.jpg",
      icon: "bi-easel"
    },
    {
      title: "Safe & Monitored Campus",
      description: "Complete perimeter wall, CCTV monitoring across corridors and gates, trained security guards, and supervised student pick-and-drop zones.",
      image: "images/campus/hero.jpg",
      icon: "bi-shield-lock"
    }
  ],

  // --- Vision & Mission (About Page) ---
  vision: "To be recognized as a premier educational institution in Pakistan that nurtures intellectually accomplished, morally upright, and compassionate leaders capable of steering society towards wisdom, progress, and divine gratitude.",
  mission: "Our mission is to deliver comprehensive quality education on our modern 11-kanal campus by harmonizing academic excellence, scientific curiosity, and Islamic ethical values. We empower each student with critical thinking, moral steadfastness, and practical skills through attentive mentorship and world-class facilities.",
  philosophy: "We uphold the principle that knowledge without character is void, and character without gratitude lacks spirit. Our educational philosophy centers on nurturing the whole child — mind, heart, and body — in an atmosphere free of rote memorization, where students learn through inquiry, practice, and sincere effort.",
  values: [
    { name: "Shukr (Gratitude)", text: "Instilling heartfelt thankfulness to the Creator and parents in every achievement, as inspired by Surah Ibrahim (14:7)." },
    { name: "Academic Integrity", text: "Promoting genuine understanding, curiosity, and honesty in examinations and daily study." },
    { name: "Discipline & Adab", text: "Fostering noble manners, punctuality, and deep respect for teachers, elders, and peers." },
    { name: "Civic Leadership", text: "Training students to contribute constructively to our beloved homeland, Pakistan, and humanity at large." }
  ],

  // --- Principal's Message ---
  principalMessage: {
    greeting: "Bismillah-ir-Rahman-ir-Rahim. Assalam-o-Alaikum Warahmatullah,",
    paragraphs: [
      "It is my profound privilege to welcome you to AL-SIRAJ MODEL HIGH SCHOOL, Shahbazpur Road. Education is not merely the transmission of textbook facts; it is the ignition of an inner flame ('Al-Siraj') that illuminates a student's lifelong trajectory.",
      "Our boys' new campus, spanning 11 kanals of purpose-built infrastructure, represents our steadfast commitment to providing our youth with the very best physical and intellectual environment. Here, we do not compromise between modern scientific inquiry and our rich Islamic heritage. Both flourish hand-in-hand.",
      "As parents, you entrust us with your most precious treasure — your children. We hold this trust sacred. Our team of passionate educators works diligently every day to ensure that your child emerges as an accomplished scholar, a gentleman of impeccable character, and a beacon of hope for Pakistan.",
      "I invite you to visit our campus, witness our classes in session, and experience the Al-Siraj difference firsthand."
    ],
    signOff: "Warm regards,",
    author: "Mr. Syed Mahmood Ahmed",
    designation: "Principal & Academic Director",
    image: "images/faculty/principal.jpg"
  },

  // --- Sample Testimonials (Clearly labeled editable reviews) ---
  testimonials: [
    {
      parentName: "Mian Muhammad Afzal",
      relation: "Father of Class 9th Student (Hamza Afzal)",
      comment: "Enrolling my son at Al-Siraj Model High School was the best decision for his matriculation journey. The teachers are genuinely dedicated, and the 11-kanal campus provides the healthy sports and disciplined environment every boy needs.",
      rating: 5
    },
    {
      parentName: "Dr. Tariq Jamil",
      relation: "Parent of Grade 6 & 8 Students",
      comment: "What sets Al-Siraj apart is their unwavering emphasis on moral ethics alongside academic rigor. The science laboratories are fully equipped, and my children look forward to going to school every single morning.",
      rating: 5
    },
    {
      parentName: "Hafiz Abdul Rehman",
      relation: "Parent of Hifz-ul-Quran Student",
      comment: "The synchronized Hifz program is a true blessing. My son is memorizing the Holy Quran under expert Qaris while keeping up with his regular school syllabus without missing a single term exam.",
      rating: 5
    }
  ]
};

// Support export for module/bundler environments while keeping global browser compatibility
if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONTENT;
}
