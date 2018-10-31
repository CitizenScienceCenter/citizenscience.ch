<i18n>
{
  "en": {
    "subheading-directors": "Directors",
    "subheading-advisors": "Advisors",
    "subheading-team": "Team",

    "people-avi-position": "Department of Informatics – University of Zurich",
    "people-mike-position": "Department of Psychology Gerontopsychology - University of Zurich",
    "people-michael-position": "Department of Health Sciences and Technology - ETH Zurich",
    "people-kevin-position": "Department of Physics - ETH Zurich",

    "people-ernst-position": "Department of Biology - ETH Zurich",
    "people-dirk-position": "Department of Humanities, Social and Political Sciences - ETH Zurich",
    "people-effy-position": "Department of Health Sciences and Technology - ETH Zurich",

    "people-marina-position": "Admin Assistant",
    "people-chris-position": "Developer",
    "people-fanny-position": "Community Manager",
    "people-rosy-position": "Managing Director",
    "people-marcel-position": "UX Designer / Frontend Developer"
  },
  "de": {
    "subheading-directors": "Direktorium",
    "subheading-advisors": "Beraterinnen und Berater",
    "subheading-team": "Team",

    "people-avi-position": "Department of Informatics – University of Zurich",
    "people-mike-position": "Department of Psychology Gerontopsychology - University of Zurich",
    "people-michael-position": "Department of Health Sciences and Technology - ETH Zurich",
    "people-kevin-position": "Department of Physics - ETH Zurich",

    "people-ernst-position": "Department of Biology - ETH Zurich",
    "people-dirk-position": "Department of Humanities, Social and Political Sciences - ETH Zurich",
    "people-effy-position": "Department of Health Sciences and Technology - ETH Zurich",

    "people-marina-position": "Admin Assistant",
    "people-chris-position": "Developer",
    "people-fanny-position": "Community Manager",
    "people-rosy-position": "Managing Director",
    "people-marcel-position": "UX Designer / Frontend Developer"
  }
}
</i18n>


<template>

  <div class="people-list">

    <h3 class="subheading">{{ $t('subheading-directors') }}</h3>

    <div class="row">
      <div class="col col-quarter centered">
        <img src="img/people/avi.jpg" class="photo"/>
        <span class="name">Avi Bernstein</span>
        <span class="position">{{ $t('people-avi-position') }}</span>
        <a href="mailto:bernstein@ifi.uzh.ch">bernstein@ifi.uzh.ch</a>
      </div>
      <div class="col col-quarter centered">
        <img src="img/people/mike.jpg" class="photo"/>
        <span class="name">Mike Martin</span>
        <span class="position">{{ $t('people-mike-position') }}</span>
        <a href="mailto:m.martin@psychologie.uzh.ch">m.martin@psychologie.uzh.ch</a>
      </div>
      <div class="col col-quarter centered">
        <img src="img/people/michael.jpg" class="photo"/>
        <span class="name">Michael Ristow</span>
        <span class="position">{{ $t('people-michael-position') }}</span>
        <a href="mailto:michael-ristow@ethz.ch">michael-ristow@ethz.ch</a>
      </div>
      <div class="col col-quarter centered">
        <img src="img/people/kevin.jpg" class="photo"/>
        <span class="name">Kevin Schawinski</span>
        <span class="position">{{ $t('people-kevin-position') }}</span>
      </div>
    </div>

    <h3 class="subheading">{{ $t('subheading-advisors') }}</h3>

    <div class="row">
      <div class="col col-quarter centered">
        <img src="img/people/ernst.jpg" class="photo"/>
        <span class="name">Ernst Hafen</span>
        <span class="position">{{ $t('people-ernst-position') }}</span>
        <a href="mailto:hafen@imsb.biol.ethz.ch">hafen@imsb.biol.ethz.ch</a>
      </div>
      <div class="col col-quarter centered">
        <img src="img/people/dirk.jpg" class="photo"/>
        <span class="name">Dirk Helbing</span>
        <span class="position">{{ $t('people-dirk-position') }}</span>
        <a href="mailto:dirk.helbing@gess.ethz.ch">dirk.helbing@gess.ethz.ch</a>
      </div>
      <div class="col col-quarter centered">
        <img src="img/people/effy.jpg" class="photo"/>
        <span class="name">Effy Vayena</span>
        <span class="position">{{ $t('people-effy-position') }}</span>
        <a href="mailto:effy.vayena@hest.ethz.ch">effy.vayena@hest.ethz.ch</a>
      </div>
    </div>

    <h3 class="subheading">{{ $t('subheading-team') }}</h3>

    <div class="row">
      <div class="col col-quarter centered">
        <img src="img/people/marina.jpg" class="photo"/>
        <span class="name">Marina Gagetti</span>
        <span class="position">{{ $t('people-marina-position') }}</span>
        <a href="mailto:marina.gagetti@zfg.uzh.ch">marina.gagetti@zfg.uzh.ch</a>
      </div>
      <div class="col col-quarter centered">
        <img src="img/people/chris.jpg" class="photo"/>
        <span class="name">Chris Gwilliams</span>
        <span class="position">{{ $t('people-chris-position') }}</span>
        <a href="mailto:christopher.gwilliams@uzh.ch ">christopher.gwilliams@uzh.ch</a>
      </div>
      <div class="col col-quarter centered">
        <img src="img/people/fanny.jpg" class="photo"/>
        <span class="name">Fanny Jones</span>
        <span class="position">{{ $t('people-fanny-position') }}</span>
        <a href="mailto:fanny.jones@uzh.ch">fanny.jones@uzh.ch</a>
      </div>
    </div>
    <div class="row">
      <div class="col col-quarter centered">
        <img src="img/people/rosy.jpg" class="photo"/>
        <span class="name">Rosy Mondardini</span>
        <span class="position">{{ $t('people-rosy-position') }}</span>
        <a href="mailto:maria.mondardini@uzh.ch">maria.mondardini@uzh.ch</a>
      </div>
      <div class="col col-quarter centered">
        <img src="img/people/marcel.jpg" class="photo"/>
        <span class="name">Marcel Tanner</span>
        <span class="position">{{ $t('people-marcel-position') }}</span>
        <a href="mailto:marcel.tanner@uzh.ch">marcel.tanner@uzh.ch</a>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'PeopleList'
}
</script>

<style lang="scss">

@import '@/variables.scss';


.people-list {

  margin-bottom: $spacing-4;

  .photo {
    width: 25%;
    border-radius: 50%;
    margin-bottom: $spacing-2;
  }

  .name, .position, a {
    display: block;
  }

  .col-quarter {
    width: 100%;
    margin-bottom: $spacing-5;
  }
  .row {

  }

}

@media only screen and (min-width: $viewport-tablet-portrait) {
  .people-list {
    margin-bottom: $spacing-5;

    .photo {
      width: 33.333%;
    }

    .col-quarter {
      width: 50%;
      margin-bottom: $spacing-5;
    }
  }
}

@media only screen and (min-width: $viewport-large) {
  .people-list {

    .photo {
      width: 50%;
    }

    .col-quarter {
      width: 25%;
    }
  }
}

</style>
