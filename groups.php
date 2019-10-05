<?php include('inc/header.php') ?>
    <!-- Services Section Start -->
    <script>const page='groups';</script>
    <section id="groups" class="section-padding">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title wow fadeInDown" data-wow-delay="0.2s">Your Magic Groups</h2>
          <div class="shape wow fadeInDown" data-wow-delay="0.2s"></div>
        </div>
        <div class="row magic-group-list" id='magic-group-list'>
          <!-- Services item -->
          <!--<div class="col-md-6 col-lg-4 col-xs-12">-->
          <!--  <div class="services-item wow fadeInRight" data-wow-delay="0.2s">-->
          <!--    <div class="icon">-->
          <!--      <i class="lni-users"></i>-->
          <!--    </div>-->
          <!--    <div class="services-content">-->
          <!--      <h3><a href="#">Magic Group Number <br> <span></span></a></h3>-->
          <!--      <p>Ut maximus enim dolor. Aenean auctor risus eget tincidunt lobortis. Donec tincidunt bibendum gravida. </p>-->
          <!--    </div>-->
          <!--  </div>-->
          <!--</div>-->
          <!-- Services item -->
          <!--<div class="col-md-6 col-lg-4 col-xs-12">-->
          <!--  <div class="services-item wow fadeInRight" data-wow-delay="0.2s">-->
          <!--    <div class="icon">-->
          <!--      <i class="lni-users"></i>-->
          <!--    </div>-->
          <!--    <div class="services-content">-->
          <!--    	<br><br>-->
          <!--        <a href="#newGroupModal" class="btn btn-border popup-modal auth">List your Group</i></a>-->
          <!--    </div>-->
          <!--  </div>-->
          <!--</div>-->

        </div>
      </div>
    </section>
    <section id="meet" class="section-padding">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title wow fadeInDown" data-wow-delay="0.2s">Your Magic Meetups</h2>
          <div class="shape wow fadeInDown" data-wow-delay="0.2s"></div>
        </div>
        <div class="row magic-meet-list" id='magic-meet-list'>

        </div>
      </div>
    </section>
    <?php include 'addmember.php'; ?>

    <?php include 'newmeetup.php'; ?>
    <!-- Services Section End -->

<?php include 'inc/footer.php';?>