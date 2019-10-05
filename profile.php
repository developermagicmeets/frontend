<?php include('inc/header.php') ?>
    <script>const page='profile'</script>

<section id="profile" class="section-padding bg-gray">    
    <div class="container">
        <div class="section-header text-center">          
            <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">Edit your Profile</h2>
            <div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
        </div>
        <div class="row container contact-form-area wow fadeInUp" data-wow-delay="0.3s">
            <div class="col-lg-2"></div>
            <div class="col-lg-8 col-12">
                <div class="contact-block">
                    <form id="profileForm">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label> Name </label>
                                    <input type="text" class="form-control" disabled id=profilename name="name" placeholder="Name" >
                                    <div class="help-block with-errors"></div>
                                </div>                                 
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                <label> Magic ID </label>
                                    <input type="text" placeholder="Magic ID" disabled id=mmid class="form-control" >
                                    <span class="help-block with-errors">Do remember your Magic Id!</span>
                                </div> 
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label> Email </label>
                                    <input type="text" placeholder="Email" disabled id=profileemail class="form-control">
                                    <div class="help-block with-errors"></div>
                                </div> 
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label> Contact No. </label>
                                    <input type="text" placeholder="Contact Number" class="form-control" id=profilecontact  name="profilecontact" required data-error="Please enter your contact">
                                    <div class="help-block with-errors"></div>
                                </div> 
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Gender</label>
                                    <select id="profilegender" class='form-control' required > 
                                        <option disabled default selected> Select </option>
                                        <option value=Male >Male</option>
                                        <option value=Female >Female </option>
                                        <option value='other'>Other</option>
                                    </select>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Age</label>
                                    <input type="text" placeholder="Age" id="profileage" class="form-control" required data-error="Enter Age">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Work Status</label>
                                    <select id="profileworkstatus" class='form-control' required > 
                                        <option disabled default selected> Select </option>
                                        <option value="College Student" >College Student</option>
                                        <option value="Young Professional" >Young Professional </option>
                                        <option value='High School Student'>High School Student</option>
                                    </select>
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="submit-button text-left">
                                    <div id="profileFormMessage"  class="h3 form-message text-center"></div> 
                                    <div class="clearfix"></div>   
                                    <button class="btn btn-common" id="profile-submit" type="submit">Update</button>
                                </div>
                            </div>
                        </div>            
                    </form>
                </div>
            </div>
        </div>
    </div> 
</section>

<?php include('inc/footer.php') ?>
