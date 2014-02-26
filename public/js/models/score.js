define([
    'backbone',
], function(
    Backbone
){
   var Player = Backbone.Model.extend({
        default:
        {
            name: '',
            score: 0
        },
        initialize: function(){
            console.log("New player is created");
        }
    });
    return Player;
});