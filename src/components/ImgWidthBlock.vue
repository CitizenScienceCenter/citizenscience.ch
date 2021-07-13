<template>
  <content-section
    v-if="br.visible"
    class="only-img row row-full-width scroll-effect scroll-effect-delayed-3"
    :class="img_position"
  >
    <div :class="[img_width]">
      <img
        fluid-grow
        :class="[{ rounded: br.rounded }, img_height]"
        :src="contentData.image"
        :alt="contentData.alt"
      />
    </div>
  </content-section>
</template>

<script>
import ContentSection from "@/components/shared/ContentSection.vue";

export default {
  name: "ImgWidthBlock",
  components: { ContentSection },
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
      else if (this.br.width <= 58) this.img_width = "col-7";
      else if (this.br.width <= 66) this.img_width = "col-8";
      else if (this.br.width <= 75) this.img_width = "col-9";
      else if (this.br.width <= 83) this.img_width = "col-10";
      else if (this.br.width <= 91) this.img_width = "col-11";
      else if (this.br.width <= 100) this.img_width = "col-12";

      // image height standarization
      if (this.br.height <= 50) this.img_height = "img-50";
      else if (this.br.height <= 60) this.img_height = "img-60";
      else if (this.br.height <= 70) this.img_height = "img-70";
      else if (this.br.height <= 80) this.img_height = "img-80";
      else if (this.br.height <= 90) this.img_height = "img-90";
      else if (this.br.height <= 100) this.img_height = "img-100";

      if (this.br.position == "center") this.img_position = "row-centered";
      else if (this.br.position == "end") this.img_position = "row-end";
      else this.img_position = null;
    },
    trigger(msg) {
      alert(msg);
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
  padding-top: $spacing-2;
  img {
    margin-left: auto;
    margin-right: auto;
    height: auto;
    width: 100%;
    transform: scale(1.3);
  }
  .rounded {
    border-radius: 5%;
  }
}
@media only screen and (min-width: $viewport-mobile-large) {
  .only-img {
    img {
      transform: scale(1.2);
    }
  }
}
@media only screen and (min-width: $viewport-tablet-portrait) {
  .only-img {
    img {
      transform: scale(1) !important;
    }
    .img-50 {
      max-height: 50vh;
      max-width: 50%;
    }
    .img-60 {
      max-height: 60vh;
      max-width: 60%;
    }
    .img-70 {
      max-height: 70vh;
      max-width: 70%;
    }
    .img-80 {
      max-height: 80vh;
      max-width: 80%;
    }
    .img-90 {
      max-height: 90vh;
      max-width: 90%;
    }
    .img-100 {
      max-height: 100vh;
    }
  }
}
</style>
