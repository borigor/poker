define([
    'backbone',
    'tmpl/game'
], function(
    Backbone,
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
        },
        hide: function () {
            // TODO
        }

    });

    return new View();
});
