<div id="addMemModal" class=" mfp-hide white-popup-block">
    <div class="modal-title">
        <p style='font-size:21px' > 
			Add Member to Magic Group Number: <span class='groupId'></span>		
            <a style='float:right; font-size:16px;' class="popup-modal-dismiss" href="#">
                <i class='lni-close'></i>
            </a>
        </p>
    </div>
    <hr>  
    <form id="addMemberForm" >
        <div class="row">
            <div class='col-12 current-members row' >
            	<div class='col-4'>Current Members: </div> 
            	<div id='current-members' class='col-8' ></div>
            	<hr style='width:100%'>  
			</div>

            <div class="col-md-12">
                <div class="form-group">
                	<div>Enter Email or MagicId of the friend you wish to add</div>
                </div> 
            </div>
            <div class="col-md-12">
            	<div class="form-group">
            		<input type='hidden' class='group-id' />
                	<input class='form-control' type='text' id='addmemberid' name='addmemberid' required />
                </div> 
        	</div>
            <div class="col-md-12 ">
                <div class="submit-button text-center">
                    <div id="add-verified" class="h3 text-center form-message add-message"></div>      
                    <div class="clearfix"></div> 
           			<button class="btn btn-common" id="addmem-submit" type="submit">Submit</button>
                </div>
            </div>
        </div>            
    </form>
</div>