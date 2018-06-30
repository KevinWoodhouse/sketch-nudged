window.onload = function(){
  // GOOGLE STUFF
  var downloadBtn = document.getElementById("downloadBtn"),
      downloadLink = document.getElementById("downloadLink"),
      licenceBtn = document.getElementById("licenceBtn"),
      githubBtn = document.getElementById("githubBtn"),
      pressKitBtn = document.getElementById("pressKitBtn"),
      featuredLinks = document.getElementsByClassName("featured-link"),
      socialLinks = document.getElementsByClassName("social-icon"),
      shareLinks = document.getElementsByClassName("shareLink");

  downloadBtn.addEventListener("click", handleDownloadClicks);
  downloadLink.addEventListener("click", handleDownloadClicks);
  licenceBtn.addEventListener("click", handleLicenceClicks);
  githubBtn.addEventListener("click", handleGithubClicks);
  pressKitBtn.addEventListener("click", handlePressKitClicks);

  for(i=0; i<featuredLinks.length; i++) {
    featuredLinks[i].addEventListener("click", handleFeatureOnClicks, false);
  }

  for(i=0; i<socialLinks.length; i++) {
    socialLinks[i].addEventListener("click", handleSocialLinkClicks);
  }

  for(i=0; i<shareLinks.length; i++) {
    shareLinks[i].addEventListener("click", handleShareLinkClicks);
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
    ga('send', 'event', {
      eventCategory: 'Download',
      eventAction: 'click',
      eventLabel: event.target.href
    });
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
    if(event.path[1].href.indexOf("#")!= -1){
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
    window.open(this.href, 'Share','left=100,top=50,width=500,height=300,toolbar=0,resizable=0');
    return false;
  }

}
