Template.tplAlbum.helpers({
    hlPhotos: function(){
      return[
        {
          src : "my_alb_1.jpg", proc : "20%"
        },
        {
          src : "my_alb_2.jpg", proc : "20%"
        },
        {
          src : "my_alb_3.JPG", proc : "11.2%"
        },
        {
          src : "my_alb_4.jpg", proc : "22.5%"
        },
      ];
    },

    //hlPhotosSize: function(){
    //  return["20%", "20%", "11.2%", "22.5%"];
    //}
});

Template.tplAlbum.events({
    'click img': function (event) {
      Session.set('nameImgPop',event.target.src);
      console.log(Session.get('nameImgPop'));
    }
});