fetch('js/data.json')
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        // Photo de profile
        document.querySelector('.hero .hero_header #hero_image').setAttribute('src', data.profile.photo_profil)
        // nom
        document.getElementById('hero_title').innerHTML = data.profile.nom
        //role
        document.querySelector('.hero_header .profil').innerHTML = data.profile.profil

        // ma description
        document.querySelector('.hero #paragraphe').innerHTML = data.profile.description

        // le lien de l'adresse email
        document.querySelector('.hero_content .hero_email').textContent = data.profile.email
        document.querySelector('.hero_content .hero_email ').setAttribute('href', 'mailto:'+data.profile.email)

        

        //lien telephone
        document.querySelector('.content .numero ').textContent = data.profile.numero
        document.querySelector('.content .numero ').setAttribute('href', 'Tel:'+data.profile.numero)

        // github
        document.querySelector('.content .hero_github ').setAttribute('href', data.profile.github)

        // creation de la liste des compétences
  
        //list item à construire avec javascript
        // <div class="skill-item">
        //     <span>30%</span>
        //     <div class="skill">
        //         <h3 class="title">GitHub</h3>
        //         <p class="description">Gérer les différentes
        //             versions de mes projets</p>
        //     </div>
        // </div>

//         let skills = data.competences
//         let skillsListView = document.querySelector('.skills .skills-list')

//         // pour chaque compétence dans sKIlls
//         for (const skill of skills) {
            
//             let skillItem = document.createElement('div')
//             skillItem.classList.add('skill-item')

//             let skillSpan = document.createElement('span')
//             skillSpan.textContent = skill.progress
//             // ajout du span au skill item
//             skillItem.appendChild(skillSpan);

//             // bloc info
//             let skillInfo = document.createElement('div')
//             skillInfo.classList.add('skill')

//             // titre
//             let skillTitle = document.createElement('h3')
//             skillTitle.classList.add('title')
//             skillTitle.textContent = skill.name

//             // description
//             let skillDesc = document.createElement('p')
//             skillDesc.classList.add('description')
//             skillDesc.textContent = skill.description

//             // ajout de title et description au bloc info
//             skillInfo.appendChild(skillTitle)
//             skillInfo.appendChild(skillDesc)

//             // ajout du skill Info au skill item
//             skillItem.appendChild(skillInfo)

//             // ajouter l'item dans la list
//             skillsListView.appendChild(skillItem)
//         }
        
//         // creation de la liste des langues
//         // <div class="lang-item">
//         //     <img src="images/us.png" alt="drapeau americain" class="lang-flag">
//         //     <span>Anglais</span>
//         // </div>

//         let langues = data.langues
//         let languesListView = document.querySelector('.lang .langs-list')

//         // pour chauque lang dans langues
//         for (const lang of langues) {
//             // bloc item
//             let langItem = document.createElement('div')
//             langItem.classList.add('lang-item')

//             // drapeau
//             let langFlag = document.createElement('img')
//             langFlag.classList.add('lang-flag')
//             langFlag.setAttribute('src', lang.flag)
//             langFlag.setAttribute('alt', lang.alt)
            
//             // titre
//             let langName = document.createElement('span')
//             langName.textContent = lang.name

//             //ajout du drapeau et le nom à l'item
//             langItem.appendChild(langFlag)
//             langItem.appendChild(langName)

//             // ajout de l'item à la list
//             languesListView.appendChild(langItem)
//         }

//         //creation de la liste d'expérience
//         // avec une nouvelle methode

//         // <div class="expert-item">
//         //     <div class="tagline">
//         //         <span class="dot"></span>
//         //         <hr>
//         //     </div>
//         //     <p class="tag-data">2018 : Étudiant</p>
//         // </div>

//         let experiences = data.experiences
//         let experView = document.querySelector('.expert .expert-list')

//         for (const experience of experiences) {
//             // creation du bloc 
//             let expItem = document.createElement('div')
//             expItem.classList.add('expert-item')

//             expItem.innerHTML = `
//                 <div class="tagline">
//                    <span class="dot"></span>
//                    <hr>
//                 </div>
//                 <p class="tag-data">${experience.year} : ${experience.role}</p>
//             `

//             // ajout de l'item dans la liste
//             experView.appendChild(expItem)
//         }
    });
        