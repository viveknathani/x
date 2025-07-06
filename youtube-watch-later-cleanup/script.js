const elements = document.getElementsByTagName('ytd-playlist-video-renderer');

function clearElement(element) {
  element.children[2].children[0].children[2].click();
  document.getElementsByTagName('ytd-menu-service-item-renderer')[2].click();
}

function setTimeoutAsync(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

(async () => {
  for (let i = elements.length - 1; i >= 0; i--) {
    clearElement(elements[i]);
    await setTimeoutAsync(2000);
  }
})();

