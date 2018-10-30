<template>
  <div>
    <form action="https://citizenscience.us17.list-manage.com/subscribe/post" method="POST">
    <input name="u" value="32303d2adcf28a2820c5f9165" type="hidden">
    <input name="id" value="6dc5028399" type="hidden">
    

    <!-- people should not fill these in and expect good things -->
    <!-- <div class="field-shift" aria-label="Please leave the following three fields empty">
        <label for="b_name">Name: </label>
        <input name="b_name" tabindex="-1" value="" placeholder="Freddie" id="b_name" type="text">

        <label for="b_email">Email: </label>
        <input name="b_email" tabindex="-1" value="" placeholder="youremail@gmail.com" id="b_email" type="email">

        <label for="b_comment">Comment: </label>
        <textarea name="b_comment" tabindex="-1" placeholder="Please comment" id="b_comment"></textarea>
    </div> -->

    <div id="mergeTable" class="mergeTable">
        
        
        <div class="mergeRow dojoDndItem mergeRow-email" id="mergeRow-0">
            <label for="MERGE0">Email Address <span class="req asterisk">*</span></label>
            <div class="field-group">
                <input autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value="test@test.com" type="email">
                
                
            </div>
            
        </div>
        
        
        
        <div class="mergeRow dojoDndItem mergeRow-text" id="mergeRow-1">
            <label for="MERGE1">First Name</label>
            <div class="field-group">
                <input name="MERGE1" id="MERGE1" size="25" value="test" type="text">
                
                
            </div>
            
        </div>
        
        
        
        <div class="mergeRow dojoDndItem mergeRow-text" id="mergeRow-2">
            <label for="MERGE2">Last Name</label>
            <div class="field-group error">
                <input name="MERGE2" id="MERGE2" size="25" value="testv-model=&quot;fields.u&quot;" type="text">
                
                
                <div class="feedback error"><br><div class="errorText">Please be sure that name fields use alphanumeric characters, commas, dashes, single quotes and periods only</div></div>
                
            </div>
            
        </div>
        
        
        
        
        
        


        

        

        
    </div>

    <div class="submit_container clear">
        <input class="formEmailButton" name="submit" value="Subscribe to list" type="submit">
    </div>
    <input name="ht" value="1cbde8b0ed829f03ffbb06c5f425fda64740c128:MTU0MDkwOTYxMC4xMDcx" type="hidden">
    <input name="mc_signupsource" value="hosted" type="hidden">
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
      fields: {
        'ht': 'bb1de22dd0c9aea524e98f14d414429db1dbd6ed:MTU0MDkwOTEyMy4xMzA0',
        'u': '32303d2adcf28a2820c5f9165',
        'id': '6dc5028399',
        'MERGE0':'',
        'MERGE1':'',
        'MERGE2':'',
      },
      response: {},
      errorMessage: null,
      successMessage: null
    };
  },
  mounted: function() {
    // this.action = this.action.replace('/post?', '/post-json?').concat('&c=?');
  },
  methods: {
    subscribe: function() {
      let params = '';
      for (let f in this.fields) {
        params += '&' + f + '=' + this.fields[f]
      }
      params = encodeURI(params)
      console.log(params);
      var http = new XMLHttpRequest(); 
      http.open('POST', this.action, true);

      //Send the proper header information along with the request
      http.setRequestHeader('Access-Control-Allow-Origin', '*');
      http.setRequestHeader('Content-type', 'application/json');

      http.onreadystatechange = function() {//Call a function when the state changes.
          if(http.readyState == 4 && http.status == 200) {
              console.log(http.responseText);
          }
      }
      http.send(this.fields);
      // return $.ajax({
      //   type: 'POST',
      //   crossDomain: true,
      //   url: this.action,
      //   data: params,
      //   dataType: 'jsonp',
      //   success: (function(_this) {
      //     return function(res) {
      //       if (res.result === 'success') {
      //         return _this.successMessage = res.msg;
      //       } else {
      //         _this.errorMessage = res.msg;
      //         return _this.errorMessage = _this.errorMessage.substring(_this.errorMessage.indexOf('-') + 1, _this.errorMessage.length);
      //       }
      //     };
      //   })(this)
      // });
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
