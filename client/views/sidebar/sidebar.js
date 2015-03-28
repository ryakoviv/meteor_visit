Template.tplSidebar.events({
    'click .button': function (event) {
      Session.set('nameTemplate',event.target.id);
    }
});