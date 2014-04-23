$(function(){

  var MemoryGame = function(){
    this.init();
  };

  MemoryGame.prototype = jQuery.extend(MemoryGame.prototype, {
    init: function(){
      var deck = [1,5,3,5,7,8];

      this.createDeck(deck);
      this.handleClick();
    },
    createDeck: function(deck){
      deck.forEach(function(num){
        $('#gameContainer').append(function(){
          var card = $('<div class="card"/>');
          return card.html(num);
        });
      });
    },
    reset: function(clicked){
      $('.card').css("color","#fff");
      clicked = [];
    },
    handleClick: function(){
      var clicked = [];
      var self = this;
      $('.card').click(function(event){
        event.preventDefault();
        $(this).css('color', '#000');
        clicked.push($(this).html());
        if(clicked.length == 2){
          if(clicked[0] == clicked[1] ){
            alert('This is a match!');
            self.reset(clicked);
          }else{
            alert('This is not a match :(');
            self.reset(clicked);
          }
          clicked = [];
        }
      });
    }
  });

  memoryGame = new MemoryGame();
});
