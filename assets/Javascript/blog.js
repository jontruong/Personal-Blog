$(document).ready(function(){

var userFeed = new Instafeed({
    get: 'user',
    userId:'6091078407',
    limit:12,
    resolution:'standard_resolution',
    accessToken:'6091078407.1677ed0.eb1674496f044318b090a46140caa35c',
    sortBy:'most-recent',
    template:'<div class="col-lg-3 gallery instaimg"><a href="{{image}}" title{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
});
userFeed.run();

});













