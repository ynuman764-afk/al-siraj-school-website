/**
 * AL-SIRAJ MODEL HIGH SCHOOL - MAIN APPLICATION SCRIPT
 * Handles navigation, dynamic data hydration, interactive gallery lightbox,
 * counter animations, form validation, news search, and the Student/CMS Portal.
 */

document.addEventListener("DOMContentLoaded", function () {
  initGlobalBranding();
  initStickyHeader();
  initBackToTop();
  initStatCounters();
  initPageSpecificContent();
  initGalleryLightbox();
  initFormsValidation();
  initStudentPortalAndCMS();
});

/* ==============================================================================
 * 1. GLOBAL BRANDING & CONFIG HYDRATION
 * ============================================================================== */
function initGlobalBranding() {
  if (typeof SITE_CONFIG === "undefined") return;

  // Hydrate all elements with matching data-config attributes
  document.querySelectorAll("[data-config]").forEach(function (el) {
    var key = el.getAttribute("data-config");
    if (SITE_CONFIG[key] !== undefined) {
      el.textContent = SITE_CONFIG[key];
    }
  });

  // Hydrate telephone links
  document.querySelectorAll("a[data-config-phone]").forEach(function (el) {
    el.href = "tel:" + SITE_CONFIG.phonePrimary.replace(/\s+/g, "");
    el.textContent = SITE_CONFIG.phonePrimary;
  });

  // Hydrate email links
  document.querySelectorAll("a[data-config-email]").forEach(function (el) {
    el.href = "mailto:" + SITE_CONFIG.emailPrimary;
    el.textContent = SITE_CONFIG.emailPrimary;
  });

  // Hydrate WhatsApp links
  document.querySelectorAll("a[data-config-whatsapp]").forEach(function (el) {
    var cleanNum = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
    var msg = encodeURIComponent(SITE_CONFIG.whatsappMessage || "Hello!");
    el.href = "https://wa.me/" + cleanNum + "?text=" + msg;
  });

  // Set Year in Copyright
  var yearEls = document.querySelectorAll(".current-year");
  var currentYear = new Date().getFullYear();
  yearEls.forEach(function (el) {
    el.textContent = currentYear;
  });
}

/* ==============================================================================
 * 2. STICKY NAVBAR & BACK-TO-TOP
 * ============================================================================== */
function initStickyHeader() {
  var header = document.querySelector(".main-header");
  if (!header) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

function initBackToTop() {
  var btn = document.getElementById("btnBackToTop");
  if (!btn) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 350) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  }, { passive: true });

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==============================================================================
 * 3. ANIMATED STATISTICS COUNTER
 * ============================================================================== */
function initStatCounters() {
  var counterEls = document.querySelectorAll(".counter-number");
  if (!counterEls.length) return;

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var targetCount = parseInt(el.getAttribute("data-target"), 10) || 0;
        animateNumber(el, targetCount, 1600);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.25 });

  counterEls.forEach(function (el) {
    observer.observe(el);
  });
}

function animateNumber(element, target, duration) {
  var startTime = null;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = Math.min((timestamp - startTime) / duration, 1);
    // Smooth easeOutQuad
    var current = Math.floor(progress * (2 - progress) * target);
    element.textContent = current;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = target;
    }
  }
  window.requestAnimationFrame(step);
}

/* ==============================================================================
 * 4. PAGE-SPECIFIC DATA RENDERING
 * ============================================================================== */
function initPageSpecificContent() {
  var page = document.body.getAttribute("data-page");

  if (page === "home") {
    renderHomeSections();
  } else if (page === "about") {
    renderAboutSections();
  } else if (page === "faculty") {
    renderFacultyPage();
  } else if (page === "gallery") {
    renderGalleryPage();
  } else if (page === "news") {
    renderNewsPage();
  } else if (page === "contact") {
    renderContactPage();
  }
}

// --- Home Page Rendering ---
function renderHomeSections() {
  if (typeof SITE_CONTENT === "undefined") return;

  // 1. Why Choose Us
  var whyContainer = document.getElementById("whyChooseUsContainer");
  if (whyContainer && SITE_CONTENT.whyChooseUs) {
    var whyHtml = SITE_CONTENT.whyChooseUs.map(function (item) {
      return (
        '<div class="col-lg-4 col-md-6 mb-4">' +
          '<div class="school-card">' +
            '<div class="school-card-icon"><i class="bi ' + (item.icon || 'bi-star-fill') + '"></i></div>' +
            '<h3 class="school-card-title">' + item.title + '</h3>' +
            '<p class="school-card-text">' + item.description + '</p>' +
          '</div>' +
        '</div>'
      );
    }).join("");
    whyContainer.innerHTML = whyHtml;
  }

  // 2. Academic Programs
  var progContainer = document.getElementById("academicProgramsContainer");
  if (progContainer && SITE_CONTENT.academicPrograms) {
    var progHtml = SITE_CONTENT.academicPrograms.map(function (prog) {
      var bullets = (prog.highlights || []).map(function (h) {
        return '<li class="mb-1 text-muted small"><i class="bi bi-check2 text-warning me-1"></i>' + h + '</li>';
      }).join("");

      return (
        '<div class="col-lg-4 col-md-6 mb-4">' +
          '<div class="program-card">' +
            '<div class="program-meta">' + (prog.badge || 'Program') + ' · ' + (prog.ageGroup || '') + '</div>' +
            '<h3 class="h5 font-display mb-2 text-primary">' + prog.title + '</h3>' +
            '<p class="small text-muted mb-3 flex-grow-1">' + prog.summary + '</p>' +
            '<ul class="list-unstyled mb-3">' + bullets + '</ul>' +
            '<a href="admission.html" class="btn btn-sm btn-outline-school mt-auto align-self-start">Enroll in ' + prog.title.split(' ')[0] + ' <i class="bi bi-arrow-right"></i></a>' +
          '</div>' +
        '</div>'
      );
    }).join("");
    progContainer.innerHTML = progHtml;
  }

  // 3. Campus Facilities
  var facContainer = document.getElementById("facilitiesContainer");
  if (facContainer && SITE_CONTENT.facilities) {
    var facHtml = SITE_CONTENT.facilities.map(function (fac) {
      return (
        '<div class="col-lg-4 col-md-6 mb-4">' +
          '<div class="facility-card">' +
            '<div class="facility-card-image">' +
              '<img src="' + fac.image + '" alt="' + fac.title + '" loading="lazy" onerror="this.onerror=null;this.src=\'images/campus/hero.jpg\'">' +
            '</div>' +
            '<div class="facility-card-body">' +
              '<h3 class="h6 font-display text-primary mb-2">' + fac.title + '</h3>' +
              '<p class="small text-muted mb-0">' + fac.description + '</p>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join("");
    facContainer.innerHTML = facHtml;
  }

  // 4. Latest News (Top 3)
  var newsContainer = document.getElementById("homeLatestNewsContainer");
  if (newsContainer && typeof NEWS_DATA !== "undefined") {
    var latest = NEWS_DATA.slice(0, 3);
    var newsHtml = latest.map(function (item) {
      return (
        '<div class="col-lg-4 col-md-6 mb-4">' +
          '<div class="school-card">' +
            '<div class="small text-muted mb-2">' +
              '<span>' + item.category + '</span>' +
              '<span class="mx-1">·</span>' +
              '<span>' + item.date + '</span>' +
            '</div>' +
            '<h3 class="h5 font-display mb-2">' + item.title + '</h3>' +
            '<p class="small text-muted flex-grow-1">' + item.summary + '</p>' +
            '<a href="news.html" class="small fw-bold text-primary mt-3 d-inline-flex align-items-center gap-1">Read Full Announcement <i class="bi bi-arrow-right"></i></a>' +
          '</div>' +
        '</div>'
      );
    }).join("");
    newsContainer.innerHTML = newsHtml;
  }

  // 5. Gallery Preview (6 Photos)
  var galContainer = document.getElementById("homeGalleryPreviewContainer");
  if (galContainer && typeof GALLERY_DATA !== "undefined") {
    var preview = GALLERY_DATA.slice(0, 6);
    var galHtml = preview.map(function (img, idx) {
      return (
        '<div class="col-lg-4 col-md-6 mb-4">' +
          '<div class="gallery-item" data-index="' + idx + '" data-image="' + img.image + '" data-caption="' + img.caption + '" data-title="' + img.title + '">' +
            '<img src="' + img.image + '" alt="' + img.title + '" loading="lazy" onerror="this.onerror=null;this.src=\'images/campus/hero.jpg\'">' +
            '<div class="gallery-overlay">' +
              '<div class="gallery-overlay-title">' + img.title + '</div>' +
              '<div class="gallery-overlay-meta">' + img.category.toUpperCase() + '</div>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join("");
    galContainer.innerHTML = galHtml;
  }

  // 6. Testimonials
  var testContainer = document.getElementById("testimonialsContainer");
  if (testContainer && SITE_CONTENT.testimonials) {
    var testHtml = SITE_CONTENT.testimonials.map(function (t) {
      var stars = '<i class="bi bi-star-fill text-warning"></i>'.repeat(t.rating || 5);
      return (
        '<div class="col-lg-4 col-md-6 mb-4">' +
          '<div class="school-card">' +
            '<div class="mb-2">' + stars + '</div>' +
            '<p class="fst-italic text-muted small flex-grow-1">“' + t.comment + '”</p>' +
            '<div class="pt-2 border-top">' +
              '<div class="fw-bold text-primary small">' + t.parentName + '</div>' +
              '<div class="text-muted" style="font-size:0.75rem;">' + t.relation + '</div>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join("");
    testContainer.innerHTML = testHtml;
  }
}

// --- About Page Rendering ---
function renderAboutSections() {
  if (typeof SITE_CONTENT === "undefined") return;

  var valuesContainer = document.getElementById("aboutValuesContainer");
  if (valuesContainer && SITE_CONTENT.values) {
    var valuesHtml = SITE_CONTENT.values.map(function (v) {
      return (
        '<div class="col-md-6 mb-4">' +
          '<div class="school-card">' +
            '<h3 class="h5 font-display text-primary mb-2">' + v.name + '</h3>' +
            '<p class="small text-muted mb-0">' + v.text + '</p>' +
          '</div>' +
        '</div>'
      );
    }).join("");
    valuesContainer.innerHTML = valuesHtml;
  }
}

// --- Faculty Page Rendering ---
function renderFacultyPage() {
  if (typeof FACULTY_DATA === "undefined") return;

  var facultyGrid = document.getElementById("facultyGridContainer");
  var filterButtons = document.querySelectorAll("[data-faculty-filter]");
  var searchInput = document.getElementById("facultySearchInput");

  function displayFaculty(items) {
    if (!facultyGrid) return;

    if (!items.length) {
      facultyGrid.innerHTML = '<div class="col-12 text-center py-5 text-muted"><p>No faculty members match your criteria.</p></div>';
      return;
    }

    var html = items.map(function (f) {
      return (
        '<div class="col-lg-4 col-md-6 mb-4">' +
          '<div class="faculty-card">' +
            '<div class="faculty-photo-wrap">' +
              '<img src="' + f.image + '" alt="' + f.name + '" loading="lazy" onerror="this.onerror=null;this.src=\'images/faculty/principal.jpg\'">' +
            '</div>' +
            '<div class="faculty-body">' +
              '<h3 class="faculty-name">' + f.name + '</h3>' +
              '<div class="faculty-designation">' + f.designation + '</div>' +
              '<p class="small text-muted mb-3 flex-grow-1">' + f.bio + '</p>' +
              '<div class="faculty-meta-list">' +
                '<div><strong>Dept:</strong> ' + f.department + '</div>' +
                '<div><strong>Qualification:</strong> ' + f.qualification + '</div>' +
                '<div><strong>Experience:</strong> ' + f.experience + '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join("");

    facultyGrid.innerHTML = html;
  }

  // Initial display
  displayFaculty(FACULTY_DATA);

  // Department Filters
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");

      var dept = btn.getAttribute("data-faculty-filter");
      var filtered = (dept === "all")
        ? FACULTY_DATA
        : FACULTY_DATA.filter(function (f) { return f.department.toLowerCase() === dept.toLowerCase(); });

      displayFaculty(filtered);
    });
  });

  // Search filter
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      var query = searchInput.value.toLowerCase().trim();
      var filtered = FACULTY_DATA.filter(function (f) {
        return f.name.toLowerCase().includes(query) ||
               f.department.toLowerCase().includes(query) ||
               f.designation.toLowerCase().includes(query) ||
               f.qualification.toLowerCase().includes(query);
      });
      displayFaculty(filtered);
    });
  }
}

// --- Gallery Page Rendering & Filtering ---
function renderGalleryPage() {
  if (typeof GALLERY_DATA === "undefined") return;

  var galleryGrid = document.getElementById("galleryGridContainer");
  var filterButtons = document.querySelectorAll("[data-gallery-filter]");

  function displayGallery(items) {
    if (!galleryGrid) return;

    if (!items.length) {
      galleryGrid.innerHTML = '<div class="col-12 text-center py-5 text-muted"><p>No photographs found in this category.</p></div>';
      return;
    }

    var html = items.map(function (img, idx) {
      return (
        '<div class="col-lg-4 col-md-6 mb-4">' +
          '<div class="gallery-item" data-index="' + idx + '" data-image="' + img.image + '" data-caption="' + img.caption + '" data-title="' + img.title + '">' +
            '<img src="' + img.image + '" alt="' + img.title + '" loading="lazy" onerror="this.onerror=null;this.src=\'images/campus/hero.jpg\'">' +
            '<div class="gallery-overlay">' +
              '<div class="gallery-overlay-title">' + img.title + '</div>' +
              '<div class="gallery-overlay-meta">' + img.category.toUpperCase() + '</div>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join("");

    galleryGrid.innerHTML = html;
  }

  displayGallery(GALLERY_DATA);

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");

      var cat = btn.getAttribute("data-gallery-filter");
      var filtered = (cat === "all")
        ? GALLERY_DATA
        : GALLERY_DATA.filter(function (item) { return item.category.toLowerCase() === cat.toLowerCase(); });

      displayGallery(filtered);
    });
  });
}

// --- News Page Rendering & Search ---
function renderNewsPage() {
  if (typeof NEWS_DATA === "undefined") return;

  var newsGrid = document.getElementById("newsGridContainer");
  var filterButtons = document.querySelectorAll("[data-news-filter]");
  var searchInput = document.getElementById("newsSearchInput");

  function displayNews(items) {
    if (!newsGrid) return;

    if (!items.length) {
      newsGrid.innerHTML = '<div class="col-12 text-center py-5 text-muted"><p>No announcements match your search or filter.</p></div>';
      return;
    }

    var html = items.map(function (item) {
      return (
        '<div class="col-lg-6 mb-4">' +
          '<div class="school-card">' +
            '<div class="d-flex align-items-center justify-content-between mb-2 small text-muted">' +
              '<span>' + item.category + '</span>' +
              '<span>' + item.date + '</span>' +
            '</div>' +
            '<h3 class="h5 font-display text-primary mb-2">' + item.title + '</h3>' +
            '<p class="small text-muted mb-3 flex-grow-1">' + item.summary + '</p>' +
            '<button class="btn btn-sm btn-outline-school align-self-start btn-read-news" data-news-id="' + item.id + '">' +
              'Read Full Details <i class="bi bi-arrow-right"></i>' +
            '</button>' +
          '</div>' +
        '</div>'
      );
    }).join("");

    newsGrid.innerHTML = html;
    bindNewsDetailButtons();
  }

  displayNews(NEWS_DATA);

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");

      var cat = btn.getAttribute("data-news-filter");
      var filtered = (cat === "all")
        ? NEWS_DATA
        : NEWS_DATA.filter(function (n) { return n.category.toLowerCase() === cat.toLowerCase(); });

      displayNews(filtered);
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      var query = searchInput.value.toLowerCase().trim();
      var filtered = NEWS_DATA.filter(function (n) {
        return n.title.toLowerCase().includes(query) ||
               n.summary.toLowerCase().includes(query) ||
               n.category.toLowerCase().includes(query);
      });
      displayNews(filtered);
    });
  }
}

function bindNewsDetailButtons() {
  document.querySelectorAll(".btn-read-news").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-news-id");
      var article = NEWS_DATA.find(function (n) { return n.id === id; });
      if (!article) return;

      var modalTitle = document.getElementById("newsModalTitle");
      var modalMeta = document.getElementById("newsModalMeta");
      var modalBody = document.getElementById("newsModalBody");

      if (modalTitle) modalTitle.textContent = article.title;
      if (modalMeta) modalMeta.textContent = article.category + " · Published: " + article.date;
      if (modalBody) modalBody.textContent = article.fullContent || article.summary;

      var bsModal = new bootstrap.Modal(document.getElementById("newsDetailModal"));
      bsModal.show();
    });
  });
}

function renderContactPage() {
  // Handled by initGlobalBranding and forms
}

/* ==============================================================================
 * 5. GALLERY LIGHTBOX POPUP
 * ============================================================================== */
var currentLightboxIndex = 0;
var currentLightboxList = [];

function initGalleryLightbox() {
  var modal = document.getElementById("galleryLightboxModal");
  if (!modal) return;

  var modalImg = document.getElementById("lightboxImage");
  var modalCaption = document.getElementById("lightboxCaption");
  var btnClose = document.getElementById("lightboxClose");
  var btnPrev = document.getElementById("lightboxPrev");
  var btnNext = document.getElementById("lightboxNext");

  // Delegate click from document to handle dynamically rendered gallery items
  document.addEventListener("click", function (e) {
    var item = e.target.closest(".gallery-item");
    if (!item) return;

    // Build current active list
    var visibleItems = Array.from(document.querySelectorAll(".gallery-item"));
    currentLightboxList = visibleItems.map(function (el) {
      return {
        image: el.getAttribute("data-image"),
        title: el.getAttribute("data-title"),
        caption: el.getAttribute("data-caption")
      };
    });

    currentLightboxIndex = visibleItems.indexOf(item);
    if (currentLightboxIndex < 0) currentLightboxIndex = 0;

    openLightbox();
  });

  function openLightbox() {
    var data = currentLightboxList[currentLightboxIndex];
    if (!data) return;

    modalImg.src = data.image;
    modalCaption.innerHTML = '<strong>' + data.title + '</strong><br><span class="text-muted">' + (data.caption || '') + '</span>';
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  function showNext() {
    if (!currentLightboxList.length) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxList.length;
    openLightbox();
  }

  function showPrev() {
    if (!currentLightboxList.length) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxList.length) % currentLightboxList.length;
    openLightbox();
  }

  if (btnClose) btnClose.addEventListener("click", closeLightbox);
  if (btnNext) btnNext.addEventListener("click", showNext);
  if (btnPrev) btnPrev.addEventListener("click", showPrev);

  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (!modal.classList.contains("show")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
  });
}

/* ==============================================================================
 * 6. FORMS VALIDATION & NETLIFY HANDLING
 * ============================================================================== */
function initFormsValidation() {
  // 1. Admission Form
  var admissionForm = document.getElementById("schoolAdmissionForm");
  if (admissionForm) {
    admissionForm.addEventListener("submit", function (e) {
      if (!admissionForm.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        admissionForm.classList.add("was-validated");
        return;
      }

      // Check phone number format
      var phoneInput = document.getElementById("admWhatsApp");
      if (phoneInput && phoneInput.value.trim().length < 10) {
        e.preventDefault();
        e.stopPropagation();
        alert("Please provide a valid Pakistani WhatsApp or mobile phone number (at least 10 digits).");
        return;
      }

      // Collect Application Data
      var applicationData = {
        student_name: document.getElementById("admStudentName").value,
        father_name: document.getElementById("admFatherName").value,
        date_of_birth: document.getElementById("admDob").value,
        gender: document.getElementById("admGender").value,
        applying_class: document.getElementById("admClass").value,
        previous_school: document.getElementById("admPrevSchool") ? document.getElementById("admPrevSchool").value : "",
        guardian_name: document.getElementById("admParentName").value,
        whatsapp_number: document.getElementById("admWhatsApp").value,
        email_address: document.getElementById("admEmail") ? document.getElementById("admEmail").value : "",
        home_address: document.getElementById("admAddress").value
      };

      e.preventDefault();
      var btnSubmit = admissionForm.querySelector('button[type="submit"]');
      if (btnSubmit) {
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = '<span class="spinner-border spinner-border-sm me-1"></span> Submitting...';
      }

      if (typeof FirebaseService !== "undefined") {
        FirebaseService.submitAdmission(applicationData).then(function (res) {
          showSubmissionNotice(
            "Application Received for " + applicationData.student_name,
            "Thank you! Your online admission request for " + applicationData.applying_class + " has been successfully submitted and stored. Our admissions office will reach out on WhatsApp (" + applicationData.whatsapp_number + ")."
          );
          admissionForm.reset();
          admissionForm.classList.remove("was-validated");
          if (btnSubmit) {
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = '<i class="bi bi-send-check-fill me-1"></i> Submit Online Application';
          }
        }).catch(function (err) {
          showSubmissionNotice("Submission Error", "Could not submit application. Please contact admissions directly: +92 300 1234567");
          if (btnSubmit) {
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = '<i class="bi bi-send-check-fill me-1"></i> Submit Online Application';
          }
        });
      }
    });

    var clearBtn = document.getElementById("btnAdmissionClear");
    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        admissionForm.reset();
        admissionForm.classList.remove("was-validated");
      });
    }
  }

  // 2. Contact Form
  var contactForm = document.getElementById("schoolContactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      if (!contactForm.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
        contactForm.classList.add("was-validated");
        return;
      }

      e.preventDefault();
      var msgData = {
        full_name: document.getElementById("contactName").value,
        phone_number: document.getElementById("contactPhone").value,
        email_address: document.getElementById("contactEmail") ? document.getElementById("contactEmail").value : "",
        subject: document.getElementById("contactSubject") ? document.getElementById("contactSubject").value : "General Inquiry",
        message: document.getElementById("contactMessage").value
      };

      var btnSubmit = contactForm.querySelector('button[type="submit"]');
      if (btnSubmit) {
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = '<span class="spinner-border spinner-border-sm me-1"></span> Sending...';
      }

      if (typeof FirebaseService !== "undefined") {
        FirebaseService.submitContact(msgData).then(function (res) {
          showSubmissionNotice(
            "Message Received from " + msgData.full_name,
            "Thank you for contacting Al-Siraj Model High School. Your message has been routed to the administration desk. We will respond promptly."
          );
          contactForm.reset();
          contactForm.classList.remove("was-validated");
          if (btnSubmit) {
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = '<i class="bi bi-send-fill me-1"></i> Send Inquiry Message';
          }
        }).catch(function (err) {
          showSubmissionNotice("Message Error", "Please call or WhatsApp our office at +92 300 1234567.");
          if (btnSubmit) {
            btnSubmit.disabled = false;
            btnSubmit.innerHTML = '<i class="bi bi-send-fill me-1"></i> Send Inquiry Message';
          }
        });
      }
    });
  }
}

function showSubmissionNotice(title, message) {
  var alertEl = document.createElement("div");
  alertEl.className = "alert alert-success alert-dismissible fade show fixed-top m-3 shadow-lg";
  alertEl.style.zIndex = "9999";
  alertEl.style.maxWidth = "550px";
  alertEl.style.marginLeft = "auto";
  alertEl.style.marginRight = "auto";
  alertEl.innerHTML =
    '<strong>' + title + '</strong>' +
    '<p class="mb-0 mt-1 small">' + message + '</p>' +
    '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

  document.body.appendChild(alertEl);
  setTimeout(function () {
    if (alertEl.parentNode) alertEl.remove();
  }, 7000);
}

/* ==============================================================================
 * 7. STUDENT PORTAL & IN-BROWSER CMS MANAGER
 * ============================================================================== */
function initStudentPortalAndCMS() {
  // Sample Student Database for Result / Fee Inquiries
  var STUDENTS_SAMPLE_DB = {
    "1024": {
      name: "Muhammad Hamza Afzal",
      rollNo: "1024",
      grade: "Class 9th (Science)",
      marks: "482 / 505 (95.4%)",
      gradeRank: "1st Position",
      attendance: "98%",
      feeStatus: "Paid (Receipt #AS-9821)",
      subjects: [
        { name: "English", marks: "71/75", grade: "A+" },
        { name: "Urdu", marks: "70/75", grade: "A+" },
        { name: "Islamiyat", marks: "48/50", grade: "A+" },
        { name: "Mathematics", marks: "74/75", grade: "A+" },
        { name: "Physics", marks: "73/75", grade: "A+" },
        { name: "Chemistry", marks: "72/75", grade: "A+" },
        { name: "Biology", marks: "74/75", grade: "A+" }
      ]
    },
    "1025": {
      name: "Ali Hassan Tariq",
      rollNo: "1025",
      grade: "Class 8th (Middle)",
      marks: "440 / 500 (88.0%)",
      gradeRank: "3rd Position",
      attendance: "96%",
      feeStatus: "Paid (Receipt #AS-9834)",
      subjects: [
        { name: "English", marks: "86/100", grade: "A" },
        { name: "Urdu", marks: "88/100", grade: "A+" },
        { name: "Math", marks: "94/100", grade: "A+" },
        { name: "Science", marks: "89/100", grade: "A+" },
        { name: "Islamiyat", marks: "83/100", grade: "A" }
      ]
    },
    "1026": {
      name: "Usman Ghani",
      rollNo: "1026",
      grade: "Hifz-ul-Quran (Para 24)",
      marks: "Excellent Tajweed (Grade A+)",
      gradeRank: "Distinction in Makharij",
      attendance: "100%",
      feeStatus: "Paid (Receipt #AS-9840)",
      subjects: [
        { name: "Hifz Pacing", marks: "24 Paras Memorized", grade: "A+" },
        { name: "Tajweed & Ahkam", marks: "98/100", grade: "A+" },
        { name: "Nazra Revision", marks: "Consistent", grade: "A+" },
        { name: "School Academics", marks: "Class 6 Synchronized", grade: "A" }
      ]
    }
  };

  // Result Search Handler
  var btnCheckResult = document.getElementById("btnCheckResult");
  var rollInput = document.getElementById("portalRollNumber");
  var resultDisplay = document.getElementById("portalResultDisplay");

  if (btnCheckResult && rollInput && resultDisplay) {
    btnCheckResult.addEventListener("click", function () {
      var roll = rollInput.value.trim();
      if (!roll) {
        resultDisplay.innerHTML = '<div class="alert alert-warning py-2 small">Please enter student roll number (e.g., 1024, 1025, 1026).</div>';
        return;
      }

      var record = STUDENTS_SAMPLE_DB[roll];
      if (record) {
        var subRows = (record.subjects || []).map(function (s) {
          return '<tr><td>' + s.name + '</td><td class="text-end fw-bold">' + s.marks + '</td><td class="text-end"><span class="badge bg-success">' + s.grade + '</span></td></tr>';
        }).join("");

        resultDisplay.innerHTML =
          '<div class="result-card-box mt-3">' +
            '<div class="d-flex justify-content-between align-items-center mb-2">' +
              '<h4 class="h6 mb-0 text-primary fw-bold">' + record.name + '</h4>' +
              '<span class="badge bg-primary">Roll #' + record.rollNo + '</span>' +
            '</div>' +
            '<div class="small text-muted mb-2">' + record.grade + ' · Rank: <strong class="text-dark">' + record.gradeRank + '</strong></div>' +
            '<div class="small mb-3"><strong>Total Result:</strong> <span class="text-success fw-bold">' + record.marks + '</span> | Attendance: ' + record.attendance + ' | Fee: <span class="text-success">' + record.feeStatus + '</span></div>' +
            '<div class="table-responsive">' +
              '<table class="table table-sm table-bordered bg-white small mb-0">' +
                '<thead class="table-light"><tr><th>Subject</th><th class="text-end">Score</th><th class="text-end">Grade</th></tr></thead>' +
                '<tbody>' + subRows + '</tbody>' +
              '</table>' +
            '</div>' +
          '</div>';
      } else {
        resultDisplay.innerHTML =
          '<div class="alert alert-danger py-2 small mt-3">' +
            'Student Roll #<strong>' + roll + '</strong> not found in demo database. Please try sample roll numbers: <strong>1024</strong>, <strong>1025</strong>, or <strong>1026</strong>.' +
          '</div>';
      }
    });
  }

  // Live CMS In-Browser Editor (Populates form with SITE_CONFIG and lets user test updates live)
  var cmsPhone = document.getElementById("cmsPhone");
  var cmsWhatsApp = document.getElementById("cmsWhatsApp");
  var cmsPrincipal = document.getElementById("cmsPrincipal");
  var cmsSlogan = document.getElementById("cmsSlogan");
  var cmsAddress = document.getElementById("cmsAddress");
  var btnSaveCms = document.getElementById("btnSaveCms");
  var cmsStatus = document.getElementById("cmsStatus");

  if (cmsPhone && typeof SITE_CONFIG !== "undefined") {
    cmsPhone.value = SITE_CONFIG.phonePrimary || "";
    cmsWhatsApp.value = SITE_CONFIG.whatsappNumber || "";
    cmsPrincipal.value = SITE_CONFIG.principalName || "";
    cmsSlogan.value = SITE_CONFIG.slogan || "";
    cmsAddress.value = SITE_CONFIG.fullAddress || "";

    if (btnSaveCms) {
      btnSaveCms.addEventListener("click", function () {
        SITE_CONFIG.phonePrimary = cmsPhone.value;
        SITE_CONFIG.whatsappNumber = cmsWhatsApp.value;
        SITE_CONFIG.principalName = cmsPrincipal.value;
        SITE_CONFIG.slogan = cmsSlogan.value;
        SITE_CONFIG.fullAddress = cmsAddress.value;

        // Re-hydrate the current page live!
        initGlobalBranding();

        if (cmsStatus) {
          cmsStatus.innerHTML =
            '<div class="alert alert-success py-2 small mt-2">' +
              '<i class="bi bi-check-circle-fill me-1"></i> Live website preview updated! To make these changes permanent, open <code>js/site-config.js</code> and update the values as described in <code>EDITING-GUIDE.md</code>.' +
            '</div>';
        }
      });
    }
  }
}
