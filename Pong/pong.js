/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {

    ////////////////////////////////////////////////////////////////////////////////
    //////////////////////////// SETUP /////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    var FRAME_RATE = 60;
    var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
    var KEY = {
        "W": 87,
        "S": 83,
        "UP": 38,
        "DOWN": 40
    }

    var player1 = {
        "y-coordinate": 300,
        "y-speed": 0
    }
    var player2 = {
        "y-coordinate": 300,
        "y-speed": 0
    }
    var ball = {
        "x-coordinate": 400,
        "y-coordinate": 0,
        "x-speed": 0,
        "y-speed": 0
    }
    var walls = {
        "leftWall": 0,
        "rightWall": $("#board").width() - 50,
        "topWall": 0,
        "bottomWall": $("#board").height() - 50
    }

    var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);
    $(document).on('keydown', handleKeyDown);
    $(document).on('keyup', handleKeyUp)

    ////////////////////////////////////////////////////////////////////////////////
    ///////////////////////// CORE LOGIC ///////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    function newFrame() {
        repositionGameItem()
        redrawGameItem()
    }

    function handleKeyDown(event) {
        if (event.which === KEY.W) {
            player1["y-speed"] = -5
        }
        else if (event.which === KEY.S) {
            player1["y-speed"] = 5
        }
    }

    function handleKeyUp(event) {
        if (event.which === KEY.W) {
            player1["y-speed"] = 0
        }
        else if(event.which === KEY.S) {
            player1["y-speed"] = 0
        }
    }


    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////


    function endGame() {
        // stop the interval timer
        clearInterval(interval);

        // turn off event handlers
        $(document).off();
    }
    function repositionGameItem() {
        player1["y-coordinate"] += player1["y-speed"]
        player1["y-coordinate"] += player1["y-speed"]
    }

    function redrawGameItem() {
        $("#player1").css("top", player1["y-coordinate"])
    }
}