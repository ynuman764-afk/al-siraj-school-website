/**
 * ==============================================================================
 * EDIT THIS FILE TO UPDATE YOUR WEBSITE CONTENT.
 * ==============================================================================
 * 
 * AL-SIRAJ MODEL HIGH SCHOOL - SITE CONFIGURATION
 * 
 * You do NOT need to write programming code! Simply change the text inside
 * the quotation marks "..." below to update contact numbers, addresses, social
 * links, and school information across all 7 pages automatically.
 * 
 * ==============================================================================
 */

const SITE_CONFIG = {
  // --- 1. Basic School Identity ---
  schoolName: "AL-SIRAJ MODEL HIGH SCHOOL",
  schoolShortName: "Al-Siraj High School",
  campusTitle: "AL-SIRAJ MODEL BOYS HIGH SCHOOL, NEW CAMPUS",
  slogan: "A Bigger Campus • Better Learning • Brighter Future",
  quranVerseArabic: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
  quranVerseMeaning: "If you are grateful, I will surely increase you (in favor) - Surah Ibrahim (14:7)",
  logoPath: "images/logo/monogram.jpg",
  establishedYear: "2012",

  // --- 2. Campus & Capacity ---
  campusArea: "11 Kanal Purpose-Built Campus",
  locationName: "Shahbazpur Road, Pakistan",
  fullAddress: "Al-Siraj Model High School, Shahbazpur Road, Punjab, Pakistan",
  googleMapsQuery: "Shahbazpur Road Pakistan",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108842.12435012586!2d74.1500000!3d31.5200000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMxJzEyLjAiTiA3NMKwMDknMDAuMCJF!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s",

  // --- 3. Contact Numbers & Digital Reach ---
  // (Change these to your real SIM or PTCL numbers)
  phonePrimary: "+92 300 1234567",
  phoneSecondary: "+92 301 7654321",
  whatsappNumber: "+92 300 1234567",
  whatsappMessage: "Hello! I would like to inquire about admissions at Al-Siraj Model High School.",
  emailPrimary: "info@alsirajschool.edu.pk",
  emailAdmissions: "admissions@alsirajschool.edu.pk",

  // --- 4. School Office Timings ---
  officeHoursWeekdays: "Monday – Thursday: 7:45 AM – 2:00 PM",
  officeHoursFriday: "Friday: 7:45 AM – 12:30 PM",
  officeHoursSaturday: "Saturday: 8:00 AM – 1:00 PM (Admin only)",
  sundayStatus: "Closed",

  // --- 5. Current Admissions Announcement Banner ---
  admissionsStatus: "ADMISSIONS OPEN FOR SESSION 2026–2027",
  admissionsClassesOffered: "Play Group to 9th Class & Hifz-ul-Quran",
  admissionsDeadline: "Seats are limited. Early registration recommended.",

  // --- 6. Social Media Links ---
  socialLinks: {
    facebook: "https://facebook.com/alsirajmodelhighschool",
    youtube: "https://youtube.com/@alsirajschool",
    whatsapp: "https://wa.me/923001234567",
    instagram: "https://instagram.com/alsirajschool"
  },

  // --- 7. School Leadership ---
  principalName: "Mr. Syed Mahmood Ahmed",
  principalTitle: "Principal & Academic Director",
  principalQualification: "M.Sc. Education, M.Phil Educational Leadership (25+ Years Experience)",
  vicePrincipalName: "Chaudhry Tariq Mehmood",
  vicePrincipalTitle: "Vice Principal (Boys Campus)",

  // --- 8. School Statistics Counters ---
  statistics: [
    { label: "Enrolled Students", count: 1250, suffix: "+", icon: "bi-mortarboard-fill" },
    { label: "Qualified Teachers", count: 65, suffix: "+", icon: "bi-person-badge-fill" },
    { label: "Years of Excellence", count: 14, suffix: "+", icon: "bi-trophy-fill" },
    { label: "Campus Size", count: 11, suffix: " Kanal", icon: "bi-building-fill-check" }
  ]
};

// Support export for module/bundler environments while keeping global browser compatibility
if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONFIG;
}
