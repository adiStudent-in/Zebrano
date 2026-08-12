/* ==========================================================================
   ZEBRANO INTERIORS — shared interactions
   Header scroll · mobile menu · scroll reveal · lightbox · contact form
   ========================================================================== */
(function(){
  "use strict";

  /* Header scroll state */
  var header = document.getElementById("siteHeader");
  if (header){
    var onScroll = function(){ header.classList.toggle("scrolled", window.scrollY > 40); };
    window.addEventListener("scroll", onScroll, { passive:true });
    onScroll();
  }

  /* Mobile menu */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("menu");
  if (toggle && menu){
    toggle.addEventListener("click", function(){
      var open = menu.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    menu.querySelectorAll("a").forEach(function(a){
      a.addEventListener("click", function(){
        menu.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded","false");
        document.body.style.overflow = "";
      });
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold:.12, rootMargin:"0px 0px -8% 0px" });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add("in"); });
  }

  /* Lightbox (portfolio pages) */
  var lb = document.getElementById("lightbox");
  if (lb){
    var lbImg = document.getElementById("lbImg");
    var lbCount = document.getElementById("lbCount");
    var lbCap = document.getElementById("lbCap");
    var items = Array.prototype.slice.call(document.querySelectorAll(".portfolio-grid a[href$='.jpg'], .portfolio-grid a[href$='.png']"));
    var idx = 0;
    function show(i){
      idx = (i + items.length) % items.length;
      lbImg.src = items[idx].href;
      lbImg.alt = items[idx].querySelector(".cap") ? items[idx].querySelector(".cap").textContent : "";
      lbCount.textContent = (idx + 1) + " / " + items.length;
      if (lbCap){
        var capNode = items[idx].querySelector(".cap");
        lbCap.textContent = capNode ? capNode.textContent : "";
      }
    }
    function openLb(i){ show(i); lb.classList.add("open"); document.body.style.overflow = "hidden"; }
    function closeLb(){ lb.classList.remove("open"); document.body.style.overflow = ""; }
    items.forEach(function(a, i){
      a.addEventListener("click", function(ev){
        ev.preventDefault();
        openLb(i);
      });
    });
    document.getElementById("lbClose").addEventListener("click", closeLb);
    document.getElementById("lbPrev").addEventListener("click", function(){ show(idx - 1); });
    document.getElementById("lbNext").addEventListener("click", function(){ show(idx + 1); });
    document.addEventListener("keydown", function(ev){
      if (!lb.classList.contains("open")) return;
      if (ev.key === "Escape") closeLb();
      if (ev.key === "ArrowLeft") show(idx - 1);
      if (ev.key === "ArrowRight") show(idx + 1);
    });
    /* Swipe navigation (mobile) */
    var touchStartX = null;
    lb.addEventListener("touchstart", function(ev){
      if (!lb.classList.contains("open")) return;
      if (ev.target.closest("button")) return;
      touchStartX = ev.changedTouches[0].clientX;
    }, { passive:true });
    lb.addEventListener("touchend", function(ev){
      if (touchStartX === null) return;
      var dx = ev.changedTouches[0].clientX - touchStartX;
      touchStartX = null;
      if (Math.abs(dx) > 40) show(idx + (dx < 0 ? 1 : -1));
    }, { passive:true });
    lb.addEventListener("click", function(ev){ if (ev.target === lb) closeLb(); });
  }

  /* Contact form: validate → mailto fallback */
  var form = document.getElementById("contactForm");
  if (form){
    function setInvalid(field, invalid){
      field.classList.toggle("invalid", invalid);
      return !invalid;
    }
    function validate(){
      var ok = true;
      var name = document.getElementById("f-name");
      var phone = document.getElementById("f-phone");
      var email = document.getElementById("f-email");
      var msg = document.getElementById("f-msg");
      ok = setInvalid(name, name.value.trim().length < 2) && ok;
      ok = setInvalid(phone, !/^[+\d][\d\s\-()]{6,17}$/.test(phone.value.trim())) && ok;
      ok = setInvalid(email, email.value.trim() !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) && ok;
      ok = setInvalid(msg, msg.value.trim().length < 5) && ok;
      return ok;
    }
    form.addEventListener("submit", function(ev){
      ev.preventDefault();
      if (!validate()) return;
      var name = document.getElementById("f-name").value.trim();
      var phone = document.getElementById("f-phone").value.trim();
      var email = document.getElementById("f-email").value.trim();
      var msg = document.getElementById("f-msg").value.trim();
      var subject = encodeURIComponent("Project Enquiry — " + name);
      var body = encodeURIComponent("Name: " + name + "\nPhone: " + phone + (email ? "\nEmail: " + email : "") + "\n\n" + msg);
      window.location.href = "mailto:Zebranointeriors@gmail.com?subject=" + subject + "&body=" + body;
      document.getElementById("formSuccess").style.display = "block";
      form.querySelector("button[type=submit]").textContent = "Opening your email…";
    });
    ["f-name","f-phone","f-email","f-msg"].forEach(function(id){
      var el = document.getElementById(id);
      el.addEventListener("input", function(){ el.closest(".field").classList.remove("invalid"); });
    });
  }
})();