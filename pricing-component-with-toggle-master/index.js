const checkboxPricing = document.querySelector(".checkbox input");
checkboxPricing.onchange = () => {
  if (checkboxPricing.checked) {
    document.querySelector(
      ".basic h1"
    ).innerHTML = `<span class="dollar">&dollar; </span>19.99`;
    document.querySelector(
      ".professional h1"
    ).innerHTML = `<span class="dollar">&dollar; </span>24.99`;
    document.querySelector(
      ".master h1"
    ).innerHTML = `<span class="dollar">&dollar; </span>39.99`;
  } else {
    document.querySelector(
      ".basic h1"
    ).innerHTML = `<span class="dollar">&dollar; </span>199.99`;
    document.querySelector(
      ".professional h1"
    ).innerHTML = `<span class="dollar">&dollar; </span>249.99`;
    document.querySelector(
      ".master h1"
    ).innerHTML = `<span class="dollar">&dollar; </span>399.99`;
  }
};
