//'use strict';

const { ipcRenderer } = require('electron');

module.exports = (Franz) => {

  const getMessages = function getMessages() {

    // check notification badge for franz badge
    let hasNotification =
          !!document.querySelector('#app div.notifications > button > i.circle');

    Franz.setBadge(0, hasNotification?1:0);
  };

  Franz.loop(getMessages);
};