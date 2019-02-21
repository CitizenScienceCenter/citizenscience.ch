<i18n>
{
  "en": {
    "subheading-directors": "Directors",
    "subheading-advisors": "Advisors",
    "subheading-team": "Team",
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
    "people-fanny-position": "Community Manager",
    "people-rosy-position": "Managing Director",
    "people-marcel-position": "UX Designer / Frontend Developer",

    "members-button-show": "Show all Members",
    "members-button-hide": "Hide all Members",
    "members-text": "Membership at the Citizen Science Center Zurich is open to professors with research groups at the two founding Institutions, leaders of research groups from other universities or public-legal institutions, and individual researchers and students.<br>Researchers at both UZH and ETHZ have a strong track record in citizen science, participatory research, and citizen science-related fields such as artificial intelligence, social science and the law. Currently the Center has a scientific community of more than 200 researchers in fields ranging epidemiology, psychology, geography, neurosciences, and more. Combining these researchers’ expertise represents a unique opportunity for synergy."
  },
  "de": {
    "subheading-directors": "Direktorium",
    "subheading-advisors": "Beraterinnen und Berater",
    "subheading-team": "Team",
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
    "people-fanny-position": "Community Manager",
    "people-rosy-position": "Managing Director",
    "people-marcel-position": "UX Designer / Frontend Developer",

    "members-button-show": "Alle Mitglieder anzeigen",
    "members-button-hide": "Mitglieder verbergen",
    "members-text": "Die Mitgliedschaft am Citizen Science Center Zürich steht Professorinnen und Professoren mit ihren Forschungsgruppen an den beiden Gründungsuniversitäten, Forschungsgruppenleitern von anderen Universitäten oder öffentlich-rechtlichen Institutionen, sowie auch einzelnen Forschenden und Studierenden offen.<br>Forschende an UZH und ETH haben umfangreiche Erfahrungen in Citizen Science, partizipativer Forschung und verwandten Bereichen, wie künstlicher Intelligenz, den Sozialwissenschaften und der Rechtswissenschaft. Das Center stützt sich auf eine wachsende wissenschaftliche Community von derzeit über 200 Forschenden aus den unterschiedlichsten Bereichen, wie Epidemiologie, Psychologie, Geographie und Neurowissenschaften – um nur einige zu nennen. Diese Kombination an Erfahrung und Kompetenzen ermöglicht einzigartige Synergien."
  }
}
</i18n>


<template>

  <div class="people-list">

    <h3 class="subheading centered">{{ $t('subheading-directors') }}</h3>

    <div class="people-section">
      <div class="row row-centered">
        <div class="col col-tablet-portrait-6 col-large-3 col-wrapping">
          <div class="person centered">
            <img src="img/people/abraham.jpg" class="photo"/>
            <span class="name">Abraham Bernstein</span>
            <span class="position">{{ $t('people-abraham-position') }}</span>
            <a href="mailto:bernstein@ifi.uzh.ch">bernstein@ifi.uzh.ch</a>
          </div>
        </div>
        <div class="col col-tablet-portrait-6 col-large-3 col-wrapping">
          <div class="person centered">
            <img src="img/people/ernst.jpg" class="photo"/>
            <span class="name">Ernst Hafen</span>
            <span class="position">{{ $t('people-ernst-position') }}</span>
            <a href="mailto:hafen@imsb.biol.ethz.ch">hafen@imsb.biol.ethz.ch</a>
          </div>
        </div>
        <div class="col col-tablet-portrait-6 col-large-3 col-wrapping">
          <div class="person centered">
            <img src="img/people/mike.jpg" class="photo"/>
            <span class="name">Mike Martin</span>
            <span class="position">{{ $t('people-mike-position') }}</span>
            <a href="mailto:m.martin@psychologie.uzh.ch">m.martin@psychologie.uzh.ch</a>
          </div>
        </div>
        <div class="col col-tablet-portrait-6 col-large-3 col-wrapping col-tablet-portrait-no-bottom-margin">
          <div class="person centered">
            <img src="img/people/michael.jpg" class="photo"/>
            <span class="name">Michael Ristow</span>
            <span class="position">{{ $t('people-michael-position') }}</span>
            <a href="mailto:michael-ristow@ethz.ch">michael-ristow@ethz.ch</a>
          </div>
        </div>
        <div class="col col-tablet-portrait-6 col-large-3 col-wrapping col-tablet-portrait-no-bottom-margin">
          <div class="person centered">
            <img src="img/people/effy.jpg" class="photo"/>
            <span class="name">Effy Vayena</span>
            <span class="position">{{ $t('people-effy-position') }}</span>
            <a href="mailto:effy.vayena@hest.ethz.ch">effy.vayena@hest.ethz.ch</a>
          </div>
        </div>
        <div class="col col-tablet-portrait-6 col-large-3 col-wrapping col-no-bottom-margin">
          <div class="person centered">
            <img src="img/people/claudia.jpg" class="photo"/>
            <span class="name">Claudia Witt</span>
            <span class="position">{{ $t('people-claudia-position') }}</span>
            <a href="mailto:claudia.witt@uzh.ch">claudia.witt@uzh.ch</a>
          </div>
        </div>
      </div>
    </div>

    <h3 class="subheading centered">{{ $t('subheading-advisors') }}</h3>

    <div class="people-section">
      <div class="row row-centered">
        <div class="col col-tablet-portrait-6 col-large-3 col-wrapping col-no-bottom-margin">
          <div class="person centered">
            <img src="img/people/dirk.jpg" class="photo"/>
            <span class="name">Dirk Helbing</span>
            <span class="position">{{ $t('people-dirk-position') }}</span>
            <a href="mailto:dirk.helbing@gess.ethz.ch">dirk.helbing@gess.ethz.ch</a>
          </div>
        </div>
      </div>
    </div>

    <h3 class="subheading centered">{{ $t('subheading-team') }}</h3>

    <div class="people-section">
      <!-- special row wrapping here -->
      <div class="row row-centered">
        <div class="col col-large-9">

          <div class="row row-centered">
            <div class="col col-tablet-portrait-6 col-large-4 col-wrapping">
              <div class="person centered">
                <img src="img/people/rosy.jpg" class="photo"/>
                <span class="name">Rosy Mondardini</span>
                <span class="position">{{ $t('people-rosy-position') }}</span>
                <a href="mailto:maria.mondardini@uzh.ch">maria.mondardini@uzh.ch</a>
              </div>
            </div>
            <div class="col col-tablet-portrait-6 col-large-4 col-wrapping">
              <div class="person centered">
                <img src="img/people/chris.jpg" class="photo"/>
                <span class="name">Chris Gwilliams</span>
                <span class="position">{{ $t('people-chris-position') }}</span>
                <a href="mailto:christopher.gwilliams@uzh.ch ">christopher.gwilliams@uzh.ch</a>
              </div>
            </div>
            <div class="col col-tablet-portrait-6 col-large-4 col-wrapping">
              <div class="person centered">
                <img src="img/people/fanny.jpg" class="photo"/>
                <span class="name">Fanny Jones</span>
                <span class="position">{{ $t('people-fanny-position') }}</span>
                <a href="mailto:fanny.jones@uzh.ch">fanny.jones@uzh.ch</a>
              </div>
            </div>
            <div class="col col-tablet-portrait-6 col-large-4 col-wrapping col-large-no-bottom-margin">
              <div class="person centered">
                <img src="img/people/marcel.jpg" class="photo"/>
                <span class="name">Marcel Tanner</span>
                <span class="position">{{ $t('people-marcel-position') }}</span>
                <a href="mailto:marcel.tanner@uzh.ch">marcel.tanner@uzh.ch</a>
              </div>
            </div>
            <div class="col col-tablet-portrait-6 col-large-4 col-wrapping col-no-bottom-margin">
              <div class="person centered">
                <img src="img/people/marina.jpg" class="photo"/>
                <span class="name">Marina Gagetti</span>
                <span class="position">{{ $t('people-marina-position') }}</span>
                <a href="mailto:marina.gagetti@zfg.uzh.ch">marina.gagetti@zfg.uzh.ch</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="row row-centered">
      <div class="col col-large-6">
        <h3 class="subheading centered">{{ $t('subheading-members') }}</h3>
        <p v-html="$t('members-text')"></p>
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
      <div class="col col-large-8" v-show="showMembers">
        <ul class="members row">
            <li class="col col-large-6">
              <span class="name"><a href="http://www.socio.ethz.ch/die-gruppe/personen/person-detail.html?persid=110988" target="_blank">Prof. Andreas Diekmann</a></span>
              <span class="position">ETH, Departement Geistes-, Sozial- und Staatswissenschaften</span>
            </li>
            <li class="col col-large-6">
              <span class="name"><a href="https://las.inf.ethz.ch/krausea" target="_blank">Prof. Andreas Krause</a></span>
              <span class="position">ETH, Departement Informatik</span>
            </li>
            <li class="col col-large-6">
              <span class="name"><a href="https://www.ifi.uzh.ch/en/ddis/people/bernstein.html" target="_blank">Prof. Abraham Bernstein</a></span>
              <span class="position">UZH, Institut für Informatik</span>
            </li>
            <li class="col col-large-6">
              <span class="name"><a href="https://www.linguistik.uzh.ch/en/about/mitglieder/bickel.html" target="_blank">Prof. Balthasar Bickel</a></span>
              <span class="position">UZH, Institut für Vergleichende Sprachwissenschaft, ZüKL</span>
            </li>
            <li class="col col-large-6">
              <span class="name"><a href="https://www.med.uzh.ch/de/UeberdieFakultaet/fakultaetsvorstand/wittclaudia.html" target="_blank">Prof. Claudia Witt</a></span>
              <span class="position">USZ, Institut für Komplementäre und Integrative Medizin</span>
            </li>
            <li class="col col-large-6">
              <span class="name"><a href="http://www.coss.ethz.ch/people/helbing.html" target="_blank">Prof. Dirk Helbing</a></span>
              <span class="position">ETH, Departement Geistes-, Sozial- und Staatswissenschaften</span>
            </li>
            <li class="col col-large-6">
              <span class="name"><a href="http://www.itm.ethz.ch/research/bioethics-and-politics.html" target="_blank">Prof. Effy Vayena</a></span>
              <span class="position">ETH, Departement Gesundheitswissenschaften und Technologie</span>
            </li>
            <li class="col col-large-6">
              <span class="name"><a href="https://www.rose.uzh.ch/de/seminar/personen/stark.html" target="_blank">Prof. Elisabeth Stark</a></span>
              <span class="position">UZH, Romanisches Seminar, ZüKL</span>
            </li>
            <li class="col col-large-6">
              <span class="name"><a href="https://www.phil.uzh.ch/de/forschung/frauen/glaser.html" target="_blank">Prof. Elvira Glaser</a></span>
              <span class="position">UZH, UFSP Sprache und Raum</span>
            </li>
          <li class="col col-large-6">
              <span class="name"><a href="http://www.imsb.ethz.ch/research/hafen/people/ernst-hafen.html" target="_blank">Prof. Ernst Hafen</a></span>
              <span class="position">ETH, Department Biologie</span>
            </li>
          <li class="col col-large-6">
              <span class="name"><a href="https://www.ctac.uzh.ch/research/groups/lake.html" target="_blank">Prof. George Lake</a></span>
              <span class="position">UZH, Institut für Computational Science</span>
            </li>
          <li class="col col-large-6">
              <span class="name"><a href="https://www.geo.uzh.ch/en/studying/spez_master/physical_geography/People/seibert.html" target="_blank">Prof. Jan Seibert</a></span>
              <span class="position">UZH, Geographisches Institut</span>
            </li>
          <li class="col col-large-6">
              <span class="name"><a href="https://www.musethno.uzh.ch/de/museum/mitarbeitende/mareile-flitsch.html" target="_blank">Prof. Mareile Flitsch</a></span>
              <span class="position">UZH, Völkerkundemuseum</span>
            </li>
          <li class="col col-large-6">
              <span class="name"><a href="https://www.es.uzh.ch/en/aboutus/team/mhundt.html" target="_blank">Prof. Marianne Hundt</a></span>
              <span class="position">UZH, Englisches Seminar, ZüKL</span>
            </li>
          <li class="col col-large-6">
              <span class="name"><a href="https://www.cl.uzh.ch/de/people/team/compling/volk.html" target="_blank">Prof. Martin Volk</a></span>
              <span class="position">UZH, Institut für Computerlinguistik, ZüKL</span>
            </li>
          <li class="col col-large-6">
              <span class="name"><a href="https://www.hest.ethz.ch/en/studies/health-sciences-and-technology/master-hst/majors/tutors/tutors-a-z/michael-ristow.html" target="_blank">Prof. Michael Ristow</a></span>
              <span class="position">ETH, Departement Gesundheitswissenschaften und Technologie</span>
            </li>
          <li class="col col-large-6">
              <span class="name"><a href="https://www.psychology.uzh.ch/en/areas/dev/geronto/team/mmartin.html" target="_blank">Prof. Mike Martin</a></span>
              <span class="position">UZH, Psychologisches Institut</span>
            </li>
          <li class="col col-large-6">
              <span class="name"><a href="https://www.ebpi.uzh.ch/en/aboutus/director.html" target="_blank">Prof. Milo Puhan</a></span>
              <span class="position">UZH, Epidemiology, Biostatistics and Prevention Institute</span>
            </li>
          <li class="col col-large-6">
              <span class="name"><a href="https://www.geo.uzh.ch/en/studying/spez_master/Geographies_of_global_change/People/backhaus.html" target="_blank">Prof. Norman Backhaus</a></span>
              <span class="position">UZH, Geographisches Institut</span>
            </li>
          <li class="col col-large-6">
              <span class="name"><a href="https://www.ee.ethz.ch/the-department/faculty/professors/person-detail.NTI3MDk=.TGlzdC80MTEsMTA1ODA0MjU5.html" target="_blank">Prof. Richard Hahnloser</a></span>
              <span class="position">ETH, Systems Neurosciences</span>
            </li>
          <li class="col col-large-6">
              <span class="name"><a href="https://www.geo.uzh.ch/en/studying/spez_master/msc_spez_giscience/People/purves.html" target="_blank">Prof. Ross Purves</a></span>
              <span class="position">UZH, Geographisches Institut</span>
            </li>
        </ul>
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
