var App = function(baseUrl) {
  this.lectures = new LectureList(baseUrl);
  this.lecture = new Lecture(baseUrl);
  this.cart = new Cart(baseUrl);
  this.user = new User(baseUrl);

  this.visible = 'documents';
  this.cartID = '';

  ko.track(this);
}

App.prototype.lecturesVisible = function () {
  return this.visible === 'lectures';
}

App.prototype.documentsVisible = function() {
  return this.visible === 'documents';
}

App.prototype.cartVisible = function() {
  return this.visible === 'cart';
}

App.prototype.printVisible = function() {
  return this.visible === 'print';
}

App.prototype.show = function(name) {
  this.visible = name
}

App.prototype.openLecture = function(lecture) {
  this.lecture.load(lecture.name)
  this.visible = 'documents'
}

App.prototype.login = function() {
  this.user.login(function() {
    this.visible = 'cart';
  });
}

$(document).ready(function() {
  var live = true
  var url = live ? 'http://odie.fsmi.uni-karlsruhe.de' : 'http://localhost:8000'
  var app = new App(url);
  window.app = app;
  ko.applyBindings(app);
})
