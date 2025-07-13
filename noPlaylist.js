// ==UserScript==
// @name         no playlist
// @namespace    http://tampermonkey.net/
// @version      2025-07-13
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function cleanURL() {
        const url = window.location.href;
        const listIndex = url.indexOf("&list");
        // if it exists
        if (listIndex !== -1) {
            const cleanUrl = url.substring(0, listIndex);
            window.location.replace(cleanUrl);
            // not reload
            //history.replaceState(null, '', cleanUrl);
        }
    }

    cleanURL();


})();
