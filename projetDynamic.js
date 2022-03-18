const projetsDatas = [
    {
        url : "geekstore",
        name : "GEEKSTORE",
        resume : "Application de vente de DVD, bluray, jeux vidéos et produits dérivés des mangas et series cultes (espaces des geeks quoi). C'était juste la partie frontend",
        photos : ['assets/img/hsayit2.PNG', 'assets/img/hsayit2.PNG'],
        knowledges : "Donc, l'application est entièrement construit en ReactJS, CSS et Twitter bootstrap pour le style. Je me suis vraiment concentré sur le front-end, donc j'ai utilisé Firebase pour gérer la partie backend de l'appli. Ce projet m'a permi surtout de mieux utiliser Redux, qui n'a pas été facile à prendre en main ",
        information : "J'ai construit cette application pendant ma fin de formation sur ReactJS à Orange digital Center (Orange Cameroun). Durant cette formation, j'ai pas seulement appris à coder en ReactJS, mais de penser en ReactJS, à bien utiliser les props, les states, les hooks, Redux, axios pour les appels d'API, et une petite formation de 2 jours sur les méthodes agiles et particulièrement Scrum. j'ai utilisé toutes ces connaissances pour monter ce projet de fin de formation.",
        githubLink : "https://github.com/anym66/geek-store"
    },
    {
        url : "isayit",
        name : "ISAYIT",
        resume : " Application web permettant de s'instruire sur le domaine sanitaire, ceci grâce à une bibliothèque et des forums de discuition sur des sujets ayant un lien avec la santé ",
        photos : ['assets/img/hsayit2.PNG', 'assets/img/hsayit1.PNG'],
        knowledges : " J'ai pu mettre en pratique la majorité des notions acquises pour monter ce projet avec mon équipe  en suivant la méthodologie Scrum. Le front-end de cette application est faite en ReactJS, et le back-end qui était lié à des BDs firestore",
        information : "Cette application a été faite pendant pendant ma formation en ASP .net core à Orange digital Center (Orange Cameroun). Cette formation m'a appris à dévélopper des sites professionnels grâces au frameWork de Microsoft. Or mis cela, nous avons aussi à construire des API, à monter de bonnes achitectures en fonction du projet, la programmation asynchrone, la programmation parallèle,  et aussi des bonnes pratiques du génie logiciel comme l'injection des dépendances, et le design pattern MVCS (modèle-Vue-Controleur-Service).",
        githubLink : "https://github.com/anym66/ma-maison"

    },
    {
        url : "cayyaapp",
        name : "CAYYA APP",
        resume : "Application de partage des ressources (photos, videos, audios, ...) autour du recyclage des déchets plastiques ",
        photos : ['assets/img/cayyaapp1.PNG', 'assets/img/cayyacapture.PNG'],
        knowledges : "Je me suis chargé de la partie Front-end de l'application avec ReactJS, Redux, tailWind, CSS. Cette application m'a permise de vraiment me challenger, car j'ai pu resourdre beaucoup de problème que j'avais pas encore recontré.",
        information : "Cette Application a été faite par moi et mon équipe au cours de l'Orange Summer Challenge qui est une compétition (et aussi un stage) organisé par Orange enson partenariat avec Google. pendant ce stage j'ai pu acquérir des connaissances dans divers domaines : machine Learning, IOT, économie, comptabilité, business, accountability et j'ai aussi approfondi mes connaissances dans le génie logiciel notamment dans la modélisation UML, le No-SQL et material Design",
        githubLink : "https://github.com/anym66/cayya-app-frontend"
    },
    {
        url : "schooltrack",
        name : "SCHOOL TRACK",
        resume : "Application de suivi de la scolarité des enfants dès leur entrée à l'école, jusqu'à la fin de leur cursus. Gràce à cette application une personne pourrait continuer son cursus facilement dans n'importe quelle école",
        photos : ['assets/img/hsayit2.PNG', 'assets/img/hsayit2.PNG'],
        knowledges : "Les technologies que j'ai utilisées pour cette application sont : ReactJS, Css, bootstrap, Firebase pour le backend. la pricipale difficulté a été au niveau de la modélisation du logicie. étant donné que l'application devait être destiné à un usage massif, j'ai utilisé du No-SQL notamment firestore (Orienté document) ",
        information : "J'ai construit cette application pour la soutenance en vue de l'obtention de ma licence de Technologie à l'institut universitaire de technologies de l'université de Douala. Cette application m'a permise de consiler les connaissances acquises pendant mes 3 années de formation",
        githubLink : "https://github.com/anym66/cursus-top"

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

const title = document.querySelector('.projet-head-title')
const resume = document.querySelector('.projet-resume')
const informations = document.querySelectorAll('.information-text')
const buttonPlace = document.querySelector('.other-projet')
const photosContainer = document.querySelectorAll('.container-projet-presentation')
const sourceContainer = document.querySelector('.source')



const firstPhoto =  `
        <img src="${myDataProjet.photos[0]}" class="projet-presentation" alt="paysage">
    `
const secondPhoto = `
        <img src="${myDataProjet.photos[1]}" class="projet-presentation" alt="paysage">
    `

const source = `
        <a href="${myDataProjet.githubLink}"><button class="projet-btn" style="margin-bottom: 30px;">SOURCE</button></a>
    `    


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

console.log(firstPhoto, secondPhoto)

photosContainer[0].insertAdjacentHTML('beforeend', firstPhoto)
photosContainer[1].insertAdjacentHTML('beforeend', secondPhoto)
sourceContainer.insertAdjacentHTML('beforeend', source)

console.log(source)


title.textContent = myDataProjet.name
resume.textContent = myDataProjet.resume
informations[0].textContent = myDataProjet.information
informations[1].textContent = myDataProjet.knowledges