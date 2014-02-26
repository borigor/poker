var $page = $('#page');
var currentScreen = '';
showMainScreen();

function showMainScreen() { // Конструктор экрана "Главный" 
    if (currentScreen == 'scoreboard')
		hideScoreboardScreen();
	else if (currentScreen == 'game')
		hideGameScreen();
    $page.html(mainTmpl()); // Рендерим шаблон
// Инициализируем обработчики событий
    $page.find('.js-scoreboard').on('click', showScoreboardScreen);
    $page.find('.js-start-game').on('click', showGameScreen);
}

function hideMainScreen() { // Деструктор экрана "Главный"
// Удаляем установленные обработчики событий
    $page.find('.js-scoreboard').off('click', showScoreboardScreen);
    $page.find('.js-start-game').off('click', showGameScreen);
}

/* Конструктор экрана "Лучшие игроки" */
function showScoreboardScreen() {
    hideMainScreen();
    currentScreen = 'scoreboard';
	$page.html(scoreboardTmpl());
    $page.find('.js-main').on('click', showMainScreen);
}
/* Деструктор экрана "Лучшие игроки" */
function hideScoreboardScreen() {
	$page.find('.js-main').off('click', showMainScreen);
}

/* Конструктор экрана "Начать игру" */    
function showGameScreen() {
	hideMainScreen();
	currentScreen = 'game';
	$page.html(gameTmpl());
	$page.find('.js-main').on('click', showMainScreen);
}
/* Деструктор экрана "Начать игру" */
function hideGameScreen() {
	$page.find('.js-main').off('click', showMainScreen);
}
