define([
	'backbone',
      'node-poker'
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
                  context.font = "10pt Arial";

                  canvas.width  = 450;
                  canvas.height = 450;


                  context.strokeRect(10, 10, 430, 430);

                  context.strokeRect(50, 100, 50, 70);
                  context.strokeRect(120, 100, 50, 70);
                  context.strokeRect(190, 100, 50, 70);
                  context.strokeRect(260, 100, 50, 70);
                  context.strokeRect(330, 100, 50, 70);

                  context.strokeRect(50, 250, 50, 70);
                  context.strokeRect(120, 250, 50, 70);
                  context.strokeRect(260, 250, 50, 70);
                  context.strokeRect(330, 250, 50, 70);

                  
                  var table = new Poker.Table(10,20,2,10,'table_1',100,1000);
                   /*     
                  if(name_1 = prompt('Введите имя, игрок 1', 'имя')) {
                        table.AddPlayer(name_1, 1000);
                  }
                        
                  if(name_2 = prompt('Введите имя, игрок 2', 'имя')) {
                        table.AddPlayer(name_2, 1000);
                  }
                  */

                  table.AddPlayer('bob', 1000);
                  table.AddPlayer('bill', 1000);

                  if (table.players.length !== 2) {
                        alert('Не хватает игроков');
                  } else {
                        alert('Игра начинается!');

                        context.fillText(table.players[0].playerName, 90, 240);
                        context.fillText(table.players[0].cards[0], 65, 290);
                        context.fillText(table.players[0].cards[1], 135, 290);

                        context.fillText(table.players[1].playerName, 300, 240);
                        context.fillText(table.players[1].cards[0], 275, 290);
                        context.fillText(table.players[1].cards[1], 345, 290);

                        console.log(table.game.round.roundName);
                        alert(table.game.round.roundName);

                        table.players[0].Call();

                        console.log(table.game.round.roundName);
                        alert(table.game.round.roundName);

                        context.fillText(table.game.board[0], 65, 140);
                        context.fillText(table.game.board[1], 135, 140);
                        context.fillText(table.game.board[2], 205, 140);

                        table.players[0].Call();

                        console.log(table.game.round.roundName);
                        alert(table.game.round.roundName);

                        console.log(table.players[0]);
                        console.log(table.players[1]);
                        
                  }


	            console.log('game end');
        }

	});
	return new mechanics();
})