define([
    'backbone',
    'tmpl/game',
    'mechanics'
], function(
    Backbone,
    tmpl,
    mechanics
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
            mechanics.game();
        },
        hide: function () {
            // TODO
        }

    });

    return new View();
});
