//Numbers
$(document).ready(function () {
  Numbers();
  function Numbers(){
    $(".numbers-row .button").on("click", function() {

      var button = $(this);
      var oldValue = button.parent(".numbers-row").find("input").val();

      if (button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
      }else {
        if (oldValue > 1 ) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
      if (oldValue < 0 ) {
        newVal = 1;
      }
      if (oldValue == "") {
        newVal = 1;
      }

      button.parent(".numbers-row").find("input").val(newVal);

    });

  }

});