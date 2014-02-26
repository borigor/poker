define([
    'backbone',
    'models/score'
], function(
    Backbone,
    Score
){
    var Scoreboard = Backbone.Collection.extend({
        model: Score,

        comparator: function(score){
            return -score.get("score");
        },

        initialize: function() {
            console.log("Scoreboard is created");
        }
    });
    var PlayersScores = new Scoreboard([
    {name: "pasha", score: 888},
    {name: "masha", score: 898},
    {name: "sasha", score: 989},
    {name: "tanya", score: 777},
    {name: "jany", score: 1313},
    {name: "ilya", score: 4242},
    {name: "igor", score: 1212},
    {name: "lesha", score: 333},
    {name: "tolya", score: 666},
    {name: "anis", score: 543},
    ]);
    return PlayersScores;
});