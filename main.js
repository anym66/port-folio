class Caroussel {

    constructor(element, options = {}) {
        this.element = element
        this.options = Object.assign({}, {
            slidesToScroll : 1,
            slidesVisible : 1,
            loop : false
        }, options)

        let children = [].slice.call(element.children)
        this.isMobile = false
        this.currentItem = 0
        this.root = this.createDivWithClass('caroussel')
        this.container = this.createDivWithClass('caroussel_container')
        this.root.setAttribute('tabindex', '0')
        this.root.appendChild(this.container)
        this.element.appendChild(this.root)
        this.moveCallbacks = []
        this.items = children.map( child => {
            let item = this.createDivWithClass('caroussel_item')
            item.appendChild(child)
            this.container.appendChild(item)
            return item
        })
        this.setStyle()
        this.createNavigation()

        this.moveCallbacks.forEach(cb => cb(0))

        this.onWindowResize()

        window.addEventListener('resize', this.onWindowResize.bind(this))

        this.root.addEventListener('keyup', e =>{
            if(e.key === 'ArrowRight' || e.key === 'Right') {
                this.next()
            } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
                this.prev()
            }
        })
    }

    setStyle () {
        let ratio = this.items.length / this.slidesVisible
        this.container.style.width = (ratio * 100) + "%"
        this.items.forEach(item => {
            item.style.width = ( (100 / this.slidesVisible) / ratio) + "%"
        });
    }

    createNavigation (){
        let nextButton = this.createDivWithClass('caroussel_next')
        let prevButton = this.createDivWithClass('caroussel_prev')
        this.root.appendChild(nextButton)
        this.root.appendChild(prevButton)

        nextButton.addEventListener('click', this.next.bind(this))
        prevButton.addEventListener('click', this.prev.bind(this))

        if(this.options.loop === true) {
            return
        }

        this.onMove(index =>{
            if(index === 0) {
                prevButton.classList.add('caroussel_prev-hidden')
            }
            else{
                prevButton.classList.remove('caroussel_prev-hidden')
            }
            if(this.items[this.currentItem + this.slidesVisible] === undefined) {
                nextButton.classList.add('caroussel_next-hidden')
            }
            else {
                nextButton.classList.remove('caroussel_next-hidden')
            }
            
        })
    }

    next () {
        this.goToItem(this.currentItem + this.slidesToScroll)
    }

    prev () {
        this.goToItem(this.currentItem - this.slidesToScroll)
    }

    goToItem (index) {
        if(index < 0){
            index = this.items.length - this.options.slidesVisible
        } else if( index >= this.items.length || (this.items[this.currentItem + this.options.slidesVisible] === undefined) && index > this.currentItem ) {
            index = 0
        }
        let translateX = index * (-100)/ this.options.slidesVisible
        this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)'
        this.currentItem = index
        this.moveCallbacks.forEach(cb => cb(index))
    }

    onMove (cb) {
        this.moveCallbacks.push(cb)
    }

    onWindowResize () {
        let mobile = window.innerWidth < 800
        if(mobile !== this.isMobile) {
            this.isMobile = mobile
            this.setStyle()
            this.moveCallbacks.forEach( cb => cb(this.currentItem) )
        }
    }

    createDivWithClass (className) {
        let div = document.createElement('div')
        div.setAttribute('class', className)
        return div
    }

    get slidesToScroll () {
        return this.isMobile ? 1 : this.options.slidesToScroll
    }
    get slidesVisible () {
        return this.isMobile ? 1 : this.options.slidesVisible
    }

}

// new Caroussel( document.querySelector('#caroussel1'), {
//     slidesVisible : 2
// })

const form = document.querySelector('.form-contact')

const sendMessage = e =>{
    e.preventDefault()   
    const name = document.querySelector('.contact-avatar-name')
    const email = document.querySelector('.contact-avatar-mail')
    const message = document.querySelector('.contact-message')

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "yaredayan@gmail.com",
        Password : "A88AB49A57F6A5D63FCED143232DF0131D4A",
        To : 'yaredayan@gmail.com',
        From : email.value ,
        Subject : 'me contacter',
        Body : message.value
    }).then( message => {
        console.log(email.value)
        alert(message)
    }
    );
}

form.addEventListener('submit', sendMessage)
