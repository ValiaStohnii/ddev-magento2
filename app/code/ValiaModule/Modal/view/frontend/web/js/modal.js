/**
 * @author      Valia <valiastohnii@gmail.com>
 * @copyright   Copyright (c) 2022 GmbH 
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
*/

define(['jquery'],function($){
    'use strict';
    return function(){           
        if(!localStorage.getItem("modal")){
            $('.overlay').removeClass('is-hidden');
        }
        /**
         * Cancel modal
        */
        $('.modal_btn--cancel').click(function () {
            $('.overlay').addClass('is-hidden');    
        })
        /**
         * Close modal, add item to localStorage and don't show modal again
        */
        $('.modal_btn--close').click(function (){
            localStorage.setItem("modal", "open");
            $('.overlay').addClass('is-hidden'); 
        })
    }
});