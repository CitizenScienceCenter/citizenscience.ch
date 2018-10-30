<template>
  <!--
  <div class="newsletter-signup">
    <div class="row">
      <div class="col">
        <div class="form-field">
          <label>Email</label>
          <input type="text" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col col-50">
        <div class="form-field">
          <label>First Name</label>
          <input type="text" />
        </div>
      </div>
      <div class="col col-50">
        <div class="form-field">
          <label>Last Name</label>
          <input type="text" />
        </div>
      </div>

      <div class="col">
        <div class="form-field">
          <label>Last Name</label>
          <div class="custom-select">
            <select>
              <option>just for styling</option>
              <option>blabla</option>
            </select>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
               <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1
            	C100.6,213.5,109.5,192,127.3,192z"/>
            </svg>
          </div>
        </div>
      </div>

    </div>
    <div class="row">
      <div class="col centered">
        <button class="button button-primary">Submit</button>
      </div>
    </div>
  </div>
-->

<div>
  <form v-if="!successMessage" @submit.prevent="subscribe($event)">
    <input v-model="email" name="EMAIL" type="text" placeholder="Email" id="email" />
    <input type="submit" class="button button-primary"/>
  </form>
  <p v-if="errorMessage && !successMessage" transition="fade">{{ errorMessage }}</p>
  <p v-if="successMessage" transition="fade">{{ successMessage }}</p>
</div>


</template>

<script>
export default {
  name: 'NewsletterSignup',
  props: {
    action: {
      required: true,
      type: String
    }
  },
  data: function() {
    return {
      email: '',
      response: {},
      errorMessage: null,
      successMessage: null
    };
  },
  ready: function() {
    return this.action = this.action.replace('/post?', '/post-json?').concat('&c=?');
  },
  methods: {
    subscribe: function(e) {
      var params;
      params = $(e.currentTarget).serialize();
      return $.ajax({
        type: 'POST',
        crossDomain: true,
        url: this.action,
        data: params,
        dataType: 'jsonp',
        success: (function(_this) {
          return function(res) {
            if (res.result === 'success') {
              return _this.successMessage = res.msg;
            } else {
              _this.errorMessage = res.msg;
              return _this.errorMessage = _this.errorMessage.substring(_this.errorMessage.indexOf('-') + 1, _this.errorMessage.length);
            }
          };
        })(this)
      });
    }
  }
}
</script>

<style lang="scss">

@import '@/variables.scss';


.newsletter-signup {

  margin-bottom: $spacing-4;

  .col-50 {
    width: 50%;
  }

  .form-field {
    width: 100%;
  }

}

@media only screen and (min-width: $viewport-tablet-portrait) {
  .newsletter-signup {
    margin-bottom: $spacing-5;
  }
}

</style>
