/**
 * ==============================================================================
 * AL-SIRAJ MODEL HIGH SCHOOL - FIREBASE CONFIGURATION
 * ==============================================================================
 * 
 * IMPORTANT INSTRUCTIONS FOR THE SCHOOL ADMINISTRATOR:
 * 
 * 1. Go to https://console.firebase.google.com/ and create a free project.
 * 2. Add a Web App (click the "</>" icon).
 * 3. Copy your project configuration object and paste the values into the
 *    firebaseConfig object below.
 * 4. Read "FIREBASE-SETUP-URDU.md" for step-by-step Urdu instructions.
 * 
 * NOTE: If you haven't created your Firebase project yet, the website and
 * Admin Dashboard will automatically run in "Demo & Local Mode", allowing you
 * to preview and test everything immediately!
 * ==============================================================================
 */

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "al-siraj-high-school.firebaseapp.com",
  projectId: "al-siraj-high-school",
  storageBucket: "al-siraj-high-school.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};

// Check if administrator has replaced the placeholder with real keys
function isFirebaseConfigured() {
  return Boolean(
    firebaseConfig &&
    firebaseConfig.apiKey &&
    firebaseConfig.apiKey !== "YOUR_API_KEY" &&
    firebaseConfig.projectId !== "al-siraj-high-school"
  );
}

// Global Firebase handles (initialized if real credentials exist)
var firebaseApp = null;
var firebaseAuth = null;
var firebaseDb = null;
var firebaseStorage = null;

if (typeof firebase !== "undefined" && isFirebaseConfigured()) {
  try {
    firebaseApp = firebase.initializeApp(firebaseConfig);
    firebaseAuth = firebase.auth();
    firebaseDb = firebase.firestore();
    firebaseStorage = firebase.storage();
    console.log("[Firebase] Successfully connected to live cloud project:", firebaseConfig.projectId);
  } catch (err) {
    console.warn("[Firebase] Initialization error, falling back to local mode:", err);
  }
} else {
  console.log("[Firebase] Operating in Demo / Local Fallback Mode. Real keys can be added in js/firebase-config.js.");
}
