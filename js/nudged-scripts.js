window.onload = function () {
  // GOOGLE STUFF
  var downloadBtn = document.getElementById("downloadBtn"),
      downloadLink = document.getElementById("downloadLink"),
      closeBtn = document.getElementById("closeModal"),
      followBtn = document.getElementById("followBtn"),
      githubBtn = document.getElementById("githubBtn"),
      licenceBtn = document.getElementById("licenceBtn"),
      licenceHeroBtn = document.getElementById("licenceHeroBtn"),
      licenceInfoBtn = document.getElementById("licenceInfoBtn"),
      modalBG = document.getElementById("modal"),
      pressKitBtn = document.getElementById("pressKitBtn"),
      thanksBtn = document.getElementById("thanksBtn"),
      shareLinks = document.getElementsByClassName("shareLink");
      socialLinks = document.getElementsByClassName("social-icon"),
      featuredLinks = document.getElementsByClassName("featured-link"),

  // downloadBtn.addEventListener("click", handleDownloadClicks);
  // downloadLink.addEventListener("click", handleDownloadClicks);
  // closeBtn.addEventListener("click", closeDownloadModal);
  // followBtn.addEventListener("click", handleFollowClicks);
  // thanksBtn.addEventListener("click", handleThanksClicks);
  // licenceBtn.addEventListener("click", handleLicenceClicks);
  // modalBG.addEventListener("click", closeDownloadModal);
  // githubBtn.addEventListener("click", handleGithubClicks);
  // pressKitBtn.addEventListener("click", handlePressKitClicks);
  
  creativeClickListener(downloadBtn,handleDownloadClicks);
  creativeClickListener(downloadLink,handleDownloadClicks);
  creativeClickListener(closeBtn,closeDownloadModal);
  creativeClickListener(followBtn,handleFollowClicks);
  creativeClickListener(githubBtn,handleGithubClicks);
  creativeClickListener(licenceBtn,handleLicenceClicks);
  creativeClickListener(licenceHeroBtn,handleLicenceClicks);
  creativeClickListener(licenceInfoBtn,handleLicenceClicks);
  creativeClickListener(modalBG,closeDownloadModal);
  creativeClickListener(pressKitBtn,handlePressKitClicks);
  creativeClickListener(thanksBtn,handleThanksClicks);
  

  for (i = 0; i < featuredLinks.length; i++) {
    featuredLinks[i].addEventListener("click", handleFeatureOnClicks, false);
  }

  for (i = 0; i < socialLinks.length; i++) {
    socialLinks[i].addEventListener("click", handleSocialLinkClicks);
  }

  for (i = 0; i < shareLinks.length; i++) {
    shareLinks[i].addEventListener("click", handleShareLinkClicks);
  }


  function creativeClickListener(el,func){
    if(el){
      el.addEventListener("click", func);
    }else{
      console.log(el + " null")
    }
    
  }

  function handleGithubClicks(event) {
    ga('send', 'event', {
      eventCategory: 'view project on github',
      eventAction: 'click',
      eventLabel: event.target.href
    });
  }

  function handleSocialLinkClicks(event) {
    ga('send', 'event', {
      eventCategory: 'social Link',
      eventAction: 'click',
      eventLabel: event.target.href
    });
  }

  function handleDownloadClicks(event) {
    event.preventDefault();
    ga('send', 'event', {
      eventCategory: 'Download',
      eventAction: 'click',
      eventLabel: event.target.href
    });
    window.open(event.target.href, '_self');
    showDownloadModal(event);
  }

  function handleLicenceClicks(event) {
    ga('send', 'event', {
      eventCategory: 'Licence',
      eventAction: 'click',
      eventLabel: event.target.href
    });
  }

  function handlePressKitClicks(event) {
    ga('send', 'event', {
      eventCategory: 'PressKit',
      eventAction: 'click',
      eventLabel: event.target.href
    });
  }

  function handleFeatureOnClicks(event) {
    ga('send', 'event', {
      eventCategory: 'Featured-on',
      eventAction: 'click',
      eventLabel: event.path[1].href
    });
    // is a hash link
    if (event.path[1].href.indexOf("#") != -1) {
      event.preventDefault();
    }
  }

  function handleShareLinkClicks(event) {
    ga('send', 'event', {
      eventCategory: 'share link',
      eventAction: 'click',
      eventLabel: event.target.href
    });
    event.preventDefault();
    //popup window please
    window.open(this.href, 'Share', 'left=100,top=50,width=500,height=300,toolbar=0,resizable=0');
    return false;
  }


  function handleThanksClicks(event) {
    ga('send', 'event', {
      eventCategory: 'share tweet',
      eventAction: 'click',
      eventLabel: event.target.href
    });
  }

  function handleFollowClicks(event) {
    ga('send', 'event', {
      eventCategory: 'follow twitter',
      eventAction: 'click',
      eventLabel: event.target.href
    });
  }

  // MODAL

  function showDownloadModal(event) {
    var modal = document.getElementById("modal");
    modal.classList.add("show");
    // console.log(event);
  }

  function closeDownloadModal(event) {
    var modal = document.getElementById("modal");
    modal.classList.remove("show");
  }

}