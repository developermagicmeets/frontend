<div id="loginModal" class=" mfp-hide white-popup-block">
    <div class="modal-title">
        <p style='font-size:21px' > 
            Login 
            <a style='float:right; font-size:16px;' class="popup-modal-dismiss" href="#">
                <i class='lni-close'></i>
            </a>
        </p>
    </div>
    <hr>  
    <form id="loginForm" >
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <input type="email" placeholder="Email" id="loginemail" class="form-control" name="email" required data-error="Please enter your Email">
                    <div class="help-block with-errors"></div>
                </div> 
            </div>
            <div class="col-md-6">
                <div class="form-group ">
                    <input type="password" placeholder="Password" id="loginpassword" class="form-control" required data-error="Please enter your Password">
                    <div class="help-block with-errors"></div>
                </div>
            </div>
            <div class="col-md-12 ">
                <div class="submit-button text-center">
                    <div id="loginmsgSubmit" class="h3 form-message text-center"></div> 
                    <div class="clearfix"></div>                     
                    <button class="btn btn-common" id="login-submit" type="submit">Login</button>
                    
                </div>
            </div>
        </div>            
    </form>
</div>

