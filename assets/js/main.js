
function updateProfileInfo(profileData) {
  const photo = document.getElementById('profile.photo')
  photo.src = profileData.photo
  photo.alt = profileData.name

  const name = document.getElementById('profile.name')
  name.innerText = profileData.name

  const job = document.getElementById('profile.job')
  job.innerText = profileData.job

  const location = document.getElementById('profile.location')
  location.innerText = profileData.location

  const email = document.getElementById('profile.email')
  email.innerText = profileData.email
  email.href = `mailto:${profileData.email}`
}

function updateHardSkills(profileData) {

  Object.keys(profileData.skills.hardSkills).forEach(key => {
    const ulRef = document.getElementById(`profile.skills.hardskills.${key}`)

    ulRef.innerHTML = profileData.skills.hardSkills[key].map(skill => `
      <li>
        <img id="${skill.id}" src="./assets/img/icons/${skill.id}.svg" alt="simbolo do ${skill.name}" title="${skill.name}">
      </li>
    `).join('')
  })

}


function updateSoftSkills(profileData) {
  const softSkills = document.getElementById('profile.skills.softSkills')

  softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateLanguages(profileData) {
  const languages = document.getElementById('profile.languages')

  languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updateEducation(profileData) {
  const educations = document.getElementById('profile.education')

  educations.innerHTML = profileData.education.map(education => `
    <li>
      <h3 class="title">${education.title}</h3>
      <h4 class="period college">${education.period}</h4>
    </li>
  `).join('')
}

function updateProfessionalExperience(profileData) {
  const professionalExperiences = document.getElementById('profile.professionalExperiences')

  professionalExperiences.innerHTML = profileData.professionalExperiences.map(professionalExperience => `
    <li>
      <h3 id="profile.professionalExperiences.name" class="title">${professionalExperience.name}</h3>
      <span id="profile.professionalExperiences.period" class="period">${professionalExperience.period}</span>
      <p id="profile.professionalExperiences.description">
        ${professionalExperience.description}
      </p>
    </li>
  `).join('')


}

(async () => {

  const profileData = await fetchProfileData('./data/profile.json')
  updateProfileInfo(profileData)
  updateHardSkills(profileData)
  updateSoftSkills(profileData)
  updateLanguages(profileData)
  updateEducation(profileData)
  updateProfessionalExperience(profileData)

})()
