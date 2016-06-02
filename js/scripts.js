$(document).ready(function() {
  $("#triangles").submit(function(event) {
    var sideOne = parseInt($("#side1").val());
    var sideTwo = parseInt($("#side2").val());
    var sideThree = parseInt($("#side3").val());
    if ((sideOne+sideTwo<=sideThree)||(sideTwo+sideThree<=sideOne)||(sideOne+sideThree<=sideTwo)) {
      $("#result h1").text('This is not a triangle.');
    } else if (sideOne === sideTwo && sideOne === sideThree) {
      $("#result h1").text('This is an equilateral.');
    } else if (sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree) {
      $("#result h1").text('This is an isosceles triangle.');
    } else {
      $("#result h1").text('This is a scalene triangle.');
    };
    event.preventDefault();
  });
});
