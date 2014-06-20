define([
	'backbone',
      'lib/node-poker'
], function(
	Backbone,
      Poker
){

	var mechanics = Backbone.View.extend({

		game: function(){

			console.log('game start');

			var canvas = document.getElementById("draw-table");
                  console.log(canvas);
			context = canvas.getContext('2d');

                  canvas.width  = 450;
                  canvas.height = 450;

                  context.strokeRect(10, 10, 430, 430);

                  context.strokeRect(50, 100, 50, 70);
                  context.strokeRect(120, 100, 50, 70);
                  context.strokeRect(190, 100, 50, 70);
                  context.strokeRect(260, 100, 50, 70);
                  context.strokeRect(330, 100, 50, 70);

                  context.strokeRect(50, 200, 50, 70);
                  context.strokeRect(120, 200, 50, 70);
                  context.strokeRect(260, 200, 50, 70);
                  context.strokeRect(330, 200, 50, 70);

                  context.strokeRect(50, 300, 50, 70);
                  context.strokeRect(120, 300, 50, 70);
                  context.strokeRect(260, 300, 50, 70);
                  context.strokeRect(330, 300, 50, 70);



                        var table = new Poker.Table(10,20,2,10,'table_1',100,1000);
                        table.AddPlayer('bob',1000);
                        table.AddPlayer('jane',500);
                        table.AddPlayer('evkakiy', 500);
                        table.AddPlayer('anufriy', 500);

                        console.log(table.players[0]);
                        console.log(table.players[1]);
                        console.log(table.players[2]);
                        console.log(table.players[3]);

                  context.font = "10pt Arial";

                  context.fillText(table.players[0].playerName, 90, 190);
                  context.fillText(table.players[0].cards[0], 65, 240);
                  context.fillText(table.players[0].cards[1], 135, 240);

                  context.fillText(table.players[1].playerName, 300, 190);
                  context.fillText(table.players[1].cards[0], 275, 240);
                  context.fillText(table.players[1].cards[1], 345, 240);

                  context.fillText(table.players[2].playerName, 90, 290);
                  context.fillText(table.players[2].cards[0], 65, 340);
                  context.fillText(table.players[2].cards[1], 135, 340);

                  context.fillText(table.players[3].playerName, 300, 290);
                  context.fillText(table.players[3].cards[0], 275, 340);
                  context.fillText(table.players[3].cards[1], 345, 340);


                        
                        console.log(table.game);
                        console.log(table.game.round);
                        console.log(table.game.round.bets);
                        console.log(table.game.pot);

                        table.players[0].Bet(10);

                        console.log("0-1");
                        console.log(table.game);
                        console.log(table.game.round);
                        console.log(table.game.round.bets);
                        console.log(table.game.pot);

                        table.players[1].Bet(20);

                        console.log("1-1");
                        console.log(table.game);
                        console.log(table.game.round);
                        console.log(table.game.round.bets);
                        console.log(table.game.pot);

                        table.players[2].Bet(20);

                        console.log("2-1");
                        console.log(table.game);
                        console.log(table.game.round);
                        console.log(table.game.round.bets);
                        console.log(table.game.pot);

                        table.players[3].Bet(20);
                        console.log("3-1");                        
                        console.log(table.game);
                        console.log(table.game.round);
                        console.log(table.game.round.bets);
                        console.log(table.game.pot);

                        table.players[0].Call();
                        
                        console.log("0-2");
                        console.log(table.game);
                        console.log(table.game.round);
                        console.log(table.game.round.bets);
                        console.log(table.game.pot);


                  context.fillText(table.game.board[0], 65, 140);
                  context.fillText(table.game.board[1], 135, 140);
                  context.fillText(table.game.board[2], 205, 140);


	            console.log('game end');
        }

	});
	return new mechanics();
})