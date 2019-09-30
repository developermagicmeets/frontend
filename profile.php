<?php include('inc/header.php') ?>
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
                                    <input type="text" placeholder="Magic ID" disabled id=magicId class="form-control" >
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
                                    <input type="text" placeholder="Contact Number" class="form-control" name="profilecontact" required data-error="Please enter your contact">
                                    <div class="help-block with-errors"></div>
                                </div> 
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Gender</label>
                                    <input type="text" placeholder="Gender" id="profilegender" class="form-control" required data-error="Gender">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Age</label>
                                    <input type="text" placeholder="Password" id="profileage" class="form-control" required data-error="Age">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>Work Status</label>
                                    <input type="text" placeholder="Password" id="profileworkstatus" class="form-control" required data-error="Work Status">
                                    <div class="help-block with-errors"></div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="submit-button text-left">
                                    <button class="btn btn-common" id="form-submit" type="submit">Update</button>
                                    <div id="regmsgSubmit" class="h3 text-center hidden"></div> 
                                    <div class="clearfix"></div> 
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
