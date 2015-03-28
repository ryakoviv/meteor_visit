Template.tplPopUp.helpers({
    hlImgSrc: function(){
      var resultSrc = "";
      resultSrc = Session.get('nameImgPop');
      return resultSrc;
    }
});

Template.tplPopUp.helpers({
    hlVisiblePop: function(){
      var visible = false;
      visible = Session.get('nameImgPop')!=="";
      return visible;
    }
});

Template.tplPopUp.events({
    'click': function () {
      Session.set('nameImgPop',"");
      console.log(Session.get('nameImgPop'));
    }
});