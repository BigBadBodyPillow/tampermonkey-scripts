// ==UserScript==
// @name         Remove leaderboard
// @namespace    http://tampermonkey.net/
// @version      2025-04-21
// @description  try to take over the world!
// @author       You
// @match        https://www.hyperiondev.com/portal/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hyperiondev.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const leaderboard = document.querySelector("#leaderboard-container")
    leaderboard.style.display = "none";

    // Your code here...
})();