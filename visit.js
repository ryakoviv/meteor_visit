if (Meteor.isClient) {
  Session.setDefault('nameTemplate', "home");

  Template.tplSidebar.events({
    'click .button': function (event) {
      Session.set('nameTemplate',event.target.id);
    }
  });

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

  Template.tplAlbum.helpers({
    hlPhotos: function(){
      return[
        "my_alb_1.jpg",
        "my_alb_2.jpg",
        "my_alb_2.jpg",
        "my_alb_4.jpg",
      ];
    }

  });

}
