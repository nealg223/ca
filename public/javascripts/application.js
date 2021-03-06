// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$(document).ready(function() {
	function filterPath(string) {
	  return string
	    .replace(/^\//,'')
	    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
	    .replace(/\/$/,'');
	  }
	  var locationPath = filterPath(location.pathname);
	  var scrollElem = scrollableElement('html', 'body');

	  $('a[href*=#]').each(function() {
	    var thisPath = filterPath(this.pathname) || locationPath;
	    if (  locationPath == thisPath
	    && (location.hostname == this.hostname || !this.hostname)
	    && this.hash.replace(/#/,'') ) {
	      var $target = $(this.hash), target = this.hash;
	      if (target) {
	        var targetOffset = $target.offset().top;
	        $(this).click(function(event) {
	          event.preventDefault();
	          $(scrollElem).animate({scrollTop: targetOffset}, 500, function() {
	            location.hash = target;
	          });
	        });
	      }
	    }
	  });

	  // use the first element that is "scrollable"
	  function scrollableElement(els) {
	    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
	      var el = arguments[i],
	          $scrollElement = $(el);
	      if ($scrollElement.scrollTop()> 0) {
	        return el;
	      } else {
	        $scrollElement.scrollTop(1);
	        var isScrollable = $scrollElement.scrollTop()> 0;
	        $scrollElement.scrollTop(0);
	        if (isScrollable) {
	          return el;
	        }
	      }
	    }
	    return [];
	  }

    function isScrolledIntoView(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom));
    }
    
    $(window).scroll(function () { 
          // $("span").css("display", "inline").fadeOut("slow");
		$('.nav_link').removeClass("current");
		if (isScrolledIntoView($('#wanted'))) {
			$('#first').addClass('current');
		} else if(isScrolledIntoView($('#skills'))) {
			$('#second').addClass('current');
		} else if(isScrolledIntoView($('#eligibility'))) {
			$('#third').addClass('current');
		} else if(isScrolledIntoView($('#crew'))) {
			$('#fourth').addClass('current');
		} else if(isScrolledIntoView($('#community'))) {
			$('#fifth').addClass('current');
		} else if(isScrolledIntoView($('#apply'))) {
			$('#sixth').addClass('current');
		} // else if(isScrolledIntoView($('#contact'))) {
		//      $('#seventh').addClass('current');
		//    }
	});
});
	
	$(document).ready(function() {
		$("#cf_onclick").click(function() {
			$("#cf2 img.top").toggleClass("transparent");
		});
	});
	
	$(document).ready(function() {
		$("#choices-yes_onclick").click(function() {
			$("#choices-yes img.top").toggleClass("transparent");
		});
	});
	
  $(document).ready(function(){
  	/* The following code is executed once the DOM is loaded */

  	$('.sponsorFlip').bind("click",function(){

  		// $(this) point to the clicked .sponsorFlip element (caching it in elem for speed):

  		var elem = $(this);

  		// data('flipped') is a flag we set when we flip the element:

  		if(elem.data('flipped'))
  		{
  			// If the element has already been flipped, use the revertFlip method
  			// defined by the plug-in to revert to the default state automatically:

  			elem.revertFlip();

  			// Unsetting the flag:
  			elem.data('flipped',false)
  		}
  		else
  		{
  			// Using the flip method defined by the plugin:

  			elem.flip({
  				direction:'lr',
  				speed: 350,
  				onBefore: function(){
  					// Insert the contents of the .sponsorData div (hidden
  					// from view with display:none) into the clicked
  					// .sponsorFlip div before the flipping animation starts:

  					elem.html(elem.siblings('.sponsorData').html());
  				}
  			});

  			// Setting the flag:
  			elem.data('flipped',true);
  		}
  	});

  });

$(document).ready(function() {

$('.showable').hide();

$('.toggle').click(function() {
var element = ("#showable-" + $(this).data("target"));
  $(element).toggle('normal');
  return false;
});

});
