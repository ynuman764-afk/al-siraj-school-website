/**
 * ==============================================================================
 * EDIT THIS FILE TO UPDATE YOUR WEBSITE CONTENT.
 * ==============================================================================
 * 
 * AL-SIRAJ MODEL HIGH SCHOOL - FACULTY & ADMINISTRATION DIRECTORY
 * 
 * To add a new teacher, copy any item below, paste it, and edit the details.
 * To remove a teacher, simply delete or comment out their block.
 * 
 * ==============================================================================
 */

const FACULTY_DATA = [
  // --- Leadership & Administration ---
  {
    id: "fac-1",
    name: "Mr. Syed Mahmood Ahmed",
    designation: "Principal & Academic Director",
    department: "Administration",
    qualification: "M.Sc. Education, M.Phil Educational Leadership",
    experience: "25+ Years Experience",
    bio: "Guiding Al-Siraj Model High School with strategic educational leadership, curriculum development, and student moral counseling.",
    image: "images/faculty/principal.jpg",
    email: "principal@alsirajschool.edu.pk",
    isLeadership: true
  },
  {
    id: "fac-2",
    name: "Chaudhry Tariq Mehmood",
    designation: "Vice Principal (Boys Campus)",
    department: "Administration",
    qualification: "M.A. English Literature, B.Ed",
    experience: "18+ Years Experience",
    bio: "Supervising campus discipline, senior school academics, daily scheduling, and teacher professional training.",
    image: "images/faculty/principal.jpg",
    email: "vp@alsirajschool.edu.pk",
    isLeadership: true
  },
  {
    id: "fac-3",
    name: "Hafiz Muhammad Bilal",
    designation: "Head of Hifz-ul-Quran Department",
    department: "Islamic Studies",
    qualification: "Sanad Hifz-ul-Quran & Tajweed (Wifaq-ul-Madaris), M.A. Islamiyat",
    experience: "14+ Years Experience",
    bio: "Directing the specialized Quran memorization curriculum with certified Tajweed standards and student spiritual nurturing.",
    image: "images/faculty/principal.jpg",
    email: "hifz@alsirajschool.edu.pk",
    isLeadership: false
  },
  // --- Senior Science & IT Faculty ---
  {
    id: "fac-4",
    name: "Sir Muhammad Rizwan",
    designation: "Senior Physics Lecturer",
    department: "Sciences",
    qualification: "M.Sc. Applied Physics, B.Ed",
    experience: "12+ Years Experience",
    bio: "Specializing in Matriculation Physics concepts, numerical problem solving, and practical laboratory demonstrations.",
    image: "images/facilities/lab.jpg",
    email: "rizwan.physics@alsirajschool.edu.pk",
    isLeadership: false
  },
  {
    id: "fac-5",
    name: "Sir Usman Farooq",
    designation: "Head of Chemistry Department",
    department: "Sciences",
    qualification: "M.Sc. Chemistry, M.Phil Analytical Chemistry",
    experience: "11+ Years Experience",
    bio: "Expert in organic and inorganic chemistry experiments, board preparation, and interactive classroom teaching.",
    image: "images/facilities/lab.jpg",
    email: "usman.chem@alsirajschool.edu.pk",
    isLeadership: false
  },
  {
    id: "fac-6",
    name: "Sir Adeel Shahzad",
    designation: "Head of Computer Science & IT",
    department: "Computer Science",
    qualification: "BS Computer Science (BSCS), MS Software Engineering",
    experience: "9+ Years Experience",
    bio: "Overseeing the computer lab, foundational coding programs, student IT literacy, and digital learning tools.",
    image: "images/facilities/lab.jpg",
    email: "adeel.cs@alsirajschool.edu.pk",
    isLeadership: false
  },
  {
    id: "fac-7",
    name: "Sir Kamran Ashraf",
    designation: "Senior Mathematics Specialist",
    department: "Mathematics",
    qualification: "M.Sc. Mathematics, B.Ed",
    experience: "15+ Years Experience",
    bio: "Mentoring Middle and Matric students in algebraic concepts, geometry, trigonometry, and analytical speed.",
    image: "images/faculty/principal.jpg",
    email: "kamran.math@alsirajschool.edu.pk",
    isLeadership: false
  },
  {
    id: "fac-8",
    name: "Sir Zafar Iqbal",
    designation: "Senior English Language Faculty",
    department: "Languages",
    qualification: "M.A. English Linguistics, TEFL Certified",
    experience: "13+ Years Experience",
    bio: "Training students in spoken fluency, grammar fundamentals, essay composition, and annual debate competitions.",
    image: "images/faculty/principal.jpg",
    email: "zafar.eng@alsirajschool.edu.pk",
    isLeadership: false
  },
  {
    id: "fac-9",
    name: "Ustadh Imran Nazir",
    designation: "Senior Urdu & Pakistan Studies Teacher",
    department: "Social Studies",
    qualification: "M.A. Urdu Adab, M.A. History",
    experience: "16+ Years Experience",
    bio: "Fostering love for national literature, Iqbaliyat, historical perspective, and exemplary Urdu handwriting.",
    image: "images/faculty/principal.jpg",
    email: "imran.urdu@alsirajschool.edu.pk",
    isLeadership: false
  },
  {
    id: "fac-10",
    name: "Captain (Retd) Rashid Ali",
    designation: "Director of Physical Education & Sports",
    department: "Physical Education",
    qualification: "Diploma in Physical Education (Sports Sciences)",
    experience: "10+ Years Experience",
    bio: "Managing the 11-kanal sports grounds, daily morning assemblies, drill routines, and inter-school tournaments.",
    image: "images/facilities/sports.jpg",
    email: "sports@alsirajschool.edu.pk",
    isLeadership: false
  }
];

// Support export for module/bundler environments while keeping global browser compatibility
if (typeof module !== "undefined" && module.exports) {
  module.exports = FACULTY_DATA;
}
