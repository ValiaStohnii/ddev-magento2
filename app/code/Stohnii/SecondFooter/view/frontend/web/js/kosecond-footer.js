define(['jquery','ko'],function($, ko){
    'use strict';
    return function(){
        let numbers = ko.observableArray();
        let guessNumber = 0;
        let message = ko.observable();

        function getRandomCard(){
            let random = Math.floor(Math.random() * 50) + 1;
            console.log(random);
            guessNumber = random;
        }
        function clear(){
            message(' ');
            numbers([]);
            guessNumber = 0;
            $('.game_modal_overlay').addClass('is-hidden');
            $('.game_modal_input').val(' ')
        }
        function newMessage() {
            for (let i=0; i<numbers().length; i++) {
                console.log(numbers)
                if (numbers()[i] == guessNumber) {
                       console.log(numbers())
                    message("You've got Guess Number!");
                } else if (numbers()[i] < guessNumber) {
                    message("was below");
                } else if (numbers()[i] > guessNumber) {
                    message("was above");
                }
            }
        }
        return{
            clickMeButton: function () {
                $('.game_modal_overlay').removeClass('is-hidden');
                getRandomCard();
            },
            closeButton: function () {
                clear();
            },
            guessButton: function (){
                numbers.push($('.game_modal_input').val());
                newMessage();
            },
            numbers: numbers,
            message: message,
        }
    }
});
