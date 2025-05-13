// Shuffle array
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

// URL Hover Display
var urlDisplay = document.createElement('div');
urlDisplay.id = 'url-display';
urlDisplay.className = 'absolute bg-gray-800 text-white text-xs sm:text-sm px-2 py-1 rounded hidden';
document.body.appendChild(urlDisplay);

function showURL(url) {
  urlDisplay.textContent = url;
  urlDisplay.classList.remove('hidden');
  urlDisplay.style.top = (event.pageY + 10) + 'px';
  urlDisplay.style.left = (event.pageX + 10) + 'px';
}

function hideURL() {
  urlDisplay.classList.add('hidden');
}