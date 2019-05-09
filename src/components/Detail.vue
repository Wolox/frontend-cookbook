<template lang="pug">
  #detail(:class="{ visible: isVisible }")
    div
      button.button-title(@click='onClick()')
        i.fas.fa-long-arrow-alt-left.icon
      h2.title {{title}}
    .big-card
      a.card-header-link
        i.fab.fa-github.icon
        | mcallegari10
      button.button-dropdown
        i.fas.fa-cog
      .dropdown
        h6.dropdown-title Configure your component
        .dropdown-content
          span Colors
          .control-form
            label(for='inputColor') Theme color
            input#inputColor.input(type='color' name='changeColor' value='#333333')
          .control-form
            label(for='inputBackgroundColor') Background color
            input#inputBackgroundColor.input(type='color' name='changeBackgroundColor' value='#D0D1D4')
        .dropdown-content
          span Sizes (px)
          .control-form
            label(for='inputFontSize') Font size
            input#inputFontSize.input(type='text' name='changeFontSize' value='14')
      .spinner
        h4.spinner-text Loading...
    .big-card
      .card-header
        button.button-tab.active(data-tab-active='html') html
        button.button-tab(data-tab-active='scss') scss
        button.button-tab(data-tab-active='js') js
      .card-content
        p(data-tab='html')
          | Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos laborum, quas cumque distinctio ea recusandae repudiandae nesciunt saepe assumenda reiciendis ipsam dignissimos eaque consequatur, impedit explicabo eius, praesentium dolorum doloremque.
        p.hide(data-tab='scss')
          | Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique architecto, laboriosam incidunt sed sapiente delectus earum doloremque nam maiores voluptas possimus iste laborum autem libero eveniet aliquid ad! Voluptatibus, aspernatur.
          | Animi atque similique sunt. Voluptatibus accusamus quis at, quia ex rerum inventore culpa commodi soluta nisi iure debitis atque, fugiat consequatur dolores, numquam enim nam. Ipsum adipisci reiciendis facere nihil!
          | Alias odit suscipit illo magni debitis labore? Ipsum excepturi enim culpa at, sapiente libero beatae! Excepturi, neque voluptates in repudiandae doloribus aperiam nobis distinctio iusto esse nostrum earum labore blanditiis.
          | Voluptatibus quidem delectus, dignissimos architecto dicta reprehenderit odio quam velit quod, doloribus tempora repudiandae nemo soluta accusamus ab repellat unde sed animi nam aut illum porro. Ea impedit animi iure.
          | Voluptatibus nisi incidunt at voluptate officia pariatur, magnam, molestias, nemo quibusdam saepe quo soluta explicabo placeat dolor porro consequuntur consectetur consequatur deserunt fugit quos. Possimus nulla laborum nesciunt ipsum voluptatibus.
          | Blanditiis quasi maxime beatae mollitia quo dolorem veritatis placeat pariatur optio voluptas, animi eos at deserunt ducimus non expedita quia excepturi unde dolorum autem nesciunt perspiciatis? Consectetur ipsum vitae illum.
        p.hide(data-tab='js')
          | Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aut labore. Enim suscipit, doloremque soluta dolore illum blanditiis, culpa ullam eos non necessitatibus ad eius tempora, aspernatur dolorum voluptate ex.Excepturi temporibus ad dolores iste voluptatibus nesciunt quaerat commodi, provident possimus perspiciatis ducimus autem porro reprehenderit. Unde eaque blanditiis fuga ipsa. Eius quia fugiat tempore rem laudantium ut ullam officiis!
      .card-footer
        button.button-footer Copy the code
</template>

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

<style lang="scss" scoped>
@import 'src/scss/variables/colors';
@import 'src/scss/variables/sizes';

#detail {
  background-color: $porcelain;
  height: 100vh;
  padding: 0 14px;
  position: absolute;
  top: 0;
  transform: translateY(-550%);
  transition: transform $transition-duration $transition-function;
  z-index: 1;

  &.visible {
    transform: translateY(0);
  }
}

.button-title {
  transition: color $transition-duration $transition-function;

  &:hover {
    color: $blue;
  }
}

.big-card {
  --color: #333;
  --bg-color: #D0D1D4;

  background-color: var(--bg-color);
  border-radius: 4px;
  box-shadow: 2px 2px 3px rgba($black, 0.2);
  height: #{$card-height * 1.5};
  margin: 14px 0;
  position: relative;
  width: 100%;
}

.card-header-link {
  align-items: center;
  background-color: $white;
  border-radius: 4px 4px 0 0;
  display: inline-flex;
  font-size: $text-small;
  padding: 7px;
  position: absolute;
  right: 0;
  top: -35px;

  &:hover {
    color: $blue;
  }
}

.icon {
  font-size: $text-big;
  margin-right: 5px;
}

.card-header {
  background-color: $white;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  justify-content: space-between;
}

.button-tab {
  border: 1px solid $gray;
  flex: 1;
  font-weight: bold;
  padding: 14px;
  text-transform: uppercase;
  transition: background-color $transition-duration $transition-function;

  &:hover,
  &.active {
    background-color: lighten($gray, 5%);
    color: $white;
  }

  &:first-child {
    border-right: none;
    border-top-left-radius: 4px;
  }

  &:last-child {
    border-left: none;
    border-top-right-radius: 4px;
  }
}

.card-content {
  height: #{$card-height * 1.1};
  overflow-y: auto;
  padding: 14px;

  & > p {
    line-height: 1.5;
  }
}

.card-footer {
  align-items: center;
  background-color: $white;
  display: flex;
  height: 50px;
  justify-content: center;
}

.button-footer {
  background-color: $porcelain;
  border-radius: 4px;
  font-weight: bold;
  padding: 7px 14px;
  transition: color $transition-duration $transition-function;

  &:hover {
    color: $blue;
  }
}

.hide {
  display: none;
}

.button-dropdown {
  background-color: $white;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 2px 2px 3px rgba($black, 0.2);
  padding: 7px 14px;
  transition: color $transition-duration $transition-function;

  &:hover {
    color: $blue;
  }
}

.dropdown {
  background-color: $white;
  border-radius: 4px;
  box-shadow: 2px 2px 3px rgba($black, 0.2);
  left: 0;
  max-width: 100%;
  padding: 14px;
  position: absolute;
  top: 30px;
  transform: scale(0, 0);
  transform-origin: 0 0;
  transition: transform $transition-duration $transition-function;
  width: 300px;

  &.open {
    transform: scale(1, 1);
  }
}

.dropdown-title {
  font-weight: bold;
}

.dropdown-content {
  border-bottom: 1px solid $gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 14px 0;
  padding-bottom: 14px;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
}

.control-form {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-left: 10px;
}

.input {
  border: 1px solid darken($gray, 5%);
  cursor: pointer;
  height: 30px;
  text-align: center;
  width: 50px;
}

// TODO delete this when there is a way to pass the styles
.spinner {
  height: 80px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 40%;
  width: 80px;

  &::before,
  &::after {
    animation: spinner1 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    border: 4px solid var(--color);
    border-radius: 50%;
    content: '';
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
  }

  &::before {
    height: 50px;
    top: 10px;
    width: 50px;
  }

  &::after {
    animation-delay: -0.5s;
    height: 70px;
    width: 70px;
  }
}

.spinner-text {
  bottom: -14px;
  color: var(--color);
  font-size: 12px;
  left: 0;
  position: absolute;
  right: 0;
  text-align: center;
}

@keyframes spinner1 {
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
