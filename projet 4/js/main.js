function bold(){
    $("#hi").css("fontWeight","bold")
}
function italic(){
    $("#hi").css("fontStyle","italic")
}
function underline(){
    $("#hi").css("textDecoration","underline")
}
function changeSize(){
    let size = $("#size").val()
    $("#hi").css("fontSize", size + "px")
}
function changeFont(){
    let font = $("#font").val()
    $("#hi").css("fontFamily", font)
}

$("#changeFont").change(changeFont)
$("#changeSize").change(changeSize)
$("#underline").click(underline)
$("#bold").click(bold)
$("#italic").click(italic)