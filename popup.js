var cursorfileinput = document.getElementById('cursorfileinput');
var cursorList = document.getElementById('cursorList');

// ---- animated cursor stuff ----
cursorList.onchange = function(){
    var filename = cursorList.value;
    aniFileImport(filename, function(aniCursor){
        animcur = makeanimcursor(aniCursor.BlobUrlArray, window.document.documentElement, aniCursor.cssDuration);
    });
};

var animcur = undefined;
cursorfileinput.addEventListener('change', function(e) {
    if(this.files[0]){
        aniFileImport(this.files[0], function(aniCursor){
            animcur = makeanimcursor(aniCursor.BlobUrlArray, window.document.documentElement, aniCursor.cssDuration);
        });
    }
}, false);

aniLoadFromStorage(function(aniCursor){
    animcur = makeanimcursor(aniCursor.BlobUrlArray, window.document.documentElement, aniCursor.cssDuration);
});

// ---- end animated cursor stuff ----

