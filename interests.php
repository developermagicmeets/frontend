
<?php include('inc/header.php') ?>
    <script>const page='interests'</script>
<link rel="stylesheet" href="css/multi.min.css">
<section id="profile" class="section-padding bg-gray">    
    <div class="container">
        <div class="section-header text-center">          
            <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">Your Interests</h2>
            <div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
        </div>
        <div class='row container' >
        	<div class='myInterests'></div>
        </div>
        <div class="row container contact-form-area wow fadeInUp" data-wow-delay="0.3s">
            <div class="col-lg-2"></div>
            <div class="col-lg-8 col-12">
                <div class="contact-block">
                    <form id="profileForm">
						<div class='form-group'>
							<select class='form-control' id='preferences' multiple='multiple'>
							  <option value='elem_1' selected>elem 1</option>
							  <option value='elem_2'>elem 2</option>
							  <option value='elem_3'>elem 3</option>
							  <option value='elem_4'>elem 4</option>
							  <option value='elem_100'>elem 100</option>
							</select>
						</div>
						<div class='form-group' >
							<div class='col-12'>
								<div class="submit-button text-left">
                                    <div id="interestsMsg"  class="h3 form-message text-center"></div> 
                                    <div class="clearfix"></div>   
                                    <button class="btn btn-common" id="interests-submit" >Update</button>
                                </div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</setion>


<script src="js/multi.min.js"></script>
<script>
	var select = document.getElementById('preferences');
	// multi( select );
	multi( select,{

	// enable search
	  enable_search: true,
	
	  // placeholder of search input
	  search_placeholder: 'Search...',
	
	  non_selected_header: "Interests",
	  selected_header: "Selected",
	  
	});
</script>



<?php include('inc/footer.php') ?>
