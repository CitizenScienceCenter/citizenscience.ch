<i18n>
{
  "en": {
    "subheading-directors-chair": "Chair of the Board of Directors",
    "subheading-directors": "Directors",
    "subheading-advisors": "Advisors",
    "subheading-team": "Team",
    "subheading-guest-researchers": "Researchers in Residence",
    "subheading-members": "Members",

    "people-abraham-position": "Department of Informatics – University of Zurich",
    "people-ernst-position": "Department of Biology - ETH Zurich",
    "people-mike-position": "Department of Psychology Gerontopsychology - University of Zurich",
    "people-michael-position": "Department of Health Sciences and Technology - ETH Zurich",
    "people-effy-position": "Department of Health Sciences and Technology - ETH Zurich",
    "people-claudia-position": "Institute of Complementary and Integrative Medicine - University of Zurich",

    "people-dirk-position": "Department of Humanities, Social and Political Sciences - ETH Zurich",

    "people-marina-position": "Admin Assistant",
    "people-chris-position": "Developer",
    "people-nikos-position": "Developer",
    "people-fanny-position": "Community Manager",
    "people-rosy-position": "Managing Director",
    "people-marcel-position": "UX Designer / Frontend Developer",
    "people-anna-position": "Researcher (Ethics)",

    "people-liesbet-position": "Post-doctoral Researcher, KU Leuven",
    "people-liesbet-duration": "June-Sep 2019",
    "people-clea-position": "Intern, Citizen Science Global Partnership",
    "people-clea-duration": "May-August 2019",

    "members-button-show": "Show all Members",
    "members-button-hide": "Hide all Members",
    "members-text": "Membership at the Citizen Science Center Zurich is open to professors with research groups at the two founding Institutions, leaders of research groups from other universities or public-legal institutions, and individual researchers and students.<br>Researchers at both UZH and ETHZ have a strong track record in citizen science, participatory research, and citizen science-related fields such as artificial intelligence, social science and the law. Currently the Center has a scientific community of more than 200 researchers in fields ranging epidemiology, psychology, geography, neurosciences, and more. Combining these researchers’ expertise represents a unique opportunity for synergy."
  },
  "de": {
    "subheading-directors-chair": "Vorsitzende",
    "subheading-directors": "Direktorium",
    "subheading-advisors": "Beraterinnen und Berater",
    "subheading-team": "Team",
    "subheading-guest-researchers": "Gastforscher",
    "subheading-members": "Mitglieder",

    "people-abraham-position": "Department of Informatics – University of Zurich",
    "people-ernst-position": "Department of Biology - ETH Zurich",
    "people-mike-position": "Department of Psychology Gerontopsychology - University of Zurich",
    "people-michael-position": "Department of Health Sciences and Technology - ETH Zurich",
    "people-effy-position": "Department of Health Sciences and Technology - ETH Zurich",
    "people-claudia-position": "USZ, Institut für Komplementäre und Integrative Medizin",

    "people-dirk-position": "Department of Humanities, Social and Political Sciences - ETH Zurich",

    "people-marina-position": "Admin Assistant",
    "people-chris-position": "Developer",
    "people-nikos-position": "Developer",
    "people-fanny-position": "Community Manager",
    "people-rosy-position": "Managing Director",
    "people-marcel-position": "UX Designer / Frontend Developer",
    "people-anna-position": "Forscherin (Ethik)",

    "people-liesbet-duration": "June-Sep 2019",
    "people-liesbet-position": "Postdoktorandin, KU Leuven",
    "people-clea-position": "Praktikantin, Citizen Science Global Partnership",
    "people-clea-duration": "May-August 2019",

    "members-button-show": "Alle Mitglieder anzeigen",
    "members-button-hide": "Mitglieder verbergen",
    "members-text": "Die Mitgliedschaft am Citizen Science Center Zürich steht Professorinnen und Professoren mit ihren Forschungsgruppen an den beiden Gründungsuniversitäten, Forschungsgruppenleitern von anderen Universitäten oder öffentlich-rechtlichen Institutionen, sowie auch einzelnen Forschenden und Studierenden offen.<br>Forschende an UZH und ETH haben umfangreiche Erfahrungen in Citizen Science, partizipativer Forschung und verwandten Bereichen, wie künstlicher Intelligenz, den Sozialwissenschaften und der Rechtswissenschaft. Das Center stützt sich auf eine wachsende wissenschaftliche Community von derzeit über 200 Forschenden aus den unterschiedlichsten Bereichen, wie Epidemiologie, Psychologie, Geographie und Neurowissenschaften – um nur einige zu nennen. Diese Kombination an Erfahrung und Kompetenzen ermöglicht einzigartige Synergien."
  }
}
</i18n>


<template>

  <div class="people-list">

    <h3 class="subheading centered">{{ $t('subheading-directors-chair') }}</h3>

    <div class="people-section">
      <div class="row row-centered row-wrapping">
        <div class="col col-tablet-portrait-6 col-large-3 col-wrapping">
          <div class="person centered">
            <img src="/img/people/mike.jpg" class="photo"/>
            <span class="name">Mike Martin</span>
            <span class="position">{{ $t('people-mike-position') }}</span>
            <a href="mailto:m.martin@psychologie.uzh.ch">m.martin@psychologie.uzh.ch</a>
          </div>
        </div>
        <div class="col col-tablet-portrait-6 col-large-3 col-wrapping">
          <div class="person centered">
            <img src="/img/people/michael.jpg" class="photo"/>
            <span class="name">Michael Ristow</span>
            <span class="position">{{ $t('people-michael-position') }}</span>
            <a href="mailto:michael-ristow@ethz.ch">michael-ristow@ethz.ch</a>
          </div>
        </div>
      </div>
    </div>

    <h3 class="subheading centered">{{ $t('subheading-directors') }}</h3>

    <div class="people-section">
      <div class="row row-centered row-wrapping">
        <div class="col col-tablet-portrait-6 col-large-3 col-wrapping">
          <div class="person centered">
            <img src="/img/people/abraham.jpg" class="photo"/>
            <span class="name">Abraham Bernstein</span>
            <span class="position">{{ $t('people-abraham-position') }}</span>
            <a href="mailto:bernstein@ifi.uzh.ch">bernstein@ifi.uzh.ch</a>
          </div>
        </div>
        <div class="col col-tablet-portrait-6 col-large-3 col-wrapping">
          <div class="person centered">
            <img src="/img/people/ernst.jpg" class="photo"/>
            <span class="name">Ernst Hafen</span>
            <span class="position">{{ $t('people-ernst-position') }}</span>
            <a href="mailto:hafen@imsb.biol.ethz.ch">hafen@imsb.biol.ethz.ch</a>
          </div>
        </div>
        <div class="col col-tablet-portrait-6 col-large-3 col-wrapping">
          <div class="person centered">
            <img src="/img/people/effy.jpg" class="photo"/>
            <span class="name">Effy Vayena</span>
            <span class="position">{{ $t('people-effy-position') }}</span>
            <a href="mailto:effy.vayena@hest.ethz.ch">effy.vayena@hest.ethz.ch</a>
          </div>
        </div>
        <div class="col col-tablet-portrait-6 col-large-3 col-wrapping">
          <div class="person centered">
            <img src="/img/people/claudia.jpg" class="photo"/>
            <span class="name">Claudia Witt</span>
            <span class="position">{{ $t('people-claudia-position') }}</span>
            <a href="mailto:claudia.witt@uzh.ch">claudia.witt@uzh.ch</a>
          </div>
        </div>
      </div>
    </div>

    <h3 class="subheading centered">{{ $t('subheading-advisors') }}</h3>

    <div class="people-section">
      <div class="row row-centered row-wrapping">
        <div class="col col-tablet-portrait-6 col-large-3 col-wrapping">
          <div class="person centered">
            <img src="/img/people/dirk.jpg" class="photo"/>
            <span class="name">Dirk Helbing</span>
            <span class="position">{{ $t('people-dirk-position') }}</span>
            <a href="mailto:dirk.helbing@gess.ethz.ch">dirk.helbing@gess.ethz.ch</a>
          </div>
        </div>
      </div>
    </div>

    <h3 class="subheading centered">{{ $t('subheading-team') }}</h3>

    <div class="people-section">

      <div class="row row-centered">
        <div class="col col-tablet-portrait-6 col-large-3 col-wrapping">
          <div class="person centered">
            <img src="/img/people/rosy.jpg" class="photo"/>
            <span class="name">Rosy Mondardini</span>
            <span class="position">{{ $t('people-rosy-position') }}</span>
            <a href="mailto:maria.mondardini@uzh.ch">maria.mondardini@uzh.ch</a>
          </div>
        </div>
        <div class="col col-tablet-portrait-6 col-large-3 col-wrapping">
          <div class="person centered">
            <img src="/img/people/fanny.jpg" class="photo"/>
            <span class="name">Fanny Gutsche Jones</span>
            <span class="position">{{ $t('people-fanny-position') }}</span>
            <a href="mailto:fanny.jones@uzh.ch">fanny.gutsche-jones@uzh.ch</a>
          </div>
        </div>
        <div class="col col-tablet-portrait-6 col-large-3 col-wrapping">
          <div class="person centered">
            <img src="/img/people/nikos.jpg" class="photo"/>
            <span class="name">Nikos Georgomanolis</span>
            <span class="position">{{ $t('people-nikos-position') }}</span>
            <a href="mailto:nikolaos.georgomanolis@uzh.chf">nikolaos.georgomanolis@uzh.ch</a>
          </div>
        </div>
        <!--
        <div class="col col-tablet-portrait-6 col-large-4 col-wrapping">
          <div class="person centered">
            <img src="/img/people/marcel.jpg" class="photo"/>
            <span class="name">Marcel Tanner</span>
            <span class="position">{{ $t('people-marcel-position') }}</span>
            <a href="mailto:marcel.tanner@uzh.ch">marcel.tanner@uzh.ch</a>
          </div>
        </div>
        -->
        <div class="col col-tablet-portrait-6 col-large-3 col-wrapping">
          <div class="person centered">
            <img src="/img/people/marina.jpg" class="photo"/>
            <span class="name">Marina Gagetti</span>
            <span class="position">{{ $t('people-marina-position') }}</span>
            <a href="mailto:marina.gagetti@zfg.uzh.ch">marina.gagetti@zfg.uzh.ch</a>
          </div>
        </div>
        <!--
        <div class="col col-tablet-portrait-6 col-large-4 col-wrapping">
          <div class="person centered">
            <img src="/img/people/anna.jpg" class="photo"/>
            <span class="name">Anna Jobin</span>
            <span class="position">{{ $t('people-anna-position') }}</span>
            <a href="mailto:marina.gagetti@zfg.uzh.ch">anna.jobin@hest.ethz.ch</a>
          </div>
        </div>
        -->
      </div>

    </div>


    <!--

    <h3 class="subheading centered">{{ $t('subheading-guest-researchers')}}</h3>

    <div class="people-section">

      <div class="row row-centered">
        <div class="col col-large-9">

          <div class="row row-centered">
            <div class="col col-tablet-portrait-6 col-large-4 col-wrapping">
              <div class="person centered">
                <img src="/img/people/liesbet.jpg" class="photo"/>
                <span class="name">Liesbet Jacobs</span>
                <span class="position">{{ $t('people-liesbet-position') }}</span>
                <span class="position">{{ $t('people-liesbet-duration') }}</span>
                <a href="mailto:maria.mondardini@uzh.ch">liesbet.jacobs@kuleuven.be</a>
              </div>
            </div>
            <div class="col col-tablet-portrait-6 col-large-4 col-wrapping">
              <div class="person centered">
                <img src="/img/people/clea.jpg" class="photo"/>
                <span class="name">Clea Montanari</span>
                <span class="position">{{ $t('people-clea-position') }}</span>
                <span class="position">{{ $t('people-clea-duration') }}</span>
                <a href="mailto:cleamonti95@gmail.com">cleamonti95@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    -->

    <div class="row row-centered">
      <div class="col col-large-6">
        <h3 class="subheading centered">{{ $t('subheading-members') }}</h3>
        <p v-html="$t('members-text')"></p>
        <div class="margin-bottom">
          <div class="button-group centered">
            <button class="button button-secondary button-icon" @click="showMembers = !showMembers">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                 <path d="M127.3,192h257.3c17.8,0,26.7,21.5,14.1,34.1L270.1,354.8c-7.8,7.8-20.5,7.8-28.3,0L113.2,226.1 C100.6,213.5,109.5,192,127.3,192z"/>
              </svg>
              <template v-if="!showMembers">{{ $t('members-button-show') }}</template>
              <template v-else>{{ $t('members-button-hide') }}</template>
            </button>
          </div>
        </div>
        <div v-show="showMembers">
            <ul>
                <li>Prof. Norman Backhaus, UZH, Geographisches Institut</li>
                <li>Prof. Abraham Bernstein, UZH, Institut für Informatik</li>
                <li>Prof. Balthasar Bickel ,UZH, Institut für Vergleichende Sprachwissenschaft, Zürcher Kompetenzzentrum Linguistik (ZüKL)</li>
                <li>Prof. Nikola Biller-Andorno, UZH, Institut für Biomedizinische Ethik und Medizingeschichte</li>
                <li>Dr. Christine Bratrich, ETH, Sustainability</li>
                <li>Claudia Canella, UniversitätsSpital Zürich</li>
                <li>Dr. Markus Christen, UZH, Digital Society Initiative</li>
                <li>Prof. Volker Dellwo, UZH, Institut für Computerlinguistik</li>
                <li>Prof. Andreas Diekmann, ETH, Departement Geistes-, Sozial- und Staatswissenschaften, Forschungsgruppe Umwelt</li>
                <li>Eliane Escher, UZH, Institut für Molekulare Biologie</li>
                <li>Simon Etter, UZH, Geographisches Institut</li>
                <li>Prof. Mareile Flitsch, UZH, Völkerkundemuseum</li>
                <li>Prof. Barbara Flückiger, UZH, Seminar für Filmwissenschaft</li>
                <li>Michael Gasser, ETH Bibliothek</li>
                <li>Prof. Elvira Glaser, UZH, Deutsches Seminar, UFSP Sprache und Raum</li>
                <li>Marc Gruenig, ETH, Departement Umweltsystemwissenschaften</li>
                <li>Prof. Ernst Hafen, ETH, Institut für Molekulare Systembiologie</li>
                <li>Prof. Richard Hahnloser, ETH, Institut für Neuroinformatik</li>
                <li>Prof. Dirk Helbing, ETH, Computational Social Science</li>
                <li>Prof. Marianne Hundt, UZH, Englisches Seminar, Zürcher Kompetenzzentrum Linguistik (ZüKL)</li>
                <li>Dr. Matthias Huss, ETH, Departement Geistes-, Sozial- und Staatswissenschaften</li>
                <li>Dr. Ulrike Kastrup, ETH, focus-Terra</li>
                <li>Prof. Hubert Klumpner, ETH, Departement Architektur</li>
                <li>Prof. Andreas Krause, ETH, Departement Informatik</li>
                <li>Dr. Bregt Lameris, UZH, Seminar für Filmwissenschaft</li>
                <li>Prof. Nicolas Langer, UZH, Psychologisches Institut</li>
                <li>Prof. Mike Martin, UZH, Psychologisches Institut</li>
                <li>Dr. Rebecca Mörgen, UZH, Institut für Erziehungswissenschaft</li>
                <li>Dr. Corine Mouton Dorey, UZH, Institut für Biomedizinische Ethik und Medizingeschichte</li>
                <li>Robin Müller, Climate-KIC</li>
                <li>Maximiliane Okonnek, ETH, Library Lab</li>
                <li>Prof. Milo Puhan, UZH, Institut für Epidemiologie, Biostatistik und Prävention</li>
                <li>Prof. Ross Purves, UZH, Geographisches Institut</li>
                <li>Prof. Michael Ristow, ETH, Departement Gesundheitswissenschaften und Technologie</li>
                <li>Dr. Carmenza Robledo Abad Althaus, ETH, TdLab</li>
                <li>PD Dr. Prasenjit Saha, UZH, Zentrum für Theoretische Astrophysik und Kosmologie</li>
                <li>Dr. Juanita Schläaepfer-Miller, ETH, Zurich-Basel Plant Science Center</li>
                <li>Prof. Thomas Schlag, UZH, Theologische Fakultät</li>
                <li>Prof. Jan SeibertUZH, Geographisches Institut</li>
                <li>Prof. Uwe Serdult, UZH, Rechtswissenschaftliche Fakultät, Zentrum für Demokratie Aarau</li>
                <li>Prof. Elisabeth Stark, UZH, Romanisches Seminar, Zürcher Kompetenzzentrum LLinguistik (ZüKL)</li>
                <li>Barbara Strobl, UZH, Geographisches Institut</li>
                <li>Prof. Effy Vayena, ETH, Departement Gesundheitswissenschaften und Technologie</li>
                <li>Prof. Martin Volk, UZH, Institut für Computerlinguistik, ZüKL</li>
                <li>Zürcher Kompetenzzentrum Linguistik (ZüKL)</li>
                <li>Prof. Claudia Witt, UZH, UniversitätsSpital Zürich, Institut für Komplementäre und Integrative Medizin</li>
            </ul>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'PeopleList',
    data: function() {
        return {
            showMembers: false
        }
    },
}
</script>

<style lang="scss">

@import '@/styles/theme.scss';
@import '@/styles/shared/variables.scss';


.people-list {
  margin-bottom: $spacing-4;

  &:last-child {
    margin-bottom: 0;
  }

  .people-section {
    margin-bottom: $spacing-4;

    &:last-child {
      margin-bottom: 0;
    }

    .person {
      .photo {
        width: 25%;
        border-radius: 50%;
        margin-bottom: $spacing-2;
      }

      .name, .position, a {
        display: block;
      }
      .position, a {
        font-size: $font-size-small;
      }

      a {
        color: $color-black-tint-50;
      }
    }
  }

  .members {
    margin-top: $spacing-4;

    li {
      margin: 0;
      margin-bottom: $spacing-2;
      &:before {
        display: none;
      }
      span {
        display: block;
        &.position {
          font-size: $font-size-small;
        }
      }
    }
  }

}

@media only screen and (min-width: $viewport-tablet-portrait) {
  .people-list {
    margin-bottom: $spacing-5;

    .people-section {
      margin-bottom: $spacing-5;

      .person {
        .photo {
          width: 33.333%;
        }
      }
    }

    .members {
      margin-top: $spacing-5;
    }
  }
}

@media only screen and (min-width: $viewport-large) {
  .people-list {
    .people-section {
      .person {
        .photo {
          width: 50%;
        }
      }
    }
  }
}

</style>
