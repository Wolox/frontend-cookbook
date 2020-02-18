<template lang="pug">
  .card.column.middle.center.full-width(:style='cardColor')
    .card-content.full-width.row.middle.center(v-bind:id='component.title')
    .card-info.column.full-width
      h4.card-title.m-bottom-2
        | {{ displayableName }}
      a.card-button(:href='detailURL')
        | Watch more...
</template>

<script>
import { spacesToHyphen } from "../utils";

export default {
  props: {
    component: { type: Object, required: true },
    category: { type: String, required: true },
    number: { type: Number, required: true },
    disabled: { type: Boolean, required: true, default: false }
  },
  computed: {
    displayableName() {
      return this.component.title.replace("-", " ");
    },
    detailURL() {
      if (!this.disabled) {
        const categoryParam = spacesToHyphen(this.category).toLowerCase();
        const componentParam = spacesToHyphen(
          this.component.title
        ).toLowerCase();
        return `/detail?category=${categoryParam}&component=${componentParam}`;
      }
      return "/";
    },
    cardColor() {
      const colors = [
        "#D25401",
        "#2A3E50",
        "#17BC9B",
        "#2880B9",
        "#FECB65",
        "#AA48EE",
        "#FF7293",
        "#CDD2D2"
      ];
      return {
        "--card-color": colors[Math.floor(this.number % colors.length)]
      };
    }
  },
  mounted() {
    const elem = document.querySelector(`#${this.component.title}`);
    const shadowRoot = elem.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `${this.component.html}<style>${this.component.css}</style>`;
  }
};
</script>

<style lang="scss" scoped>
@import "variables/colors";
@import "variables/sizes";
$card-info-content: 70px;

.card {
  background-color: var(--card-color);
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba($black, 0.3);
  height: 255px;
  max-width: 255px;
  position: relative;
  transition: box-shadow $transition-duration $transition-function;
}

.card-content {
  height: calc(100% - #{$card-info-content});
  position: relative;
}

.card-info {
  background-color: $white;
  border-radius: 0 0 5px 5px;
  color: $black;
  display: flex;
  height: $card-info-content;
  padding: 16px;
  width: 100%;
}

.card-button {
  align-self: start;
  color: $sidebar-blue;
  font-weight: 600;
  text-decoration: underline;
  transition: color $transition-duration $transition-function;

  &:hover {
    color: $science-blue;
  }
}

.card-title {
  color: inherit;
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
}
</style>
