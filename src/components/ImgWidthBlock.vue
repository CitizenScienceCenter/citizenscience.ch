<template>
  <div
    v-if="br.visible"
    class="only-img row row-full-width extra-margin-bottom scroll-effect scroll-effect-delayed-3 "
    :class="img_position"
  >
    <div :class="[img_width]">
      <img
        :class="[{ rounded: br.rounded }, img_height]"
        :src="contentData.image"
        :alt="contentData.alt"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImgWidthBlock",
  data() {
    return {
      br: {
        visible: false,
        position: "start",
        width: 50,
        height: 50,
        rounded: false,
      },
      contentData: {},
      img_width: "col-9",
      img_height: "img-50",
      img_position: null,
    };
  },
  props: {
    content: Object,
    viewConfig: Object,
  },
  methods: {
    loadStyle() {
      for (const key in this.viewConfig) {
        if (Object.keys(this.br).includes(key)) {
          this.br[key] = this.viewConfig[key];
        }
      }
    },
    validateStyle() {
      // image width standarization
      if (this.br.width <= 25) this.img_width = "col-3";
      else if (this.br.width <= 50) this.img_width = "col-6";
      else if (this.br.width <= 75) this.img_width = "col-9";
      else if (this.br.width <= 83) this.img_width = "col-10";
      else if (this.br.width <= 91) this.img_width = "col-11";
      else if (this.br.width <= 100) this.img_width = "col-12";

      // image height standarization
      if (this.br.height <= 25) this.img_height = "img-25";
      else if (this.br.height <= 50) this.img_height = "img-50";
      else if (this.br.height <= 70) this.img_height = "img-70";
      else if (this.br.height <= 80) this.img_height = "img-80";
      else if (this.br.height <= 90) this.img_height = "img-90";
      else if (this.br.height <= 100) this.img_height = "img-100";

      if (this.br.position == "center") this.img_position = "row-centered";
      else if (this.br.position == "end") this.img_position = "row-end";
      else this.img_position = null;
    },
  },
  created() {
    this.loadStyle();
    this.validateStyle();
    this.contentData = this.content;
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";

.only-img {
  padding-bottom: $spacing-5;
  img {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  .img-25 {
    height: 25vh;
  }
  .img-50 {
    height: 50vh;
  }
  .img-70 {
    height: 70vh;
  }
  .img-80 {
    height: 80vh;
  }
  .img-90 {
    height: 90vh;
  }
  .img-100 {
    height: 100vh;
  }
  .rounded {
    border-radius: 5%;
  }
}
</style>
