// jQuery files
$(document).ready(function(){
    $('#home').mouseleave(function(){
        $('#needs_to_slide').removeClass("slide_up");
        $('#needs_to_slide').addClass("slide_down");
    });
    $('#home').mouseenter(function(){
        $('#needs_to_slide').addClass("slide_up");
        $('#needs_to_slide').removeClass("slide_down");
    });
    $('#features').mouseenter(function(){
        $('#ball_image').addClass('bounceIn');
        active_features();
    })
	$("#warning").hide();
	$('#pop_up').hide();
		$('.send_form_info').click(function(){
		var name = $('#fname').val();
        var gender  = $('#lname').val();
        var message = $('#subject').val();
        validateForm(name, gender, message);
	});
        // function for validating form info
    $('.send_form_info').click(function(){
    	var firstName =  $('#fname').val();
    	var gender  = $('#lname').val();
    	var message = $('#subject').val();

    	$('#firstName').text(firstName);
    	$('#lastName').text(gender);
    	$('#description').text(message);
    });
    // function for sliding bet in create bet
    $('#createBet').mouseenter(function(){
         $('#betyou_feature_above_v2').show();
            slide_info_timing();
            promote_bet_slider();
        $('#betyou_feature_behind_v2').show();
    });
});
// function for validating form checking if input field is filled.
function validateForm(name, gender, message) {
    
    if(name== '' || gender== ''){
           $('#warning').show();
        }else {
            $('#pop_up').show('slow');
             $('#warning').hide('slow');
        }
        console.log(name);
};
// end of function for validating form checking if input field is filled.



// function for activating all functions relating to features
function active_features(){
   document.getElementById('features').addEventListener('mouseover', slide_info_timing);
};
// end of function for activating all functions relating to features


// function for the sliding info that relates to features
function slide_info(){
    document.getElementById('firstInfo').style.display = 'block';
    document.getElementsByClassName('firstInfoB')[0].style.display = 'block';
};
function slide_infoB(){
    document.getElementById('secondInfo').style.display = 'block';
    document.getElementById('secondinfoB').style.display = 'block';
}
// function for sliding button of createm bet
function slideButton(){
   document.getElementById('big_animated_button').style.display = 'block';
}
 function slide_info_timing(){
    setTimeout(slide_info, 000);
    setTimeout(slide_infoB, 500);
    setTimeout(slideButton,1000);
 };
 function promote_bet_slider(){
    document.getElementById('share_on_social_pic').addEventListener('mouseover', share_bets_on_social);
 };
 
    function share_bets_on_social(){
        document.getElementById('share_bets_on_social').style.display = 'block';
    };