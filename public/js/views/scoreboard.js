define([
    'backbone',
    'tmpl/scoreboard',
    'collections/scores',
], function(
    Backbone,
    tmplScore,
    PlayersScores
){

    var ScoreboardView = Backbone.View.extend({
        el: $("#page"),
        template: tmplScore,
        scoreboard: PlayersScores,
        initialize: function () {
            console.log("Score View is working");
        },
        render: function () {
            this.$el.html(this.template({scoreboard: this.scoreboard.models}));
        },
        show: function () {
            console.log(this.scoreboard);
            this.render();

        },
        hide: function () {
            // TODO
        }
    });
    return new ScoreboardView();

});
