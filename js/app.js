$(document).ready(function() {
    let headerText = $(".header-text");
    let clicked = false;
    function anime() {
        headerText.css(
            "opacity", "1"
        )
        headerText.css(
            "top", "50%"
        )
    }
    setTimeout(anime, 500)
    $(".navbar-toggler").click(function() {
        if (clicked) {
            headerText.css(
                "top", "50%"
            )
            headerText.css(
                "opacity", "1"
            )
            clicked = false;
        }
        else {
            headerText.css(
                "top", "100%"
            )
            headerText.css(
                "opacity", "0"
            )
            clicked = true;
        }
    })
});