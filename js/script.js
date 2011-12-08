

(function ($) {

  // Put all your JS here
  							 	/* Paul's field label thingy */
  $.fn.textfieldLabel = function() {
	  this.each(function() {
		  $(this).hide();
		  var lt = $(this).html(); // label text
		  var f = $('#' + $(this).attr('for')); // field element

		  f.val(lt);
		  f.addClass('with-label');

		  f.focus(function () {
			  if ($(this).val() == lt) {
				  $(this).val('');
		      $(this).removeClass('with-label');
			  }
		  });

		  f.blur(function () {
			  if ($(this).val() == '') {
				  $(this).val(lt);
				  $(this).addClass('with-label');
			  }
		  });
	  })
  }




/* Paul's clickable parent thingy */
  $.fn.clickableParent = function() {
	  $(this).addClass('clickable');
	  this.hover(function() { $(this).addClass('hover'); }, function() { $(this).removeClass('hover'); });
    this.click(function() {
	    window.location = $(this).find('a:first').attr('href');
    });
  }
  


  $(document).ready(function() {
	 $('body').addClass('js'); 
						 

  // clickable parent assign
  $('.selector').clickableParent();




  });
  // end

})(jQuery);