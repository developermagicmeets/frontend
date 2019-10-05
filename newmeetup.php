<div id="newMeetModal" class=" mfp-hide white-popup-block">
    <div class="modal-title">
        <p style='font-size:21px' > 
            Apply for a new Meetup 
            <a style='float:right; font-size:16px;' class="popup-modal-dismiss" href="#">
                <i class='lni-close'></i>
            </a>
        </p>
    </div>
    <hr>  
    <form id="newMeetForm" >
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                	<div>You would Identify your group as?</div>
                </div> 
            </div>
            <div class="col-md-6">
                <div class="form-check form-check-inline">
					<input class="form-check-input" type="radio" name="mygtype" id="myint" value="Introverted">
					<label class="form-check-label" for="inlineRadio1">Introverted</label>
				</div>
				<div class="form-check form-check-inline">
					<input class="form-check-input" type="radio" name="mygtype" id="myext" value="Extroverted">
					<label class="form-check-label" for="inlineRadio2">Extroverted</label>
				</div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                	<div>You would like matched group to be?</div>
                </div> 
            </div>
            <div class="col-md-6">
                <div class="form-check form-check-inline">
					<input class="form-check-input" type="radio" name="matchedgtype" id="matchedint" value="Introverted">
					<label class="form-check-label" for="inlineRadio1">Introverted</label>
				</div>
				<div class="form-check form-check-inline">
					<input class="form-check-input" type="radio" name="matchedgtype" id="matchedext" value="Extroverted">
					<label class="form-check-label" for="inlineRadio2">Extroverted</label>
				</div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                	<div> What would you like to do in this Magical Meetup? </div>
                </div> 
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" placeholder="eg. Chill, Food, Games, Alcohol, etc" id="meetupdo" class="form-control" name="meetupdo" required data-error="Please enter what you'd like to do">
                    <div class="help-block with-errors"></div>
                </div> 
            </div>
            <div class="col-md-6">
                <div class="form-group">
                	<div> Your preffered time for meetup? </div>
                </div> 
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <select id="meetuptime" class='form-control' required > 
	                    <option disabled default selected> Select </option>
	                    <option value='11-2' >11am-2pm</option>
	                    <option value='2-5' >2pm-5pm</option>
	                    <option value='5-8' >5pm-8pm </option>
	                    <option value='8-11'>8pm-11pm</option>
	                </select>
                </div> 
            </div>
            <div class="col-md-6">
                <div class="form-group">
                	<div> When do you want to meetup? (Do consider availability of your friends!) </div>
                </div> 
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <select id="meetupday" class='form-control' required > 
	                    <option disabled default selected> Select </option>
	                    <option id='today' value='today'>Today</option>
	                    <option id='tomorrow' value='tomorrow' >Tomorrow</option>
	                </select>
                </div> 
            </div>
            <div class="col-md-6">
                <div class="form-group">
                	<div> How much are you willing to pay per person? </div>
                </div> 
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" placeholder="eg. 700(in Rupees)" id="meetupspendpp" class="form-control" name="meetupspendpp" required data-error="Enter amount per person">
                    <div class="help-block with-errors"></div>
                </div> 
            </div>
            <div class="col-md-12 ">
                <div class="submit-button text-center">
                    <div id="newMeetMsg" class="h3 form-message text-center "></div> 
                    <div class="clearfix"></div> 
                    <button class="btn btn-common" id="meet-submit" type="submit">Submit</button>
                   
                </div>
            </div>
        </div>            
    </form>
</div>

