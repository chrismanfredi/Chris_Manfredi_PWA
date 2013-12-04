(function(){


    console.log("FIGHT!");

    // Players
    var PlayerOne = "Spiderman";
    var PlayerTwo = "Batman";

    // Health
    var PlayerOneHealth = 100;
    var PlayerTwoHealth = 100;

    // Damage
    var PlayerOneDamage = 20;
    var PlayerTwoDamage = 20;

    // Round
    var round = 0;

    function fight(){
        console.log('in the fight function');

        alert(PlayerOne+":"+PlayerOneHealth+" Start "+PlayerTwo+":"+PlayerTwoHealth);

        for (var j=0; j < 10; j++){

            // Random Formula is - Math.floor(Math.random() * (Max - Min) + Min);

            var minDamage1 = PlayerOneDamage * .5;
            var minDamage2 = PlayerTwoDamage * .5;
            var v1 = Math.floor(Math.random()*(PlayerOneDamage-minDamage1)+minDamage1);
            var v2 = Math.floor(Math.random()*(PlayerTwoDamage-minDamage2)+minDamage2);

           // damage
           PlayerOneHealth-=v1;
           PlayerTwoHealth-=v2;

           console.log(PlayerOne+":"+PlayerOneHealth+" "+PlayerTwo+":"+PlayerTwoHealth);

           var results = winnerCheck();
           console.log(results);

           if(results === "no winner"){
               round++;
               alert(PlayerOne+":"+PlayerOneHealth+" Round "+round+ " Over "+PlayerTwo+":"+PlayerTwoHealth);
           }else{
               alert(results);
               break;



           };




            console.log(j);
        };
    };

    function winnerCheck(){
       var results="no winner";

       if(PlayerOneHealth<1 && PlayerTwoHealth<1){
           results = "You Both Die";
       } else if(PlayerOneHealth<1){
           results = PlayerTwo+" Wins!"
       } else if(PlayerTwoHealth<1){
           results = PlayerOne+" Wins!"
       };

       return results;
    };

    // ******* The program code goes here ********* //

    console.log('program starts')
    fight();

})();

