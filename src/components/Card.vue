<template lang="pug">
  .card.column.middle.center.full-width(:style='cardColor')
    .card-content.full-width.row.middle.center(v-bind:id='component.title')
    a.card-info.column.full-width(:href='detailURL' )
      h4.card-title.m-bottom-1
        | {{ displayableName }}
</template>

<script>
import { spacesToHyphen } from '../utils'

export default {
  props: {
    component: { type: Object, required: true },
    category: { type: String, required: true },
    number: { type: Number, required: true }
  },
  computed: {
    displayableName() {
      return this.component.title.replace('-', ' ')
    },
    detailURL() {
      const categoryParam = spacesToHyphen(this.category).toLowerCase()
      const componentParam = spacesToHyphen(this.component.title).toLowerCase()
      return `/detail?category=${categoryParam}&component=${componentParam}`
    },
    cardColor() {
      const colors = [ '#D25401', '#2A3E50', '#17BC9B', '#2880B9', '#FECB65', '#AA48EE', '#FF7293', '#CDD2D2' ]
      return {
        '--card-color': colors[ Math.floor(this.number % colors.length) ]
      }
    }
  },
  mounted() {
    const elem = document.querySelector(`#${this.component.title}`)
    const shadowRoot = elem.attachShadow({ mode: 'open' })
    shadowRoot.innerHTML = `${this.component.html}<style>${this.component.scss}</style>`
  }
}
</script>

<style lang="scss" scoped>
@import 'src/scss/variables/colors';
@import 'src/scss/variables/sizes';

$card-info-content: 45px;

@keyframes slideUp {
  100% { transform: translateY(-50px); }
}

.card {
  background-color: var(--card-color);
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba($black, 0.3);
  cursor: pointer;
  height: $card-height;
  max-width: $card-width;
  transition: box-shadow $transition-duration $transition-function;
  position: relative;

  &:hover {
    box-shadow: 2px 2px 5px rgba($black, 0.3);

    .card-info {
      display: flex;
      animation: slideUp 0.3s forwards ease;
    }
  }
}

.card-content {
  height: calc(100% - #{$card-info-content});
  position: relative;
}

.card-info {
  display: none;
  background-color: $white;
  border-radius: 5px;
  bottom: -$card-info-content;
  height: $card-info-content;
  padding: 16px;
  position: absolute;
  width: calc(100% - 10px);
}

.card-title {
  color: $black;
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
}

.author {
  font-size: 14px;
}

</style>
