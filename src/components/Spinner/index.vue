<template src="./index.pug" lang="pug"></template>

<script>
const Card = () => import("../Card/index");
const Detail = () => import("../Detail/index");

export default {
  data: () => ({
    titleSelected: "",
    showDetail: false
  }),
  components: {
    Card,
    Detail
  },
  methods: {
    onShowDetail(value) {
      this.titleSelected = value;
      this.showDetail = true;
    },
    onCloseDetail() {
      this.showDetail = false;
    }
  }
};
</script>

<style src="./index.scss" lang="scss" scoped></style>
