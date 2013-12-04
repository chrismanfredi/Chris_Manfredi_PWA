(function(){


    console.log("FIGHT!");

    var playerone = ["Spiderman", 20, 100];
    var playertwo = ["Batman", 20, 100];

//    Players
//    var PlayerOne = "Spiderman";
//    var PlayerTwo = "Batman";

//    Health
//    var PlayerOneHealth = 100;
//    var PlayerTwoHealth = 100;
//
//    Damage
//    var PlayerOneDamage = 20;
//    var PlayerTwoDamage = 20;

    // Round
    var round = 0;

    function fight(){
        console.log('in the fight function');

        alert(playerone[0]+":"+playerone[2]+" Start "+playertwo[0]+":"+playertwo[2]);

        for (var j=0; j < 10; j++){

            // Random Formula is - Math.floor(Math.random() * (Max - Min) + Min);

            var minDamage1 = playerone[1] * .5;
            var minDamage2 = playertwo[1] * .5;
            var v1 = Math.floor(Math.random()*(playerone[1]-minDamage1)+minDamage1);
            var v2 = Math.floor(Math.random()*(playertwo[1]-minDamage2)+minDamage2);

           // damage
           playerone[2]-=v1;
           playertwo[2]-=v2;

           console.log(playerone+":"+playerone+" "+playertwo+":"+playertwo);

           var results = winnerCheck();
           console.log(results);

           if(results === "no winner"){
               round++;
               alert(playerone[0]+":"+playerone[2]+" Round "+round+ " Over "+playertwo[0]+":"+playertwo[2]);
           }else{
               alert(results);
               break;



           };




            console.log(j);
        };
    };

    function winnerCheck(){
       var results="no winner";

       if(playerone[2]<1 && playerone[2]<1){
           results = "You Both Die";
       } else if(playerone[2]<1){
           results = playertwo[0]+" Wins!"
       } else if(playertwo[2]<1){
           results = playerone[0]+" Wins!"
       };

       return results;
    };

    // ******* The program code goes here ********* //

    console.log('program starts')
    fight();

})();

