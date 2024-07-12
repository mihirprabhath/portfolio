/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)



/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
       contactMessage = document.getElementById('contact-message')


const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey

    emailjs.sendForm('service_luvccob','template_pz3wyph','#contact-form','jU91vveOHwMSWZuYe')
          .then(() =>{
             // Show sent message
             contactMessage.textContent = 'Message sent successfully ✅'

                // Remove message after five seconds
                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 5000)

               // Clear input fields
               contactForm.reset()


          })

}       

contactForm.addEventListener('submit', sendEmail)




/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
 const sr = ScrollReveal({
    origin: 'top',
    distsnce: '60px',
    duration: 2500,
    delay: 400,
   // reset: true // Animation repeat
 })

 sr.reveal(`.home__data, .skills, .contact__container`)
 sr.reveal(`.home__img`, {delay:600})
sr.reveal(`.home__scroll`, {delay:800})
sr.reveal(`.work__card`, {interval:100 })
sr.reveal(`.about__container`, {origin:'right'})
sr.reveal(`.about__img`, {origin:'left'})
