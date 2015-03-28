Template.tplContent.helpers({
    hlHome: function(){
      var result = false;
      result = (Session.get('nameTemplate') == "home");
      return result;
    },

    hlBio: function(){
      var result = false;
      result = (Session.get('nameTemplate') == "bio");
      return result;
    },

    hlCareer: function(){
      var result = false;
      result = (Session.get('nameTemplate') == "career");
      return result;
    },

    hlEducation: function(){
      var result = false;
      result = (Session.get('nameTemplate') == "education");
      return result;
    }
});