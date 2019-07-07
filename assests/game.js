$(document).ready(function() {
    
    var targetNum = 0;
    var score = 0;
    var wins = 0;
    var losses = 0;
  
  
    function generateNum(min_value, max_value) {
      return Math.floor(Math.random() * (max_value - min_value) + min_value);
    };
  
    
    function setCrystal(crystalType){
      var crystalVal = generateNum(1, 12);
      $("#" + crystalType).attr("data-value", crystalVal);
    }
  
    
    function newGame() {
   
      targetNum = generateNum(19, 120);
      
      $("#targetNum").text(targetNum);
      
      $(".crystal").each(function(){
        setCrystal($(this).attr('id'));
      })
    }
  
   
    function gameOver(){
     
      if (score > targetNum){
        
        losses++;
        
        $("#losses").text(losses);
        
        alert("Oh No! Let's play one more time.");
        
        score = 0;
        
        newGame();
        
        $("#score").text(score);
        
      } else if (score == targetNum){
        
        wins++;
        
        $("#wins").text(wins);
        
        alert("You Won! Let's play one more time.");
       
        newGame();
        
        score = 0;
        
        $("#score").text(score);
      }
    }
  
    
    $(".crystal").on("click", function(){
      
      score = score + parseInt($(this).attr("data-value"));
      
      $("#score").text(score);
      
      gameOver();
    });
  
    newGame();
  });