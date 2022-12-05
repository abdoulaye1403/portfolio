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

    // creation de la liste des compétences
  
        // list item à construire avec javascript
        // <div class="skill-item">
        //     <span>30%</span>
        //     <div class="skill">
        //         <h3 class="title">GitHub</h3>
        //         <p class="description">Gérer les différentes
        //             versions de mes projets</p>
        //     </div>
        // </div>


        const formSectionCompetence = document.getElementById('form-section-competence')
        const competenceForm = document.getElementById('competenceForm')
        const buttonShowForm = document.getElementById('addButtonCompetence')

        let competences = []

        // function showForm(e) {
        //     formSection.classList.remove('d-none')
        //     e.classList.add('disabled')
        // }

        buttonShowForm.addEventListener('click', function handleClick(e) {

            formSectionCompetence.classList.remove('d-none')
                e.classList.add('disabled')
        });

        function hideForm() {
            formSectionCompetence.classList.add('d-none')
            buttonShowForm.classList.remove('disabled')
            competenceForm.reset()
        }

        competenceForm.addEventListener('submit', function(e) {
            e.preventDefault()

            const data = new FormData(competenceForm)
            addCompetence(data)
            hideForm()
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

        // function showForm(e) {
        //     formSection.classList.remove('d-none')
        //     e.classList.add('disabled')
        // }

        buttonShowForml.addEventListener('click', function handleClick(e) {

            formSectionLangue.classList.remove('d-none')
                e.classList.add('disabled')
        });

        function hideForm() {
            formSectionLangue.classList.add('d-none')
            buttonShowForml.classList.remove('disabled')
            langueForm.reset()
        }

        langueForm.addEventListener('submit', function(e) {
            e.preventDefault()

            const data = new FormData(langueForm)
            addLangue(data)
            hideForm()
        })

        function addLangue(formData) {
            const langue = {
                'image' : formData.get('image'),
                'langue' : formData.get('langue'),
                
            }

            langues.push(langue)
            loadLangues()
        }


        function loadLangues() {
            let listView = document.getElementById('listes-langues')
            listView.innerHTML = ""

            for (const lang of langues) {
                let template = `
                    <div class="col-sm-6 col-md-4 col-xl-3 mb-3">
                        <img  src"./images/${lang.image}" alt="photo" class="image">
                        <span class="fs-1">${lang.langue}</span>
                    </div>
                </div>
                `

                listView.innerHTML += template
            }
        }

        
    });
        