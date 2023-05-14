/*==========================Mobile Dropdown Menu===========================*/

const menuBar = document.querySelector('.fa-bars')
const dropdownMenu = document.querySelector('.navbar__links')

let nav = false

menuBar.addEventListener('click', ()=>{
    if(nav == false){
        dropdownMenu.style.opacity = '1'
    }
    else{
        dropdownMenu.style.opacity = '0'
    }
    nav = !nav
})

/*===================Dark Mode and Color-change=========================*/

const root = document.querySelector(':root')
const light = document.querySelector('.dark-mode')
const colorsBtn = document.getElementsByClassName('fa-circle')

const colors = ['#FF1D58', '#27E1C1', '#FF597B', '#FFFF4E', '#A400E6']


for(h = 0; h < colorsBtn.length; h++){
    let nowColor = colors[h]
    colorsBtn[h].addEventListener('click', ()=>{
        root.style.setProperty('--special-color', nowColor)
        root.style.setProperty('--special-color-shadow', nowColor + '20')
    })
}

let lightMod = true

light.addEventListener('click', ()=>{
    if(lightMod == true){
        root.style.setProperty('--background', '#141414')
        root.style.setProperty('--h-color', '#faf7f7')
        root.style.setProperty('--p-color', '#e4e3e3')
        lightMod = false
        light.style.color = '#fff'
    }
    else{
        root.style.setProperty('--background', '#fff')
        root.style.setProperty('--h-color', '#0f0f0f')
        root.style.setProperty('--p-color', '#444444')
        lightMod = true
        light.style.color = '#000'
    }
})

/*==================About SkillsBar Fılling=====================*/

const bar = document.getElementsByClassName('skillsbar__inner')
const fill = document.getElementsByClassName('bar-fill')


for(i = 0; i < bar.length; i++){
    bar[i].style.width = fill[i].innerHTML
}

/*======================Filterable Portfolio Menu===========================*/

const menu = document.getElementsByClassName('portfolio__links')
const divs = document.getElementsByClassName('portfolio__boxs')

for(i = 0; i < menu.length; i++){
    menu[i].addEventListener('click', ()=>{
        for(j = 0; j < menu.length; j++){
            menu[j].classList.remove('active')
        }
        event.target.classList.add('active')

        let dataFilter = event.target.getAttribute('data-filter')

        for(k = 0; k < divs.length; k++){
            divs[k].classList.remove('active')
            divs[k].classList.add('hide')

            if(divs[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                divs[k].classList.remove('hide')
                divs[k].classList.add('active')
            }
        }
    })
}

/*===========================Reviews Slide================================*/

const photo = document.querySelector('.photoaq')
const name = document.querySelector('.profile__name')
const stars = document.getElementsByClassName('fa-star')
const comment = document.querySelector('.profile__comment')
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

const emilia = {
    photo: 'images/review1.jpg',
    name: 'Emilia Clarke',
    star: 4,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at arcu non libero gravida porta. Mauris ut arcu mi. Nullam scelerisque eu neque non tincidunt. Sed iaculis arcu at condimentum suscipit. Nullam tempus bibendum tempus. In tincidunt consectetur feugiat. Aliquam'
}
const robert = {
    photo: 'images/review2.jpg',
    name: 'Robert Smith',
    star: 4,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at eros lobortis arcu fermentum suscipit. Integer tortor nibh, tempor ac lacinia vel, maximus id nisi. Maecenas faucibus turpis non nisl venenatis rhoncus. Integer suscipit sodales metus at venenatis. Sed leo.'
}
const margot = {
    photo: 'images/review3.jpg',
    name: 'Margot Watson',
    star: 5,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan accumsan justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque sit amet lacus eu purus pellentesque pulvinar. Aenean varius diam id metus pretium lacinia. Duis.'
}
const jennifer = {
    photo: 'images/review4.jpg',
    name: 'Jennifer Stone',
    star: 4,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum vulputate ante, sed iaculis erat porta ac. Suspendisse dapibus odio est, ut laoreet neque porta nec. Fusce vestibulum ipsum vel dui eleifend, eget venenatis turpis eleifend. Vestibulum molestie lacinia sagittis.'
}

const users = [emilia, robert, margot, jennifer]

let z = 0;

rightArrow.addEventListener('click', ()=>{
    z++;
    if(z == '4'){
        z = '0'
    };
    photo.setAttribute('src', users[z].photo);
    name.innerHTML = users[z].name;
    comment.innerHTML = users[z].review;
    for(p = 0; p < 5; p++){
        stars[p].classList.remove('active')
        for(l = 0; l < users[z].star; l++){
            stars[l].classList.add('active')
    
        }

    }
})

leftArrow.addEventListener('click', ()=>{
    z--;
    if(z == '-1'){
        z = '3'
    };
    photo.setAttribute('src', users[z].photo);
    name.innerHTML = users[z].name;
    comment.innerHTML = users[z].review;
    for(p = 0; p < 5; p++){
        stars[p].classList.remove('active')
        for(l = 0; l < users[z].star; l++){
            stars[l].classList.add('active')
    
        }

    }
})