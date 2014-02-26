define([
    'backbone',
    'tmpl/game'
], function(
    Backbone,
    tmpl,
    game
){
 
    var View = Backbone.View.extend({
        
        template: tmpl,
        el: $("#page"),
        initialize: function () {
            console.log("Game View is working");
        },
        render: function () {
            // TODO
        },
        show: function () {
            this.$el.html(this.template);
        },
        hide: function () {
            // TODO
        }
 
    });
 
    return new View();
});