$(document).ready(function(){
    // Hide/show ui function.
    function display(bool) {
        if (bool) {
            $("#overlay").show();
        } else {
            $("#overlay").hide();
        }
    }

    display(false)

    window.addEventListener('message', function(event) {

        // open breathalyzer if message is open.
        var item = event.data;
        if (item.type === "open") {
            if (item.status == true) {
                display(true)
            } else {
                display(false)
            }
        }
    });

    // nui call back for when each image is pressed.
    $("#DefaultAim").click(function () {
        $.post('https://JK_WeaponAnimation/1', JSON.stringify({}));
        return
    })
    $("#GangsterAim").click(function () {
        $.post('https://JK_WeaponAnimation/2', JSON.stringify({}));
        return
    })
    $("#HillBillyAim").click(function () {
        $.post('https://JK_WeaponAnimation/3', JSON.stringify({}));
        return
    })

    // second row
    $("#DefaultHolster").click(function () {
        $.post('https://JK_WeaponAnimation/4', JSON.stringify({}));
        return
    })
    $("#BackHolster").click(function () {
        $.post('https://JK_WeaponAnimation/5', JSON.stringify({}));
        return
    })
    $("#CopHolster").click(function () {
        $.post('https://JK_WeaponAnimation/6', JSON.stringify({}));
        return
    })

    // third row
    $("#FrontHolster").click(function () {
        $.post('https://JK_WeaponAnimation/7', JSON.stringify({}));
        return
    })
    $("#FrontAgressiveHolster").click(function () {
        $.post('https://JK_WeaponAnimation/8', JSON.stringify({}));
        return
    })
    $("#LegHolster").click(function () {
        $.post('https://JK_WeaponAnimation/9', JSON.stringify({}));
        return
    })


    // Close ui when ESC is pressed
    document.onkeyup = function(data) {
        if (data.which == 27) {
            $.post('https://JK_WeaponAnimation/close', JSON.stringify({}));
            return
        }
    };
});