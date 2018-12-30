<template lang="pug">
  .sidebar
    .sidebar-header
      img.sidebar-image(src="https://bit.ly/2VcQGe3" alt="Wolox logo")
      h2.sidebar-title.text-big
        | Front End Cookbook
      button.button-comeback(data-ref="main-menu")
        i.fas.fa-long-arrow-alt-left all

    .container-relative
      .sidebar-content.active(data-menu="main-menu")
        button.item(data-parent="main-menu" data-ref="submenu-1")
          | Vegetables
          i.fas.fa-ellipsis-h.text-big
        button.item(@click="change()")
          | Input
        button.item(@click="change()")
          | TextArea
        button.item(@click="change('button-group')")
          | Button
        button.item(@click="change('progress-bar')")
          | Progress Bar
        button.item(@click="change('checkbox-group')")
          | Checkbox
        button.item(@click="change('radio-buttons')")
          | Radio Buttons
        button.item(@click="change()")
          | Select
        button.item(@click="change('spinner')")
          | Spinner
        button.item(@click="change()")
          | Slider
        button.item(data-parent="main-menu" data-ref="submenu-2")
          | Milk & Drinks
          i.fas.fa-ellipsis-h.text-big

      .sidebar-content(data-menu="submenu-1")
        button.item(data-parent="submenu-1" data-ref="submenu-1-1")
          | Vegetables 1.1
          i.fas.fa-ellipsis-h.text-big
        button.item Fruits 1.2
        button.item Grains 1.3

      .sidebar-content(data-menu="submenu-1-1")
        button.item Vegetables 1.1.1
        button.item Vegetables 1.1.2
        button.item Vegetables 1.1.3
        button.item Vegetables 1.1.4
        button.item Vegetables 1.1.5
    
      .sidebar-content(data-menu="submenu-2")
        button.item Milk & Drinks 1.1
        button.item Milk & Drinks 1.2
        button.item Milk & Drinks 1.3
      
    button.button-toggle-sidebar
      i.fas.fa-bars.text-big
</template>
<script>
export default {
  props: ["change"],
  mounted() {
    const sidebarContents = document.querySelectorAll(".sidebar-content");
    const items = sidebarContents.forEach(element =>
      element.querySelectorAll(".item").forEach(button =>
        button.addEventListener("click", e => {
          const target = e.target;
          const { ref, parent } = target.dataset;
          if (ref) {
            let transitionDelay = 0;
            const currentElement = document.querySelector(
              `[data-menu=${parent}]`
            );
            currentElement.querySelectorAll(".item").forEach(item => {
              item.style.setProperty(
                "transition-delay",
                `${transitionDelay}ms`
              );
              transitionDelay += 50;
            });
            currentElement.classList.remove("active");
            currentElement.classList.add("removed");

            const activeElement = document.querySelector(`[data-menu=${ref}]`);
            activeElement.querySelectorAll(".item").forEach(item => {
              item.style.setProperty(
                "transition-delay",
                `${transitionDelay}ms`
              );
              transitionDelay += 50;
            });
            activeElement.classList.remove("removed");
            activeElement.classList.add("active");
          }
        })
      )
    );

    document.querySelector(".button-comeback").addEventListener("click", e => {
      const currentElement = document.querySelector(
        `[data-menu=${e.target.dataset.ref}]`
      );
      const activeElement = document.querySelector(`[data-menu].active`);
      let transitionDelay = 0;

      activeElement.querySelectorAll(".item").forEach(item => {
        item.style.setProperty("transition-delay", `${transitionDelay}ms`);
        transitionDelay += 50;
      });
      currentElement.querySelectorAll(".item").forEach(item => {
        item.style.setProperty("transition-delay", `${transitionDelay}ms`);
        transitionDelay += 50;
      });

      currentElement.classList.remove("removed");
      activeElement.classList.remove("active");
      currentElement.classList.add("active");
    });

    const sidebar = document.querySelector(".sidebar");
    document
      .querySelector(".button-toggle-sidebar")
      .addEventListener("click", e => {
        sidebar.classList.toggle("open");
      });
  }
};
</script>
<style lang="scss" scoped>
@import '../scss/variables/_colors';
@import '../scss/variables/_sizes';

.sidebar {
  background-color: $white;
  height: 100vh;
  padding: 14px;
  position: fixed;
  transition: transform $transition-duration $transition-function;
  width: $sidebar-width;
  z-index: 1;
}

.sidebar-header {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.sidebar-image {
  width: 100px;
}

.sidebar-title {
  color: $gray;
  margin-bottom: 28px;
}

.container-relative {
  position: relative;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px);
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;

  &.active {
    pointer-events: all;
  }

  &.active > .item {
    transform: translateX(0);
  }

  &.removed > .item {
    transform: translateX(-#{$sidebar-width});
  }
}

.item {
  align-items: center;
  color: $gray;
  display: flex;
  justify-content: space-between;
  padding: 10px 14px;
  text-transform: uppercase;
  transform: translateX($sidebar-width);
  transition: transform $transition-duration $transition-function;

  &:hover {
    color: $blue;
  }
}

.text-big {
  font-size: $text-big;
}

.button-comeback {
  align-self: flex-start;
  color: $gray;
  font-size: $text-small;
  margin-bottom: 5px;
  margin-left: 14px;
  text-transform: uppercase;

  &:hover {
    color: $blue;
  }

   > i {
    pointer-events: none;
  }
}

.button-toggle-sidebar {
  background-color: $white;
  border-radius: 4px;
  box-shadow: 2px 2px 3px rgba($black, 0.2);
  display: none;
  padding: 4px 8px;
  position: fixed;
  right: -14px;
  top: 14px;
  transform: translateX(100%);
  transition: color $transition-duration $transition-function;

  &:hover {
    color: $blue;
  }
}

@media screen and (max-width: 720px) {
  .sidebar {
    transform: translateX(-100%);

    &.open {
      transform: translateX(0);
    }
  }

  .button-toggle-sidebar {
    display: block;
  }
}

</style>
