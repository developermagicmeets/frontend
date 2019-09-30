/**
 * Auth
 */

// Reg
$("#registerForm")
	.validator()
	.on("submit", function(event) {
		if (event.isDefaultPrevented()) {
			// handle the invalid form...
			regFormError();
			regSubmitMSG(false, "Did you fill in the form properly?");
		} else {
			// everything looks good!
			event.preventDefault();
			submitReg();
		}
	});

function submitReg() {
	var name = $("#regname").val();
	var email = $("#regemail").val();
	var password = $("#regpassword").val();

	$.ajax({
		type: "POST",
		url: "http://api.magicmeets.in/profile/register/",
		data: {
			name: name,
			email: email,
			password: password,
		},
		beforeSend: () => {
			// $("#regname").attr('disabled',true);
			$("#regemail").attr('disabled',true);
			$("#regpassword").attr('disabled',true);
			$('#regSubmit').attr('disabled',true);
		},
		success: function(resp) {
				regSuccess(resp);
		},
		error: (err)=>{
			console.log(err);
			regFormError();
			regSubmitMSG(false, err.message)
		}
	});
}

function regSuccess(resp) {
	$("#registerForm")[0].reset();
	$('.no-auth, .auth').addClass('logged-in')
	regSubmitMSG(true, "Registration Successful! You'll be redirected to profile page in 5 seconds");
	localStorage.setItem('authToken', resp.token);
	setTimeout(()=>window.location.href('profile.php'), 4000) 
}

function regFormError() {
	$("#registerForm")
		.removeClass()
		.addClass("shake animated")
		.one(
			"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
			function() {
				$(this).removeClass();
			}
		);
}

function regSubmitMSG(valid, msg) {
	if (valid) {
		var msgClasses = "h3 text-left tada animated text-success";
	} else {
		var msgClasses = "h3 text-left text-danger";
	}
	$("#regmsgSubmit")
		.removeClass()
		.addClass(msgClasses)
		.text(msg);
}

// Login

$("#loginForm")
	.validator()
	.on("submit", function(event) {
		if (event.isDefaultPrevented()) {
			// handle the invalid form...
			loginFormError();
			loginSubmitMSG(false, "Did you fill in the form properly?");
		} else {
			// everything looks good!
			event.preventDefault();
			submitLogin();
		}
	});

function submitLogin() {
	// Initiate Variables With Form Content
	var email = $("#loginemail").val();
	var password = $("#loginpassword").val();

	$.ajax({
		type: "POST",
		url: "http://api.magicmeets.in/profile/login/",
		data: {
			email: email,
			password: password,
		},
		success: function(resp) {
			if (resp.status == "201") {
				loginSuccess();
			} else {
				loginFormError();
				loginSubmitMSG(false, text);
			}
		},
	});
}

function loginSuccess() {
	$("#loginForm")[0].reset();
	loginSubmitMSG(true, "Message Submitted!");
}

function loginFormError() {
	$("#loginForm")
		.removeClass()
		.addClass("shake animated")
		.one(
			"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
			function() {
				$(this).removeClass();
			}
		);
}

function loginSubmitMSG(valid, msg) {
	if (valid) {
		var msgClasses = "h3 text-left tada animated text-success";
	} else {
		var msgClasses = "h3 text-left text-danger";
	}
	$("#loginmsgSubmit")
		.removeClass()
		.addClass(msgClasses)
		.text(msg);
}

// Profile
