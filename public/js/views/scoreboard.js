define([
    'backbone',
    'tmpl/scoreboard',
    'collections/scores',
    'models/score',
], function(
    Backbone,
    tmplScore,
    PlayersScores,
    Player
){

    var ScoreboardView = Backbone.View.extend({
        el: "#page",
        template: tmplScore,
        scoreboard: PlayersScores,
        initialize: function () {
            console.log("Score View is working");
        },
        render: function () {
        },
        show: function () {
            console.log(this.scoreboard);
            this.$el.html(this.template({scoreboard: this.scoreboard.models}));
        },
        hide: function () {
            // TODO
        }
    });
    return new ScoreboardView();

});