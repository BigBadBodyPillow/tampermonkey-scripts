// ==UserScript==
// @name         Remove Sidebar Games
// @namespace    http://tampermonkey.net/
// @version      2024-11-14
// @description  Removes games from the sidebar that im not interested in
// @author       You
// @match        https://maxroll.gg/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=maxroll.gg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    const titles = ["Monster Hunter Wilds","World of Warcraft","Throne And Liberty", "Diablo III", "Diablo II: R", "Lost Ark","Torchlight Infinite","Destiny 2","Clair Obscur: Expedition 33","Elden Ring Nightreign"]; // Add more titles as needed

    const intervalId = setInterval(() => {
    titles.forEach((title) => {
        const childElement = document.querySelector(`a[title="${title}"]`);
        if (childElement && childElement.parentElement) {
            childElement.parentElement.remove();
            // Optionally remove the title from the array if it should no longer be checked
            titles.splice(titles.indexOf(title), 1);
        }
    });

    // Stop the interval if all titles have been removed
    if (titles.length === 0) {
        clearInterval(intervalId);
    }
    }, 500); // Check every 500 milliseconds

})();
