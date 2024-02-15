//There are 2 players and players take turns.
//When a player clicks Submit, the game rolls 2 dice and shows the dice rolls, for example 3 and 6.
//The player picks the order of the dice they want. For example, if they wanted the number 63, they would specify that the 2nd dice goes first. You can choose how the player specifies dice order.
//After both players have rolled and chosen dice order, the player with the higher combined number wins

var GAME_STATE_DICE_ROLL = "GAME_STATE_DICE_ROLL";
var GAME_STATE_CHOOSE_DICE_ORDER = "GAME_STATE_CHOOSE_DICE_ORDER";
var GameState = GAME_STATE_DICE_ROLL;

var PlayerRolls = [];

var rollDice = function () {
  console.log("HI");
  var RandomDecimal = Math.random() * 6;
  var RandomInt = Math.floor(RandomDecimal) + 1;
  console.log("Hi", RandomInt);
  return RandomInt;
};

var rollDiceForPlayer = function () {
  var counter = 0;
  while (counter < 2) {
    PlayerRolls.push(rollDice());
    counter = counter + 1;
  }
  return `Welcome <br><br> You Rolled <br> Dice 1 :${PlayerRolls[0]} <br> Dice 2 : ${PlayerRolls[1]} <br><br> Please input either 1 or 2 to choose corresponding dice to be used as the first digit of the final value.`;
};
var main = function (input) {
  var myOutputValue = ``;
  if (GameState == GAME_STATE_DICE_ROLL) {
    console.log(`TEST`);
    GameState = GAME_STATE_CHOOSE_DICE_ORDER;
    outputMessage = rollDiceForPlayer();
  }
  if (GameState == GAME_STATE_CHOOSE_DICE_ORDER) {
    console.log(`Control Flow`);
    if (input != 1 && input != 2) {
      return ` You have entered an invalid choice <br><br> Please enter either 1 or 2 to choose corresponding dice to be used as the first digit of the final value <br> Dice 1 : ${PlayerRolls[0]} <br> Dice 2 :${PlayerRolls[1]} .`;
    }

    if (input == 1) {
      var playerScore = Number(String(PlayerRolls[0]) + String(PlayerRolls[1]));
      return ` Your Chosen Value is : ${playerScore} `;
    }
  }
  if (input == 2)
    var playerScore = Number(String(PlayerRolls[1]) + String(PlayerRolls[0]));
  return ` Your Chosen Value is : ${playerScore} `;
};
