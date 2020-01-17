// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	console.log("topFunction", topFunction);
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

var selected = null;
$(".icon").click(function() {
  var tempSelected = null;
  if (selected != null) {
    tempSelected = selected;
  }
  selected = $(this);
  $(this).find(".background_circle").css({ display: "block", opacity: "1" });

  var color = $(this).find(".background_circle").css("backgroundColor");
  console.log(color);
  var tl = new TimelineMax();
  tl
    .to($(this).find(".background_circle"), 3, {
      scale: 100,
      transformOrigin: "50% 50%",
      ease: Linear.easeIn
    })
    .to(
      $("body"),
      0,
      {
        backgroundColor: color
      },
      "-=2"
    );

  if (
    tempSelected !== null &&
    $(this).attr("class") !== tempSelected.attr("class")
  ) {
    TweenMax.to(
      tempSelected.find(".background_circle"),
      0,
      {
        opacity: 0,
        scale: 0,
        transformOrigin: "50% 50%",
        ease: Linear.easeIn
      },
      "-=3"
    );
  }
});
