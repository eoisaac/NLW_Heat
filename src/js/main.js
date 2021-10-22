const socialMediaLinks = {
  github: 'eoisaac',
  linkedin: 'eoisaac',
  portfolio: 'eoisaac',
  instagram: '_eoisaac',
  twitter: '_eoisaac',
}

function updateSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const socialMedia = li.getAttribute('class');

    if(socialMedia=== 'linkedin') {
      li.children[0].href = `https://${socialMedia}.com/in/${socialMediaLinks[socialMedia]}`;

    }else if(socialMedia === 'portfolio') {
      li.children[0].href = `https://${socialMediaLinks[socialMedia]}.github.io`;

    }else {
      li.children[0].href = `https://${socialMedia}.com/${socialMediaLinks[socialMedia]}`;
    }

  }
}

function getGitHubProfileData() {

  const favIcon = document.querySelector("link[rel='shortcut icon']");
  const url = `https://api.github.com/users/${socialMediaLinks.github}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      UserImage.src = data.avatar_url;
      userLogin.textContent = data.login;
      
      favIcon.href = data.avatar_url;
      document.title = `${data.name} | NLW Heat 2021`;
    });
}

updateSocialMediaLinks();
getGitHubProfileData();