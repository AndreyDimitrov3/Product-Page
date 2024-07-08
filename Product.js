document.addEventListener("DOMContentLoaded", function () {
  let value = document.getElementById("value");
  let count = 0;
  let cart = document.getElementById("cart");
  let btn = document.getElementById("mainButton");

  cart.addEventListener("click", cartListener);

  function cartListener() {
    document.getElementById("cartPopup").classList.toggle("hidden");
  }

  btn.addEventListener("click", quantityNumber);
  let sum = 0;

  function quantityNumber() {
    let quantity = Number(value.innerText);
    sum += quantity;

    document.getElementById("emptyCart").classList.add("hidden");
    document.getElementById("fullCart").classList.remove("hidden");

    document.getElementById("number").innerText = sum;
    document.getElementById("finalPrice").innerText = "$" + sum * 125 + ".00";

    document.querySelector(".product-quantity").classList.remove("hidden");
    document.querySelector(".product-quantity-number").innerText = sum;
  }

  btn.addEventListener("click", function () {
    if (sum === 0) {
      document.getElementById("emptyCart").classList.remove("hidden");
      document.getElementById("fullCart").classList.add("hidden");
      document.querySelector(".product-quantity").classList.add("hidden");
    }
  });

  document.getElementById("plus").addEventListener("click", plus);
  function plus() {
    count += 1;
    value.innerText = count;
  }

  document.getElementById("minus").addEventListener("click", minus);
  function minus() {
    if (count <= 0) {
      count = 0;
    } else {
      count -= 1;
      value.innerText = count;
    }
  }

  btn.addEventListener("click", function () {
    count = 0;
    value.innerText = count;
  });

  document.getElementById("delete").addEventListener("click", deleteListener);
  function deleteListener() {
    sum = 0;
    document.getElementById("number").innerText = 0;
    document.getElementById("finalPrice").innerText = 0;
    document.getElementById("emptyCart").classList.remove("hidden");
    document.getElementById("fullCart").classList.add("hidden");
    document.querySelector(".product-quantity").classList.add("hidden");
  }

  document.querySelectorAll(".product").forEach(function (el) {
    el.addEventListener("click", function () {
        document.getElementById("popUp").classList.remove("hidden");
        let outlineNumber = document.querySelectorAll('.product:not(.hidden)')[1].dataset.number;
        document.querySelector('.thumbnail-popup[data-img="img' + outlineNumber + '"]').classList.add('outline');
    });
  });

  document.querySelectorAll(".thumbnail").forEach(function (thumbnail) {
    thumbnail.addEventListener("click", function (e) {
      document.querySelectorAll(".thumbnail").forEach(function (thumbBtn) {
        thumbBtn.classList.remove("outline");
      });

      e.target.classList.add("outline");
      
      document.querySelectorAll(".product").forEach(function (el) {
        el.classList.add("hidden");
      });

      let bigImgs = document.querySelectorAll("." + e.target.dataset.img);
      bigImgs.forEach(function (el){
        el.classList.remove("hidden");
      });
    });
  });

  document.getElementById('close').addEventListener('click', function(){
    document.getElementById('popUp').classList.add('hidden');
  })

  document.querySelector('#next').addEventListener('click', showNext);
  document.querySelector('#previous').addEventListener('click', showPrev);

  function showNext() {
    let el = document.querySelector('.product-popup:not(.hidden)');
    let outlineEl = document.querySelector('.thumbnail-popup.outline');
    let currentNumber = Number(el.dataset.number);
    let currentOutline = Number(outlineEl.dataset.outline);
    outlineEl.classList.remove('outline');
    el.classList.add('hidden');

    if (currentNumber < 4) {
      document.querySelector('[data-number="' + (currentNumber + 1) + '"]').classList.remove('hidden');
      document.querySelector('[data-outline="' + (currentOutline + 1) + '"]').classList.add('outline');
    } else {
      document.querySelector('[data-number="1"]').classList.remove('hidden');
      document.querySelector('[data-outline="1"]').classList.add('outline');
    }
  }

  function showPrev() {
    let el = document.querySelector('.product-popup:not(.hidden)');
    let outlineEl = document.querySelector('.thumbnail-popup.outline');
    let currentNumber = Number(el.dataset.number);
    let currentOutline = Number(outlineEl.dataset.outline);
    el.classList.add('hidden');
    outlineEl.classList.remove('outline');

    if (currentNumber !== 1) {
      document.querySelector('[data-number="' + (currentNumber - 1) + '"]').classList.remove('hidden');
      document.querySelector('[data-outline="' + (currentOutline - 1) + '"]').classList.add('outline');
    } else {
      document.querySelector('[data-number="4"]').classList.remove('hidden');
      document.querySelector('[data-outline="4"]').classList.add('outline');
    }
  }

  window.onload = function() {
    overlay();
   };

   function overlay() {
     if (window.innerWidth <= 1022) {
      document.querySelector('.mainSection').classList.add('hidden');
      document.getElementById('popUp').classList.remove('hidden');
     }
   };

   document.getElementById('menu').addEventListener('click', function(){
    document.getElementById('navigationPopup').classList.remove('hidden');
   })

   document.getElementById('closeMenu').addEventListener('click', function(){
    document.getElementById('navigationPopup').classList.add('hidden');
   })
});