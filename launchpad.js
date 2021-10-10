$(function () {
  const a = new Date();
  $("[data-show]").each(function () {
    $(this).addClass("hasShowDate");
    let s = new Date($(this).attr("data-show"));
    $(this).addClass(s < a ? "isPast" : "isFuture");
  });
  $("[data-hide]").each(function () {
    $(this).addClass("hasHideDate");
    let s = new Date($(this).attr("data-hide"));
    $(this).addClass(s < a ? "isPast" : "isFuture");
  });
  $(".hidden").hide();
  if(location.search == "?tech") {
    $("#changeTo-tech").trigger('click');
  };
});
$("#changeTo-tech").on("click", () => {
  $("#changeTo-rph").removeClass("disabled");
  $("#changeTo-tech").addClass("disabled");
  $(".rph-only").css("display", "none");
  $(".tech-only").css("display", "flex");
  $(".tech--full").removeClass("width--half");
});
$("#changeTo-rph").on("click", () => {
  $("#changeTo-tech").removeClass("disabled");
  $("#changeTo-rph").addClass("disabled");
  $(".rph-only").css("display", "flex");
  $(".tech-only").css("display", "none");
  $(".tech--full").addClass("width--half");
});
