<template lang="pug">
  .buttons
    .btn-group.btn-group-1
      button.btn.btn-1(disabled='')
        .btn__content
          | cancel
      button.btn.btn-1
        .btn__content
          | submit
    .btn-group.btn-group-2
      button.btn.btn-2(disabled='')
        .btn__content
          | cancel
      button.btn.btn-2
        .btn__content
          | submit
    .btn-group.btn-group-3
      button.btn.btn-3(disabled='')
        .btn__content
          | cancel
      button.btn.btn-3
        .btn__content
          | submit
    .btn-group.btn-group-4
      button.btn.btn-4(disabled='')
        .btn__content
          | cancel
      button.btn.btn-4
        .btn__content
          | submit
    .btn-group.btn-group-5
      button.btn.btn-5(disabled='')
        .btn__content
          | cancel
      button.btn.btn-5
        .btn__content
          | submit
</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
  @import './button/scss/btn-1';
  @import './button/scss/btn-2';
  @import './button/scss/btn-3';
  @import './button/scss/btn-4';
  @import './button/scss/btn-5';

  button.btn,
  button.btn:active,
  button.btn:focus {
    outline: none;
  }

  button.btn:disabled {
    cursor: not-allowed;
  }

  .btn-group {
    display: flex;
    padding: 10px;
    margin: 10px;

    .btn {
      margin: 5px;
    }
  }

  .buttons {
    --btn-radius: 130px;
    --btn-border-radius: 0;
    --btn-border: 2px;
    --btn-color-1: #DF0000;
    --btn-color-2: #AD0000;
    --btn-text-color: #FFFFFF;
    --btn-font-size: 10pt;
    --btn-trn-duration: 150ms;

    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
</style>
