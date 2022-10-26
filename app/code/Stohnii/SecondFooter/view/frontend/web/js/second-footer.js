/**
 * @author      Valia <valiastohnii@gmail.com>
 * @copyright   Copyright (c) 2022 GmbH 
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
*/

define(['jquery'],function($){
    'use strict';
    return function(){    
        let numbers = [];
        let guessNumber = 0;
        let message = ' ';
        
               
        $('.click_me_button').click(function () {
            $('.game_modal_overlay').removeClass('is-hidden');   
            getRandomCard();
        })
        $('.close_button').click(function(){
            clear();
        })

        function getRandomCard(){
            let random = Math.floor(Math.random() * 50) + 1;
            console.log(random);
            guessNumber = random;
        }
     
        $('.guess_button').click(function(){
            numbers.push($('.game_modal_input').val())
            console.log(numbers)

            for (let i=0; i<numbers.length; i++){
                console.log(numbers[i])
                if(numbers[i] == guessNumber){
                    console.log("You've got Guess Number!")
                    message = "You've got Guess Number!";
                    $('.numbers-el').html(`<li> ${numbers} </li>`);
                } else if( numbers[i] < guessNumber){
                    console.log("was below")
                    message = "was below";
                } else if ( numbers[i] > guessNumber){
                    console.log("was above")
                    message = "was above";
                }
                $('.message-el').text(message)
            }
        })

        function clear(){
            message = ' ';
            numbers = [];
            guessNumber = 0;
            $('.game_modal_overlay').addClass('is-hidden');
            $('.message-el').text(message);
            $('.numbers-el').text(numbers);
            $('.game_modal_input').val(' ')
        }
        

    }
});