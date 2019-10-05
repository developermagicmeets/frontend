
<div id="registerModal" class=" mfp-hide white-popup-block">
    <div class="modal-title">
        <p style='font-size:21px' > 
            Register 
            <a style='float:right; font-size:16px;' class="popup-modal-dismiss" href="#">
                <i class='lni-close'></i>
            </a>
        </p>
    </div>
    <hr>                    
    <form id="registerForm" >
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <input type="text" class="form-control" id="regname" name="name" placeholder="Name" required data-error="Please enter your name">
                    <div class="help-block with-errors"></div>
                </div>                                 
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" placeholder="Email" id="regemail" class="form-control" name="email" required data-error="Please enter your email">
                    <div class="help-block with-errors"></div>
                </div> 
            </div>
            <div class="col-md-6">
                <div class="form-group ">
                    <input type="password" placeholder="Password" id="regpassword" class="form-control" required data-error="Please enter your Password">
                    <div class="help-block with-errors"></div>
                </div>
            </div>
            <div class="col-md-12 ">
                <div class="submit-button text-center">
                    <div id="regmsgSubmit" class="h3 text-center form-message"></div> 
                    <div class="clearfix"></div>                     
                    <button class="btn btn-common" id="regSubmit" type="submit">Register</button>
                    
                </div>
            </div>
        </div>            
    </form>
</div>

