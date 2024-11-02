let $ = document;
// holders 

let UI = {
    pressAlert: $.querySelector('#alert'),
    itemBoxes: $.querySelector("#container")
}


let ev = {
    Key: $.querySelector('#e-key'),
    Loc: $.querySelector('#e-loc'),
    Code: $.querySelector('#e-code'),
    Dump: $.querySelector('#e-dump'),
    Whiches: $.querySelectorAll('.e-which')
}

$.body.addEventListener("keydown", function (e) {
    e.preventDefault();
    console.log(e);
    // UI 
    UI.pressAlert.style.display = 'none'
    UI.itemBoxes.style.display = 'flex'
    // Replace event values
    ev.Whiches.forEach(function (event) {
        event.innerHTML = e.which
    });
    ev.Key.innerHTML = e.key;
    if (e.key === " ") {
        ev.Key.innerHTML = "Blank Space"
    }
    ev.Code.innerHTML = e.code;

    if (e.location === 0) {
        ev.Loc.innerHTML = "Generals Key"
    } else if (e.location === 1) {
        ev.Loc.innerHTML = "Left-Side Modifier Keys"
    } else if (e.location === 2) {
        ev.Loc.innerHTML = "Right-Side Modifier Keys"
    } else if (e.location === 3) {
        ev.Loc.innerHTML = "Numpad"
    }

    const dumpInfo = {
        key: e.key,
        keyCode: e.keyCode,
        which: e.which,
        code: e.code,
        location: e.location,
        altKey: e.altKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        shiftKey: e.shiftKey,
        repeat: e.repeat,
        isTrusted: e.isTrusted,
    };

    ev.Dump.innerHTML = JSON.stringify(dumpInfo, null, 3);
})
