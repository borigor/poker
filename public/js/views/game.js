define([
    'backbone',
    'mechanics',
    'lib/node-poker',
    'tmpl/game'
], function(
    Backbone,
    Mechanics,
    Poker,
    tmpl
){

    var View = Backbone.View.extend({

        template: tmpl,
        el: $("#page"),
        initialize: function () {
            console.log("Game View is working");
        },
        render: function () {
            this.$el.html(this.template);
        },
        show: function () {
            this.render();
            Mechanics.game();

            
        },
        hide: function () {
            // TODO
        }
    });

    return new View();
});
