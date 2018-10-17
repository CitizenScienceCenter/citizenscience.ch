<template>
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
    </div>
    <div class="row">
      <div class="col centered">
        <button class="button button-primary">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsletterSignup'
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
