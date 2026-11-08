/**
 * ==============================================================================
 * AL-SIRAJ MODEL HIGH SCHOOL - FIREBASE BACKEND SERVICE
 * ==============================================================================
 * Handles all database and authentication operations across:
 * - Public Website Content (Settings, Faculty, News, Gallery)
 * - Private Submissions (Admissions, Contact Inquiries)
 * - Cloud Storage / Image Assets
 * 
 * Includes automatic fallback to local memory / storage so the website works
 * immediately on VS Code Live Server and Netlify even before Firebase keys are added.
 * ==============================================================================
 */

const FirebaseService = (function () {
  // Local In-Memory / Session Storage Cache for Local/Demo Mode
  var DEMO_STORAGE_KEY = "alsiraj_school_db_v2";

  function getLocalDb() {
    try {
      var data = localStorage.getItem(DEMO_STORAGE_KEY);
      if (data) return JSON.parse(data);
    } catch (e) {}

    // Initialize with default fallback arrays from static files if available
    var initial = {
      settings: (typeof SITE_CONFIG !== "undefined") ? SITE_CONFIG : {},
      content: (typeof SITE_CONTENT !== "undefined") ? SITE_CONTENT : {},
      faculty: (typeof FACULTY_DATA !== "undefined") ? FACULTY_DATA : [],
      news: (typeof NEWS_DATA !== "undefined") ? NEWS_DATA : [],
      gallery: (typeof GALLERY_DATA !== "undefined") ? GALLERY_DATA : [],
      admissions: [
        {
          id: "adm-101",
          student_name: "Muhammad Hamza Afzal",
          father_name: "Mian Muhammad Afzal",
          date_of_birth: "2010-04-12",
          gender: "Male",
          applying_class: "Class 9th (Science)",
          previous_school: "Al-Siraj Middle Wing",
          guardian_name: "Mian Muhammad Afzal",
          whatsapp_number: "03001234567",
          email_address: "afzal.parent@example.com",
          home_address: "Street 4, Shahbazpur Road, Punjab",
          status: "Approved",
          submittedAt: "2026-11-01"
        },
        {
          id: "adm-102",
          student_name: "Bilal Ahmad",
          father_name: "Rashid Ahmad",
          date_of_birth: "2013-08-20",
          gender: "Male",
          applying_class: "Class 6th",
          previous_school: "Government Primary School",
          guardian_name: "Rashid Ahmad",
          whatsapp_number: "03017654321",
          email_address: "rashid@example.com",
          home_address: "Model Town, Shahbazpur Road",
          status: "Pending Review",
          submittedAt: "2026-11-04"
        },
        {
          id: "adm-103",
          student_name: "Usman Ghani",
          father_name: "Ghulam Murtaza",
          date_of_birth: "2012-01-15",
          gender: "Male",
          applying_class: "Hifz-ul-Quran",
          previous_school: "Madrasah Taleem-ul-Quran",
          guardian_name: "Ghulam Murtaza",
          whatsapp_number: "03023456789",
          email_address: "",
          home_address: "Near Jamia Masjid, Shahbazpur Road",
          status: "Interview Scheduled",
          submittedAt: "2026-11-06"
        }
      ],
      messages: [
        {
          id: "msg-201",
          full_name: "Dr. Tariq Jamil",
          phone_number: "03009876543",
          email_address: "tariq.jamil@example.com",
          subject: "Campus Tour Booking",
          message: "We would like to visit the 11-kanal campus this Saturday morning to view the science laboratory and meet the principal for 9th grade admission.",
          status: "Unread",
          date: "2026-11-07"
        },
        {
          id: "msg-202",
          full_name: "Chaudhry Nadeem",
          phone_number: "03123456780",
          email_address: "nadeem@example.com",
          subject: "Fee Structure & Concessions",
          message: "Please share details regarding sibling concessions for two boys applying for Grade 3 and Grade 5.",
          status: "Replied",
          date: "2026-11-05"
        }
      ]
    };

    saveLocalDb(initial);
    return initial;
  }

  function saveLocalDb(data) {
    try {
      localStorage.setItem(DEMO_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  // Return public API
  return {
    isLive: function () {
      return isFirebaseConfigured() && firebaseDb !== null;
    },

    // --- 1. Website Settings & Content ---
    getSettings: async function () {
      if (this.isLive()) {
        try {
          var doc = await firebaseDb.collection("settings").doc("general").get();
          if (doc.exists) return doc.data();
        } catch (e) {
          console.error("Firestore getSettings error:", e);
        }
      }
      return getLocalDb().settings;
    },

    saveSettings: async function (newSettings) {
      if (this.isLive()) {
        try {
          await firebaseDb.collection("settings").doc("general").set(newSettings, { merge: true });
        } catch (e) {
          console.error("Firestore saveSettings error:", e);
        }
      }
      var db = getLocalDb();
      db.settings = Object.assign({}, db.settings, newSettings);
      saveLocalDb(db);
      return true;
    },

    // --- 2. Faculty Management ---
    getFaculty: async function () {
      if (this.isLive()) {
        try {
          var snap = await firebaseDb.collection("faculty").get();
          if (!snap.empty) {
            return snap.docs.map(function (d) {
              var data = d.data();
              data.id = d.id;
              return data;
            });
          }
        } catch (e) {
          console.error("Firestore getFaculty error:", e);
        }
      }
      return getLocalDb().faculty;
    },

    addFaculty: async function (item) {
      if (this.isLive()) {
        try {
          var ref = await firebaseDb.collection("faculty").add(item);
          item.id = ref.id;
          return item;
        } catch (e) {
          console.error("Firestore addFaculty error:", e);
        }
      }
      var db = getLocalDb();
      item.id = "fac-" + Date.now();
      db.faculty.unshift(item);
      saveLocalDb(db);
      return item;
    },

    updateFaculty: async function (id, updated) {
      if (this.isLive()) {
        try {
          await firebaseDb.collection("faculty").doc(id).update(updated);
        } catch (e) {
          console.error("Firestore updateFaculty error:", e);
        }
      }
      var db = getLocalDb();
      var idx = db.faculty.findIndex(function (f) { return f.id === id; });
      if (idx !== -1) {
        db.faculty[idx] = Object.assign({}, db.faculty[idx], updated);
        saveLocalDb(db);
      }
      return true;
    },

    deleteFaculty: async function (id) {
      if (this.isLive()) {
        try {
          await firebaseDb.collection("faculty").doc(id).delete();
        } catch (e) {
          console.error("Firestore deleteFaculty error:", e);
        }
      }
      var db = getLocalDb();
      db.faculty = db.faculty.filter(function (f) { return f.id !== id; });
      saveLocalDb(db);
      return true;
    },

    // --- 3. News & Events Management ---
    getNews: async function () {
      if (this.isLive()) {
        try {
          var snap = await firebaseDb.collection("news").orderBy("date", "desc").get();
          if (!snap.empty) {
            return snap.docs.map(function (d) {
              var data = d.data();
              data.id = d.id;
              return data;
            });
          }
        } catch (e) {
          console.error("Firestore getNews error:", e);
        }
      }
      return getLocalDb().news;
    },

    addNews: async function (item) {
      if (this.isLive()) {
        try {
          var ref = await firebaseDb.collection("news").add(item);
          item.id = ref.id;
          return item;
        } catch (e) {
          console.error("Firestore addNews error:", e);
        }
      }
      var db = getLocalDb();
      item.id = "news-" + Date.now();
      db.news.unshift(item);
      saveLocalDb(db);
      return item;
    },

    updateNews: async function (id, updated) {
      if (this.isLive()) {
        try {
          await firebaseDb.collection("news").doc(id).update(updated);
        } catch (e) {
          console.error("Firestore updateNews error:", e);
        }
      }
      var db = getLocalDb();
      var idx = db.news.findIndex(function (n) { return n.id === id; });
      if (idx !== -1) {
        db.news[idx] = Object.assign({}, db.news[idx], updated);
        saveLocalDb(db);
      }
      return true;
    },

    deleteNews: async function (id) {
      if (this.isLive()) {
        try {
          await firebaseDb.collection("news").doc(id).delete();
        } catch (e) {
          console.error("Firestore deleteNews error:", e);
        }
      }
      var db = getLocalDb();
      db.news = db.news.filter(function (n) { return n.id !== id; });
      saveLocalDb(db);
      return true;
    },

    // --- 4. Gallery Management ---
    getGallery: async function () {
      if (this.isLive()) {
        try {
          var snap = await firebaseDb.collection("gallery").get();
          if (!snap.empty) {
            return snap.docs.map(function (d) {
              var data = d.data();
              data.id = d.id;
              return data;
            });
          }
        } catch (e) {
          console.error("Firestore getGallery error:", e);
        }
      }
      return getLocalDb().gallery;
    },

    addGallery: async function (item) {
      if (this.isLive()) {
        try {
          var ref = await firebaseDb.collection("gallery").add(item);
          item.id = ref.id;
          return item;
        } catch (e) {
          console.error("Firestore addGallery error:", e);
        }
      }
      var db = getLocalDb();
      item.id = "gal-" + Date.now();
      db.gallery.unshift(item);
      saveLocalDb(db);
      return item;
    },

    deleteGallery: async function (id) {
      if (this.isLive()) {
        try {
          await firebaseDb.collection("gallery").doc(id).delete();
        } catch (e) {
          console.error("Firestore deleteGallery error:", e);
        }
      }
      var db = getLocalDb();
      db.gallery = db.gallery.filter(function (g) { return g.id !== id; });
      saveLocalDb(db);
      return true;
    },

    // --- 5. Admission Applications ---
    submitAdmission: async function (applicationData) {
      applicationData.submittedAt = new Date().toISOString().split("T")[0];
      applicationData.status = "Pending Review";

      if (this.isLive()) {
        try {
          var ref = await firebaseDb.collection("admissions").add(applicationData);
          applicationData.id = ref.id;
          return { success: true, id: ref.id, mode: "live" };
        } catch (e) {
          console.error("Firestore submitAdmission error:", e);
        }
      }

      var db = getLocalDb();
      applicationData.id = "adm-" + Date.now();
      db.admissions.unshift(applicationData);
      saveLocalDb(db);
      return { success: true, id: applicationData.id, mode: "local" };
    },

    getAdmissions: async function () {
      if (this.isLive()) {
        try {
          var snap = await firebaseDb.collection("admissions").orderBy("submittedAt", "desc").get();
          if (!snap.empty) {
            return snap.docs.map(function (d) {
              var data = d.data();
              data.id = d.id;
              return data;
            });
          }
        } catch (e) {
          console.error("Firestore getAdmissions error:", e);
        }
      }
      return getLocalDb().admissions;
    },

    updateAdmissionStatus: async function (id, newStatus) {
      if (this.isLive()) {
        try {
          await firebaseDb.collection("admissions").doc(id).update({ status: newStatus });
        } catch (e) {
          console.error("Firestore updateAdmissionStatus error:", e);
        }
      }
      var db = getLocalDb();
      var item = db.admissions.find(function (a) { return a.id === id; });
      if (item) {
        item.status = newStatus;
        saveLocalDb(db);
      }
      return true;
    },

    deleteAdmission: async function (id) {
      if (this.isLive()) {
        try {
          await firebaseDb.collection("admissions").doc(id).delete();
        } catch (e) {
          console.error("Firestore deleteAdmission error:", e);
        }
      }
      var db = getLocalDb();
      db.admissions = db.admissions.filter(function (a) { return a.id !== id; });
      saveLocalDb(db);
      return true;
    },

    // --- 6. Contact Messages ---
    submitContact: async function (msgData) {
      msgData.date = new Date().toISOString().split("T")[0];
      msgData.status = "Unread";

      if (this.isLive()) {
        try {
          var ref = await firebaseDb.collection("messages").add(msgData);
          msgData.id = ref.id;
          return { success: true, id: ref.id, mode: "live" };
        } catch (e) {
          console.error("Firestore submitContact error:", e);
        }
      }

      var db = getLocalDb();
      msgData.id = "msg-" + Date.now();
      db.messages.unshift(msgData);
      saveLocalDb(db);
      return { success: true, id: msgData.id, mode: "local" };
    },

    getContactMessages: async function () {
      if (this.isLive()) {
        try {
          var snap = await firebaseDb.collection("messages").orderBy("date", "desc").get();
          if (!snap.empty) {
            return snap.docs.map(function (d) {
              var data = d.data();
              data.id = d.id;
              return data;
            });
          }
        } catch (e) {
          console.error("Firestore getContactMessages error:", e);
        }
      }
      return getLocalDb().messages;
    },

    deleteContactMessage: async function (id) {
      if (this.isLive()) {
        try {
          await firebaseDb.collection("messages").doc(id).delete();
        } catch (e) {
          console.error("Firestore deleteContactMessage error:", e);
        }
      }
      var db = getLocalDb();
      db.messages = db.messages.filter(function (m) { return m.id !== id; });
      saveLocalDb(db);
      return true;
    },

    // --- 7. Cloud Storage Image Upload ---
    uploadImage: async function (file, path) {
      if (this.isLive() && firebaseStorage) {
        try {
          var storageRef = firebaseStorage.ref().child(path + "/" + Date.now() + "_" + file.name);
          var snapshot = await storageRef.put(file);
          var downloadUrl = await snapshot.ref.getDownloadURL();
          return downloadUrl;
        } catch (e) {
          console.error("Firebase Storage upload error:", e);
        }
      }
      // Fallback: Read as base64 Data URL for local testing
      return new Promise(function (resolve) {
        var reader = new FileReader();
        reader.onload = function (e) {
          resolve(e.target.result);
        };
        reader.readAsDataURL(file);
      });
    }
  };
})();
