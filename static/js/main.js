"use strict";

$(document).ready(function () {
  svg4everybody({});
});

// Полифилы

// forEach IE 11
if ("NodeList" in window && !NodeList.prototype.forEach) {
  console.info("polyfill for IE11");
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// closest IE 11
(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }
      return null;
    };
  }
})();

// matches IE 11
(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})();

//Array.form IE 11
if (!Array.from) {
  Array.from = function (object) {
    "use strict";

    return [].slice.call(object);
  };
}

// Function scale (map number)

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

// Check Mobile or Desktop

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};
if (isMobile.any()) {
  document.body.classList.add("_touch");
} else {
  document.body.classList.add("_pc");
}

// Accordion

const selectors = {
  itemButton: document.querySelector(".what__item-button"),
  itemList: document.querySelector(".what__item-list"),
  buttonImg: document.querySelector(".what__item-button-img"),
  buttonIntro: document.querySelector(".intro__button"),
  modal: document.querySelector(".modal"),
  closeModal: document.querySelector(".modal__close"),
  body: document.body,
  aiButton: document.querySelector(".ai__button"),
  whatButton: document.querySelector(".what__button"),
  buttonUp: document.querySelector(".button-up")
};
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    selectors.buttonUp.classList.add("button-up--active");
  } else {
    selectors.buttonUp.classList.remove("button-up--active");
  }
});
selectors.itemButton.addEventListener("click", e => {
  selectors.itemList.classList.toggle("what__item-list--open");
  selectors.buttonImg.classList.toggle("rotate");
  if (selectors.itemList.classList.contains("what__item-list--open")) {
    selectors.itemList.style.maxHeight = selectors.itemList.scrollHeight + "px";
  } else {
    selectors.itemList.style.maxHeight = 0 + "px";
  }
});

// modal

selectors.buttonIntro.addEventListener("click", () => {
  selectors.modal.classList.add("modal--open");
  selectors.body.classList.add("stop-scroll");
});
selectors.aiButton.addEventListener("click", () => {
  selectors.modal.classList.add("modal--open");
  selectors.body.classList.add("stop-scroll");
});
selectors.whatButton.addEventListener("click", () => {
  selectors.modal.classList.add("modal--open");
  selectors.body.classList.add("stop-scroll");
});
selectors.closeModal.addEventListener("click", () => {
  selectors.modal.classList.remove("modal--open");
  selectors.body.classList.remove("stop-scroll");
});

// swiper

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 320px
    1080: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  },
  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});