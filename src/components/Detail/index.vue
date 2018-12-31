<template src="./index.pug" lang="pug"></template>

<script>
export default {
  name: "detail",
  props: {
    title: String,
    isVisible: Boolean,
    onClick: Function
  },
  mounted() {
    // tabs
    const buttonsTab = document.querySelectorAll(".button-tab");
    buttonsTab.forEach(ele =>
      ele.addEventListener("click", e => {
        const target = e.target;
        document
          .querySelectorAll("[data-tab]")
          .forEach(tabs => tabs.classList.add("hide"));
        document.querySelector(".button-tab.active").classList.remove("active");
        document
          .querySelector(`[data-tab=${target.dataset.tabActive}]`)
          .classList.remove("hide");
        target.classList.add("active");
      })
    );

    // dropdown
    const dropdown = document.querySelector(".dropdown");
    document.querySelector(".button-dropdown").addEventListener("click", () => {
      dropdown.classList.toggle("open");
    });

    // custom components
    const inputColor = document.querySelector("#inputColor");
    const inputBackgroundColor = document.querySelector(
      "#inputBackgroundColor"
    );
    const bigCard = document.querySelector(".big-card");

    inputColor.addEventListener("change", e => {
      const color = e.target.value;
      bigCard.style.setProperty("--color", color);
    });

    inputBackgroundColor.addEventListener("change", e => {
      const color = e.target.value;
      bigCard.style.setProperty("--bg-color", color);
    });
  }
};
</script>

<style src="./index.scss" lang="scss" scoped></style>
