<i18n>
{
  "en": {
    "label-email": "Email Address",
    "label-firstname": "First Name",
    "label-lastname": "Last Name",
    "button-submit": "Sign up"
  },
  "de": {
    "label-email": "Email Adresse",
    "label-firstname": "Vorname",
    "label-lastname": "Nachname",
    "button-submit": "Anmelden"
  }
}
</i18n>

<template>
  <div class="newsletter-signup">

    <div class="row">
      <div class="col">

        <form action="https://citizenscience.us17.list-manage.com/subscribe/post?u=32303d2adcf28a2820c5f9165&amp;id=6dc5028399" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>

        <div class="form-field">
          <label for="mce-EMAIL">{{ $t('label-email') }}</label>
          <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
        </div>

        <div class="form-field">
          <label for="mce-FNAME">{{ $t('label-firstname') }}</label>
          <input type="text" value="" name="FNAME" class="" id="mce-FNAME">
        </div>

        <div class="form-field">
          <label for="mce-LNAME">{{ $t('label-lastname') }}</label>
          <input type="text" value="" name="LNAME" class="" id="mce-LNAME">
        </div>

        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_32303d2adcf28a2820c5f9165_6dc5028399" tabindex="-1" value=""></div>
        <button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button button-primary">{{ $t('button-submit') }}</button>

        </form>

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
  text-align: center;

  .form-field {
    display: block;
    margin-bottom: $spacing-4;
  }

}

@media only screen and (min-width: $viewport-mobile-large) {
  .newsletter-signup {

  }
}

@media only screen and (min-width: $viewport-tablet-portrait) {
  .newsletter-signup {
    margin-bottom: $spacing-5;

  }
}

@media only screen and (min-width: $viewport-large) {
  .newsletter-signup {

    .form-field {
      margin: $spacing-1;
      display: inline-block;
      width: 20%;
    }
  }
}

</style>
