/*
 * Login Check
 */

var logged_in = false;
var authToken = false;
try {
	authToken = localStorage.getItem("authToken");
} catch (err) {
	authToken = null;
}

if (authToken) {
	logged_in = true;
}

const apiHost = "http://api.magicmeets.in/";
var mmuser;
var user;

function checkLogin() {
	$.ajax({
		url: apiHost + "user/user/",
		headers: {
			Authorization: `Token ${authToken}`,
		},
		method: "GET",
		success: resp => {
			mmuser = resp["mmuser"];
			user = resp["user"];
			loggedIn(resp);
		},
		error: err => {
			console.log(err);
			notLoggedIn();
		},
	});
}

function notLoggedIn() {
	$(".auth, .no-auth").removeClass("logged-in");
	logged_in = false;
	try {
		localStorage.removeItem("authToken");
	} catch (err) {
		console.log(err);
	}
}

function loggedIn() {
	logged_in = true;
	$(".auth, .no-auth").addClass("logged-in");
	if (page === "profile") {
		updateProfile(mmuser);
	}
}

function logout() {
	$.ajax({
		url: apiHost + "user/logout/",
		method: "POST",
		headers: {
			Authorization: `Token ${authToken}`,
		},
		success: resp => {
			notLoggedIn();
			window.location.href = "index.php";
		},
		error: err => {
			console.log(err);
		},
	});
}

if (logged_in) {
	checkLogin();
}

/**
 * Auth
 *		Note: Reg Login Code is that of the template. Profile Code is optimised to requirements.
 */

// Reg
if (!logged_in) {
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
			url: apiHost + "user/register/",
			data: {
				name: name,
				email: email,
				password: password,
			},
			beforeSend: () => {
				// $("#regname").attr('disabled',true);
				$("#regemail").attr("disabled", true);
				$("#regpassword").attr("disabled", true);
				$("#regSubmit").attr("disabled", true);
				$(".form-message").text("Submitting");
			},
			success: function(resp) {
				regSuccess(resp);
			},
			error: err => {
				console.log(err);
				regFormError();
				regSubmitMSG(false, "Some error occured");
			},
		});
	}

	function regSuccess(resp) {
		$("#registerForm")[0].reset();
		$(".no-auth, .auth").addClass("logged-in");
		regSubmitMSG(
			true,
			"Registration Successful! You'll be redirected to profile page in 5 seconds"
		);
		localStorage.setItem("authToken", resp.token);
		setTimeout(() => (window.location.href = "profile.php"), 4000);
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
			url: apiHost + "user/login/",
			data: {
				username: email,
				password: password,
			},
			beforeSend: () => {
				$(".form-message").text("Submitting");
			},
			success: function(resp) {
				loginSuccess(resp);
			},
			error: err => {
				console.log(err.responseJSON.message);
				loginFormError();
				loginSubmitMSG(false, err.responseJSON.message);
			},
		});
	}

	function loginSuccess(resp) {
		$("#loginForm")[0].reset();
		// $(".no-auth, .auth").addClass("logged-in");
		loggedIn();
		loginSubmitMSG(true, "Logged In. Page will refresh in 5 seconds!");
		localStorage.setItem("authToken", resp.token);
		setTimeout(() => (window.location.href = "index.php"), 4000);
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

	function loginSubmitMSG(valid, err) {
		if (valid) {
			var msgClasses = "h3 text-left tada animated text-success";
		} else {
			var msgClasses = "h3 text-left text-danger";
		}
		$("#loginmsgSubmit")
			.removeClass()
			.addClass(msgClasses)
			.text(err);
	}

	// Global Data
}

if (logged_in) {
	// $(".mmuser-name").text(mmuser["name"]);
	// $(".mmuser-mmid").text(mmuser["mmid"]);
}

function renderMessage(valid, msg, selector) {
	if (valid) {
		var msgClasses = "text-left form-message tada animated text-success";
	} else {
		var msgClasses = "text-left form-message text-danger";
	}
	$(selector)
		.removeClass()
		.addClass(msgClasses)
		.html(msg);
}

// Profile
if (page === "profile") {
	if (!logged_in) {
		window.location.href = "index.php";
	}

	$.ajax({
		url: apiHost + "user/profile/",
		method: "GET",
		headers: {
			Authorization: `Token ${authToken}`,
		},
		success: resp => {
			mmuser = resp;
			let mmu = resp;
			updateProfile(mmu);
		},
		error: err => {
			console.log(err);
			// $("#profileFormMessage").text("Some error occured.");
			renderMessage(
				false,
				"Some error Occured in loading profile.",
				"#profileFormMessage"
			);
		},
	});

	function updateProfile(mmu) {
		$("#profilename").val(mmu["name"]);
		$("#profileemail").val(mmu["email"]);
		$("#mmid").val(mmu["mmid"]);
		$("#profilecontact").val(mmu["contact"]);
		try {
			$("#profilegender option[value=" + mmu["gender"] + "]").attr(
				"selected",
				"selected"
			);
		} catch (err) {
			console.log(err);
		}
		$("#profileage").val(mmu["age"]);
		try {
			$(
				"#profileworkstatus option[value=" + mmu["workstatus"] + "]"
			).attr("selected", "selected");
		} catch (err) {
			console.log(err);
		}
	}

	$("#profileForm").submit(e => {
		e.preventDefault();

		$.ajax({
			url: apiHost + "user/profile/",
			method: "PATCH",
			headers: {
				Authorization: `Token ${authToken}`,
			},
			data: {
				contact: $("#profilecontact").val(),
				gender: $("#profilegender").val(),
				age: $("#profileage").val(),
				workingstatus: $("#profileworkstatus").val(),
			},
			beforeSend: () => {
				$(".form-message").text("Submitting");
			},
			success: resp => {
				mmuser = resp;
				let mmu = resp;
				updateProfile(mmu);
				// $("#profileForm")[0].reset();
				// $("#profileFormMessage").text("Profile updated successfully.");
				renderMessage(
					true,
					"Profile updated successfully.",
					"#profileFormMessage"
				);
			},
			error: err => {
				console.log(err);
				renderMessage(
					false,
					"Some error Occured in updating profile.",
					"#profileFormMessage"
				);
			},
		});
	});
}

if (page === "groups") {
	var magicGroups;
	if (!logged_in) {
		window.location.href = "index.php";
	}

	function addGroup(){
		$.ajax({
			url: apiHost + "magicmeets/groups/",
			method: "POST",
			headers: {
				Authorization: `Token ${authToken}`,
			},
			success:res=>{
				console.log(res);
				fetchGroups()
			},
			error: err=>{
				console.log(err)
			}
		})
	}
	function fetchGroups() {
		$.ajax({
			url: apiHost + "magicmeets/groups/",
			method: "GET",
			headers: {
				Authorization: `Token ${authToken}`,
			},
			success: resp => {
				renderGroups(resp);
				magicGroups = resp;
		},
			error: err => {
				console.log(err);
			},
		}).then(() => {
			initializeModals();
			$("a.add-members, a.add-meetup").click(e => {
				let groupId = $(e.currentTarget).attr("data-group-id");
				console.log($(e.currentTarget).attr("data-group-id"));
				$("input.group-id").val(groupId);
				$(".groupId").text(groupId);
				getGroupData(groupId);
			});
		});
	}
	fetchGroups();

	function fetchMeets(){
		$.ajax({
			url: apiHost + "magicmeets/meets/",
			method: "GET",
			headers: {
				Authorization: `Token ${authToken}`,
			},
			success: resp => {
				renderMeets(resp);
				
				// magicGroups = resp;
			},
			error: err => {
				console.log(err);
			},
		})
		// .then(() => {
		// 	initializeModals();
		// 	$("a.add-members, a.add-meetup").click(e => {
		// 		let groupId = $(e.currentTarget).attr("data-group-id");
		// 		console.log($(e.currentTarget).attr("data-group-id"));
		// 		$("input.group-id").val(groupId);
		// 		$(".groupId").text(groupId);
		// 		getGroupData(groupId);
		// 	});
		// });
	}
	fetchMeets();
	
	
	function renderGroups(groups) {
		$e = "";
		$h = "";
		var count = 0;
		if (groups.length !== 0) {
			groups.forEach((group, index) => {
				if(group['groupid'] == null){return;}
				$h =
					'<div class="col-md-6 col-lg-4 col-xs-12"><div class="services-item wow fadeInRight" data-wow-delay="0.2s">';
				$h += '<div class="icon"><i class="lni-users"></i></div>';
				$h += '<div class="services-content">';
				$h +=
					'<h3><a href="#" data-group-index="' +
					index +
					'" > ' +
					group["groupid"] +
					" </a></h3>";
				$h +=
					'<a href="#addMemModal" data-group-id="' +
					group["groupid"] +
					'"  class="popup-modal add-members" > Add Members </a><br>';
				$h +=
					'<a href="#newMeetModal" data-group-id="' +
					group["groupid"] +
					'"  class="btn btn-border popup-modal add-meetup" > Apply for MeetUp </a>';
				$h += "</div></div></div>";
				$e = $h + $e;
			});
		}
		$e += '<div class="col-md-6 col-lg-4 col-xs-12">';
		$e +=
			'<div class="services-item wow fadeInRight" data-wow-delay="0.2s">';
		$e += '<div class="icon">';
		$e += '<i class="lni-users"></i>';
		$e += "</div>";
		$e += '<div class="services-content">';
		$e += "<br><br>";
		$e +=
			'<a href="#addGroup" onclick="addGroup()" class="btn btn-border ">Add your Group</i></a>';
		$e += "</div>";
		$e += "</div>";
		$e += "</div>";
		$("#magic-group-list").html($e);
	}

	function renderMeets(meets){
		$e = "";
		$h = "";
		var count = 0;
		if (meets.length !== 0) {
			meets.forEach((meet, index) => {
				if(meet['mgroup'] == null || meet['meetid'] == null){return;}
				$h =
					'<div class="col-md-6 col-lg-4 col-xs-12"><div class="services-item wow fadeInRight" data-wow-delay="0.2s">';
				$h += '<div class="icon"><i class="lni-users"></i></div>';
				$h += '<div class="services-content">';
				$h +=
					'<h3><a href="#addGroup" data-group-index="' +
					index +
					'" > MG' +
					String(Number(meet["mgroup"])+334) +
					" </a></h3>";
				$h += "<p> Time: "+meet['time']+"<br> Day: "+meet['day']+" </p>"
				$h += "</div></div></div>";
				$e = $h + $e;
			});
		}
		$("#magic-meet-list").html($e);
	}
	
	$("#newMeetForm").submit(e => {
		e.preventDefault();

		var mygtype 	= $("input[name=mygtype]:checked").val();
		var matchedgtype= $("input[name=matchedgtype]:checked").val();
		var meetupdo	= $("#meetupdo").val();
		var meetuptime	= $("#meetuptime").val();
		var meetupday	= $("#meetupday").val();
		var meetupspendpp = $("#meetupspendpp").val();
		var groupId 	= $("input.group-id").val();

		$.ajax({
			url: apiHost + "magicmeets/meets/",
			method: "POST",
			headers: {
				Authorization: `Token ${authToken}`,
			},
			data: {
				mygtype: mygtype,
				matchgtype: matchedgtype,
				do: meetupdo,
				time: meetuptime,
				day: meetupday,
				spendpp: meetupspendpp,
				groupid:groupId
			},
			beforeSend: () => {
				$(".form-message").text("Submitting");
			},
			success: resp => {
				// $("#groupFormMsg").html(
				// 	"Your Magic Group Created Successfully. Magic Group Number is <b>" +
				// 		resp["groupid"] +
				// 		"</b>"
				// );
				renderMessage(
					true,
					"Your applied for meetup Successfully.<br>You'll be contacted soon by our team. You can now close the form<br>",
					"#newMeetMsg"
				);
				$("#newMeetForm")[0].reset();
				fetchMeets();
			},
			error: err => {
				console.log(err);
				fetchMeets();
				// $("#groupFormMsg").text("Some error occurred");
				renderMessage(false, "Some error occured.", "#newMeetMsg");
			},
		});
	});

	async function checkMemberForAdd(id) {
		return new Promise(resolve => {
			$.ajax({
				url: apiHost + "user/check/",
				method: "POST",
				headers: {
					Authorization: `Token ${authToken}`,
				},
				data: {
					id: id,
				},
				beforeSend: () => {
					$(".form-message").text("Submitting");
				},
				success: resp => {
					// $("#add-verified").text("Member Verified");
					renderMessage(true, "Member Verified.", "#add-verified");

					resolve(true);
				},
				error: err => {
					console.log(err);
					// $("#add-verified").text(
					// 	"User not found. Please use correct email or id"
					// );
					renderMessage(
						false,
						"User not found. Please use correct email or id.",
						"#add-verified"
					);

					resolve(false);
				},
			});
		});
	}

	function getGroupData(groupid) {
		$.ajax({
			url: apiHost + "magicmeets/group/" + groupid + "/",
			method: "GET",
			headers: {
				Authorization: `Token ${authToken}`,
			},
			beforeSend: () => {
				$("#current-members").text("Loading");
			},
			success: resp => {
				if (resp["members"].length !== 0) {
					$e = "";
					resp["members"].forEach((mem, index) => {
						$e += mem.mmid + "- " + mem.name + "<br>";
					});
					$("#current-members").html($e);
				} else {
					$("#current-members").html("None");
				}
				// console.log(resp);
			},
			error: err => {
				console.log(err);
			},
		});
	}

	$("#addMemberForm").submit(e => {
		e.preventDefault();
		var id = $("#addmemberid").val();
		var groupId = $("input.group-id").val();
		$(".groupId").text(groupId);
		checkMemberForAdd(id).then(resp => {
			if (resp) {
				$.ajax({
					url: apiHost + "magicmeets/group/" + groupId + "/",
					method: "PATCH",
					headers: {
						Authorization: `Token ${authToken}`,
					},
					data: {
						id: id,
					},
					// beforeSend: () => {
					// 	$(".form-message").text("");
					// },
					success: resp => {
						// $(".add-message").text(
						// 	"User added successfully. You can add more!"
						// );

						renderMessage(
							true,
							"User added successfully. You can add more!",
							"#add-verified"
						);

						$("#addmemberid").val(null);
					},
					error: err => {
						// $(".add-message").text("Some Error Occured");
						renderMessage(
							false,
							"Some Error occured",
							".add-message"
						);
					},
				}).then(() => {
					getGroupData(groupId);
				});
			}
		});
	});
}

if(page==='interests'){
	var interests = []
	if (!logged_in) {
	//	window.location.href = "index.php";
	}
	
	function updateInterests(mmu){
		let intereststr = mmu.interests||"";
		$('.myInterests').text(intereststr)
		interests = intereststr.split(',');
		interests.forEach(val=>{
			try {$('option[value='+val+'], .item[data-value='+val+']').remove();}catch(err){}
		})
	}

	$.ajax({
		url: apiHost + "user/profile/",
		method: "GET",
		headers: {
			Authorization: `Token ${authToken}`,
		},
		success: resp => {
			mmuser = resp;
			let mmu = resp;
			updateInterests(mmu)
		},
		error: err => {
			console.log(err);
			renderMessage(
				false,
				"Some error Occured in loading interests.",
				"#interestsMsg"
			);
		},
	});
	function interestToStr(ints){
		let intereststr = ''
		interests = [...new Set(ints)]
		interests.forEach(int=>{
			if(int!==""){
			intereststr += int+',';}
		});
		return intereststr;
	}
	$('#interests-submit').click(e=>{
		e.preventDefault()
		var selected = $('.selected-wrapper .selected');
		// let intereststr= '';
		for (i=0; i<selected.length;i++){
			interests.push(selected[i].attributes['data-value'].value);
			// intereststr += '/'+ selected[i].attributes['data-value'].value;
		}
		$.ajax({
			url: apiHost+'user/profile/',
			method: 'PATCH',
			headers: {
				Authorization: `Token ${authToken}`,
			},
			data:{
				interests: interestToStr(interests),
			},
			beforeSend: () => {
				$(".form-message").text("Submitting");
			},
			success: resp => {
				mmuser = resp;
				let mmu = resp;
				updateInterests(mmu);
				renderMessage(
					true,
					"Interests updated successfully. <br>",
					"#interestsMsg"
				);
			},
			error: err => {
				console.log(err);
				renderMessage(
					false,
					"Some error Occured in updating interests.<br>",
					"#interestsMsg"
				);
			},
		})
		// .catch(err=>{
		// 	renderMessage(
		// 			false,
		// 			"Some error Occured in updating interests.",
		// 			"#interestsMsg"
		// 		);
		// })
	})
		
}