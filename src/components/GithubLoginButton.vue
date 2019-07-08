<template lang="pug" functional>
  a.github-login(:href='props.url')
    | Login with Github
</template>

<style lang="scss" scoped>
@import 'variables/colors';

.github-login {
  align-items: center;
  border: 1px solid $white;
  border-radius: 6px;
  color: $white;
  display: flex;
  height: 45px;
  justify-content: center;
  max-width: 200px;
  position: relative;
  width: 100%;

  &::before {
    background: url('../assets/github-light.png') no-repeat;
    background-size: 100%;
    content: '';
    height: 20px;
    position: relative;
    margin-right: 10px;
    width: 20px;
  }

  &:hover {
    background: $white;
    color: $black;

    &::before {
      background: url('../assets/github-dark.png') no-repeat;
      background-size: 100%;
    }
  }
}
</style>
