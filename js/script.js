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

    // lien github
        document.querySelector('.content .hero_github ').textContent = data.profile.content_lien
        document.querySelector('.content .hero_github ').setAttribute('href', data.profile.github)

    // recuperation de l'image des langues

    var images = []
    for ( let langue of data.langues){
        images.push(langue)

    }
   
        const formSectionCompetence = document.getElementById('form-section-competence')
        const competenceForm = document.getElementById('competenceForm')
        const buttonShowForm = document.getElementById('addButtonCompetence')

        let competences = []

        buttonShowForm.addEventListener('click', function showFormCompetence(e) {

            formSectionCompetence.classList.remove('d-none')
                e.classList.add('disabled')
        });

        function hideFormC() {
            formSectionCompetence.classList.add('d-none')
            buttonShowForm.classList.remove('disabled')
            competenceForm.reset()
        }

        competenceForm.addEventListener('submit', function(e) {
            e.preventDefault()

            const data = new FormData(competenceForm)
            addCompetence(data)
            hideFormC()
        })

        function addCompetence(formData) {
            const competence = {
                'pourcent' : formData.get('pourcent'),
                'title' : formData.get('title'),
                'description' : formData.get('description')
            }

            competences.push(competence)
            loadCompetences()
        }


        function loadCompetences() {
            let listView = document.getElementById('liste-competence')
            listView.innerHTML = ""

            for (const competenc of competences) {
                let template = `
                    <div class="col-sm-6 col-md-4 col-xl-3 mb-3">
                    <div class="competence-item d-flex align-items-center border border-secondary rounded p-2">
                        <span class="competence-progress fs-1">${competenc.pourcent}%</span>
                        <div class="competence-details ms-3">
                            <h3>${competenc.title}</h3>
                            <p>${competenc.description}</p>
                        </div>
                    </div>
                </div>
                `

                listView.innerHTML += template
            }
        }

        

        // creation de la liste des langues 

        const formSectionLangue = document.getElementById('form-section-langue')
        const langueForm = document.getElementById('langueForm')
        const buttonShowForml = document.getElementById('addButtonLangue')

        let langues = []

        buttonShowForml.addEventListener('click', function showFormLangue(e) {

            formSectionLangue.classList.remove('d-none')
                e.classList.add('disabled')
        });

        function hideFormL() {
            formSectionLangue.classList.add('d-none')
            buttonShowForml.classList.remove('disabled')
            langueForm.reset()
        }

        langueForm.addEventListener('submit', function(e) {
            e.preventDefault()

            const data = new FormData(langueForm)
            addLangue(data)
            hideFormL()
        })

        function addLangue(formData) {
            const langue = {
                'langue' : formData.get('langue'),            
            }
            langues.push(langue)
            loadLangues()
        }

        function loadLangues() {
            let listView = document.getElementById('listes-langues')
            listView.innerHTML = ""

            for (const lang of langues){
                if(lang.langue === 'Français'){
                    var template = `
                         <div class="col-sm-6 col-md-4 col-xl-3 mb-3">
                         <img src="${images[1].flag_fr}" alt="">
                         <span class="fs-1">${lang.langue}</span>
                         </div>
                         </div>
                         `
                         listView.innerHTML += template
                }

                else if(lang.langue === 'Anglais'){
                    var template = `
                         <div class="col-sm-6 col-md-4 col-xl-3 mb-3">
                         <img src="${images[0].flag_us}" alt="">
                         <span class="fs-1">${lang.langue}</span>
                         </div>
                         </div>
                         `
                         listView.innerHTML += template
                }

                else if(lang.langue === 'Sonrhaï'){
                    var template = `
                         <div class="col-sm-6 col-md-4 col-xl-3 mb-3">
                         <img src="${images[2].flag_sr}" alt="">
                         <span class="fs-1">${lang.langue}</span>
                         </div>
                         </div>
                         `
                         listView.innerHTML += template
                }

                else if(lang.langue === 'Bambara'){
                    var template = `
                         <div class="col-sm-6 col-md-4 col-xl-3 mb-3">
                         <img src="${images[3].flag_br}" alt="">
                         <span class="fs-1">${lang.langue}</span>
                         </div>
                         </div>
                         `
                         listView.innerHTML += template
                }

                else if(lang.langue === 'Peulh'){
                    var template = `
                         <div class="col-sm-6 col-md-4 col-xl-3 mb-3">
                         <img src="${images[4].flag_p}" alt="">
                         <span class="fs-1">${lang.langue}</span>
                         </div>
                         </div>
                         `
                         listView.innerHTML += template
                }
            }                
        }

    // creation des experiences
    const formSectionExperience = document.getElementById('form-section-experience')
    const experienceForm = document.getElementById('experienceForm')
    const buttonShowFormE = document.getElementById('addButtonExperience')

    let experiences = []

    buttonShowFormE.addEventListener('click', function showFormExperience(e) {

        formSectionExperience.classList.remove('d-none')
            e.classList.add('disabled')
    });

    function hideFormE() {
        formSectionExperience.classList.add('d-none')
        buttonShowFormE.classList.remove('disabled')
        experienceForm.reset()
    }

    experienceForm.addEventListener('submit', function(e) {
        e.preventDefault()

        const data = new FormData(experienceForm)
        addExperience(data)
        hideFormE()
    })

    function addExperience(formData) {
        const experience = {
            'anneeExperience' : formData.get('anneeExperience'),
            'libeléExperience' : formData.get('libeléExperience'),            
        }
        experiences.push(experience)
        loadExperiences()
    }

    function loadExperiences() {
        let listView = document.getElementById('experience-liste')
        listView.innerHTML = ""

        for (const exp of experiences){
            
                var template = `
                <div class="parcours">                                                      
                    <div class="entete">
                        <span class="point"></span>
                        <span class="ligne"></span>
                    </div> 
                    <span class="annee-etudiant">${exp.anneeExperience}:${exp.libeléExperience}</span>      
                </div>                
                     `
                     listView.innerHTML += template
            }
        }
        
}  
    )
        