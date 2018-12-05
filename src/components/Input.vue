<template lang="pug">
  .input-section-container
    #input-1.input-container
      span.input-subtitle Input 1
      .input-wrapper
        input.input-base(type='email')
        label.input-label Email
    #input-2.input-container
      span.input-subtitle Input 2
      label.inp(for='inp')
        input#inp(type='text' placeholder=' ')
        span.label Label
        span.border
    #input-3.input-container
      span.input-subtitle Input 3
      .Input
        input#input.Input-text(type='text' placeholder='Your first name, e.g. Nicholas')
        label.Input-label(for='input') First name
    #input-4.input-container
      span.input-subtitle Input 4
      .Input
        .form-wrap
          .input-container
            label.label4(for='mail') Email address
            input.input4(type='email' name='mail' autocomplete='off')
          svg.line.svg4
</template>
<script>
import '../../scripts/input'
export default {

}
</script>

<style lang="scss" scoped>
@import './input/scss/input1';
@import './input/scss/input2';
@import './input/scss/input3';
@import './input/scss/input4';

.input-section-container {
  padding: 40px;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.input-subtitle {
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 20px;
}
</style>

