posts = new Mongo.Collection("posts");

Router.route('/', function () {
  this.render('FullFeed', {
    data: function () {  }
  });
});

if (Meteor.isClient) {
  // This code only runs on the client
  Template.FullFeed.helpers({
    posts: posts.find({}).fetch()
  });
}