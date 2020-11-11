<i18n>
    {
    "en": {
    "submit-button": "Submit"
    },
    "de": {
    "submit-button": "Aktualisieren"
    }
    }
</i18n>
<template>
  <div class="row row-centered">
    <div class="col col-10 col-tablet-portrait-8">
      <div class="row">
        <input
          type="file"
          id="file"
          ref="file"
          v-on:change="handleFileUpload()"
        />
      </div>
      <small v-show="!file">1. Please browse the file to submit</small>
    </div>
    <div class="col col-10 col-tablet-portrait-4">
      <select class="form-control" v-model="selected">
        <option v-for="item in items" :value="item" :key="item.file_name">
          {{ item.name }}
        </option>
      </select>
      <small v-show="!selected">2. Please select file type</small>
    </div>
    <div class="col col-10 col-tablet-portrait-4">
      <div class="button-group centered" v-show="file && selected">
        <button class="button button-primary-main" @click="submitFile()">
          {{ $t("submit-button") }}
        </button>
      </div>
    </div>
    <div class="col col-12 col-tablet-portrait-10 centered" v-if="error">
      <small>{{ error }}</small>
    </div>
    <div class="col col-12" v-if="file">
      <pre ref="code" v-html="getPrettyJson"></pre>
    </div>
  </div>
</template>

<script>
import { updateStringFile } from "@/minio.js";

export default {
  name: "UploadFile",
  data() {
    return {
      file: null,
      error: "",
      items: [
        { name: "Home - GC", file_name: "home-generic_content" },
        {
          name: "Contribute - GC",
          file_name: "contribute-generic_content",
        },
        { name: "Create - GC", file_name: "create-generic_content" },
        { name: "Cover List", file_name: "cover_list" },
        { name: "Events List", file_name: "events" },
        { name: "News List", file_name: "news" },
        { name: "Community - GC", file_name: "community-generic_content" },
        { name: "About - GC", file_name: "about-generic_content" },
        { name: "People List", file_name: "people" },
        { name: "Partnership List", file_name: "partnerships" },
      ],
      selected: "",
    };
  },
  computed: {
    // Beautify the json code for better lecture
    getPrettyJson() {
      try {
        let json = JSON.stringify(JSON.parse(this.file), undefined, 2);
        json = json
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
        json = json.replace(
          /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
          function(match) {
            var cls = "color: darkorange;";
            if (/^"/.test(match)) {
              if (/:$/.test(match)) {
                cls = "color: blue;";
              } else {
                cls = "color: green;";
              }
            } else if (/true|false/.test(match)) {
              cls = "color: red;";
            } else if (/null/.test(match)) {
              cls = "color: magenta;";
            }
            return '<span style="' + cls + '">' + match + "</span>";
          }
        );
        return json;
      } catch (e) {
        this.setErrorMessage(
          "JSON file contains following error. Please fix it before to submit"
        );
        return e;
      }
    },
  },
  methods: {
    getContent(file) {
      const promise = new Promise(function(resolve, reject) {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
      return promise;
    },
    async handleFileUpload() {
      this.error = null;
      this.selected = null;
      if (this.$refs.code) {
        this.$refs.code.innerHTML = null;
      }
      if (
        this.$refs.file.files[0] &&
        this.$refs.file.files[0].type !== "application/json"
      ) {
        this.setErrorMessage(
          "File is not a JSON type. Please select a valid JSON file"
        );
        return;
      }
      this.file = await this.getContent(this.$refs.file.files[0]);
    },
    submitFile() {
      if (confirm("Are you sure to submit the file?")) {
        updateStringFile(`data/${this.selected.file_name}`, this.file);
      } else {
        return;
      }
    },
    setErrorMessage(message) {
      this.error = message;
    },
  },
  created() {
    // sorting file names alphabetically
    this.items = this.items.sort((a, b) => (a.name > b.name ? 1 : -1));
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
@import "@/styles/shared/variables.scss";
small {
  color: red;
}
pre {
  font-size: $font-size-mini;
  overflow-x: auto;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.button-group {
  margin-top: $spacing-2;
}
</style>
