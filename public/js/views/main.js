define([
    'backbone',
    'tmpl/main'
], function(
    Backbone,
    tmpl,
    models
){

    var View = Backbone.View.extend({

        template: tmpl,
        el: $("#page"),
        initialize: function () {
            console.log("Main View is working");
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