// ==UserScript==
// @name         POE REMOVE COPYWRITE THING FROM BOTTOM
// @namespace    http://tampermonkey.net/
// @version      2025-02-06
// @description  try to take over the world!
// @author       You
// @match        https://www.pathofexile.com/trade/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pathofexile.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const copyright =document.querySelector(`.copyright`);
    const legal = document.querySelector(`.legal`);

    if (copyright && legal ) {
        copyright.remove();
        legal.remove();
    }
})();