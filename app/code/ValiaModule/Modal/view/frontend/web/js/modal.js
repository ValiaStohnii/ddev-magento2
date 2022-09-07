/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 * 
 * author: Valia
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