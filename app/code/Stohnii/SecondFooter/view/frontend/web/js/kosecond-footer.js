define(['jquery','ko'],function($, ko){
    'use strict';
    return function(){
        let numbers = [];
        let guessNumber = 0;
        let message = ' ';

        function getRandomCard(){
            let random = Math.floor(Math.random() * 50) + 1;
            console.log(random);
            guessNumber = random;
        }
        return{
            clickMeButton: function () {
                console.log('888');
                $('.game_modal_overlay').removeClass('is-hidden');
                getRandomCard();
            },
            closeButton: function () {
                console.log('555');
                $('.game_modal_overlay').addClass('is-hidden');
            }
        }
    }
});
