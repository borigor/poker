define([
  'backbone',  'pokerface'
], function(
  Backbone,
  Poker
){

  var mechanics = Backbone.View.extend({

    game: function(){

      var act;

      function addPlayerOnBtn(str) {
        $(str).click(function() {
          console.log(table);
          console.log(table.game);
          if (name = prompt('Введите имя игрока', 'name')) {
            table.AddPlayer(name, 800);
          }
          if (table.players.length >= table.minPlayers) {
            table.StartGame();
          };
          console.log(table);
          console.log(table.game);
          console.log(table.players[0]);
          console.log(table.players[1]);
          if (table.game) {
            alert('Game Start!');
            gameStart();
          }
        });
      }

      function betOnBtn(str, num) {
        $(str).click(function() {
          if (betValue = prompt('введит сколько вы хотите поставить', 'bet')) {
            table.players[num].Bet(betValue);
          }
          console.log('bet = ' + betValue);
          act = 'bet';
        });
      }

      function foldOnBtn(str, num) {
        $(str).click(function() {
          table.players[num].Fold();
          console.log('fold');
          act = 'fold';
        });
      }

      function callOnBtn(str, num) {
        $(str).click(function() {
          table.players[num].Call();
          console.log('call');
          act = 'call';
        });
      }

      function checkOnBtn(str, num) {
        $(str).click(function() {
          table.players[num].Check();
          console.log('check');
          act = 'check';
        });        
      }

      function actionPlayer2() {
        callOnBtn('#call_2p', 1);
        betOnBtn('#bet_2p', 1);
        foldOnBtn('#fold_2p', 1);
        checkOnBtn('#check_2p', 1);

        console.log(table.game);
      }

      function actionPlayer1() {
        callOnBtn('#call_1p', 0);
        betOnBtn('#bet_1p', 0);
        foldOnBtn('#fold_1p', 0);
        checkOnBtn('#check_1p', 0);

        console.log(table.game);
      }

      var table = new Poker.Table(50,100,2,10,100,1000);

      addPlayerOnBtn('#add_1p');
      addPlayerOnBtn('#add_2p');


      function gameStart () {
        console.log('func gameStart');

        alert(table.game.roundName);
        console.log(table.game.roundName);

        console.log('cards on table:');
        console.log(table.game.board);
        
        console.log('blinds:')
        for (var i = 0; i < table.game.bets.length; i++) {
          console.log(table.game.bets[i]);
        }

        alert('players 2, your move');
        actionPlayer2;
        alert('players 1, your move');


        console.log(table.game);
      }

    }

  });
  return new mechanics();
});
