const projetsDatas = [
    {
        url : "geekstore",
        name : "GEEKSTORE",
        resume : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ",
        photos : ['', ''],
        knowledges : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ",
        information : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor'
    },
    {
        url : "reseausocial",
        name : "RESEAU SOCIAL",
        resume : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ",
        photos : ['', ''],
        knowledges : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ",
        information : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor'

    },
    {
        url : "cayyaapp",
        name : "CAYYA APP",
        resume : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ",
        photos : ['', ''],
        knowledges : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ",
        information : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor'

    },
    {
        url : "schooltrack",
        name : "SCHOOL TRACK",
        resume : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ",
        photos : ['', ''],
        knowledges : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ",
        information : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor'

    }
]

let myDataProjet = {}
let previousProjet = null
let nextProjet = null

const urlParams = (params) =>{
    return params.replace(/(?!\w|\s)./g, '').replace('name', '')
}

const myParams = urlParams(window.location.search)

projetsDatas.map((projetData) =>{
    if(projetData.url === myParams) {
        myDataProjet = projetData
    
        const index = projetsDatas.indexOf(myDataProjet)
        console.log(index)

        if(index>=1 && index <= projetsDatas.length - 2 ) {
            previousProjet = projetsDatas[projetsDatas.indexOf(myDataProjet)- 1]
            nextProjet = projetsDatas[projetsDatas.indexOf(myDataProjet) + 1]
        } else if(index === 0 ) {
            nextProjet = projetsDatas[projetsDatas.indexOf(myDataProjet) + 1]
        } else if(index === projetsDatas.length - 1) {
            previousProjet = projetsDatas[projetsDatas.indexOf(myDataProjet) - 1]
        }

    }

})

console.log(myDataProjet, previousProjet, nextProjet)

const title = document.querySelector('.projet-head-title')
const resume = document.querySelector('.projet-resume')
const informations = document.querySelectorAll('.information-text')
const buttonPlace = document.querySelector('.other-projet')

if(previousProjet != null) {
    const dataPrevious = `
    <a href = 'projet.html?name=${previousProjet.url}'>
        <button>
            <span>projet précédent</span>${previousProjet.name}
        </button>
    </a>
    `
    buttonPlace.insertAdjacentHTML('beforeend', dataPrevious)
}

if(nextProjet != null) {
    const dataNext = `
    <a href = 'projet.html?name=${nextProjet.url}'>
        <button>
            <span>projet suivant</span>${nextProjet.name}
        </button>
    </a>
    `
    buttonPlace.insertAdjacentHTML('beforeend', dataNext)
}


console.log(informations)
console.log(buttonPlace)

title.textContent = myDataProjet.name
resume.textContent = myDataProjet.resume
informations[0].textContent = myDataProjet.information
informations[1].textContent = myDataProjet.knowledges