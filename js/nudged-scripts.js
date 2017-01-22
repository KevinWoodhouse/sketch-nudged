window.onload = function(){
  // GOOGLE STUFF
  var downloadBtn = document.getElementById("downloadBtn"),
      downloadLink = document.getElementById("downloadLink"),
      githubBtn = document.getElementById("githubBtn"),
      pressKitBtn = document.getElementById("pressKitBtn"),
      featuredLinks = document.getElementsByClassName("featured-link"),
      socialLinks = document.getElementsByClassName("social-icon");

  downloadBtn.addEventListener("click", handleDownloadClicks);
  downloadLink.addEventListener("click", handleDownloadClicks);
  githubBtn.addEventListener("click", handleGithubClicks);
  pressKitBtn.addEventListener("click", handlePressKitClicks);

  for(i=0; i<featuredLinks.length; i++) {
    featuredLinks[i].addEventListener("click", handleFeatureOnClicks, false);
  }

  for(i=0; i<socialLinks.length; i++) {
    socialLinks[i].addEventListener("click", handleSocialLinkClicks);
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
}
