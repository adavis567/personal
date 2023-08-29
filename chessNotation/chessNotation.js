var piece

function king() {
    piece = 'k'
    document.getElementById("notation").innerHTML=piece
    document.getElementById('notation').classList.remove('hidden');
}
function queen() {
    piece='q'
    document.getElementById("notation").innerHTML=piece
    document.getElementById('notation').classList.remove('hidden');
}
