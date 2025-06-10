(function(){
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(['myCursor'], function(result){
      if(result.myCursor){
        aniLoadFromBlobo(result.myCursor, function(aniCursor){
          makeanimcursor(aniCursor.BlobUrlArray, window.document.documentElement, aniCursor.cssDuration);
        });
      }
    });
  }
})();
