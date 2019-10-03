// Controls the white transparent navbar when scrolling
export const scrollAppBar = () => {

    const appBar = document.querySelector('.app-bar-dynamic-transparent')
    const navIcons = document.querySelectorAll('.nav-icons a i');
    const logoContainer = document.querySelector('.logo-grow div')

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 700) {
            appBar.classList.remove('app-bar-dynamic-transparent')
            appBar.classList.add('app-bar-dynamic-white')
            navIcons.forEach(icon => icon.classList.add('turn-icon-white'))
            logoContainer.classList.remove('logo-container-white')
            logoContainer.classList.add('logo-container-black')
        } else if( window.pageYOffset < 700 ) {
            appBar.classList.remove('app-bar-dynamic-white')
            appBar.classList.add('app-bar-dynamic-transparent')
            navIcons.forEach(icon => icon.classList.remove('turn-icon-white'))
            logoContainer.classList.add('logo-container-white')
            logoContainer.classList.remove('logo-container-black')
        }
    });
}

// Controls the audio rewind for 10 seconds
export const rewindAudio = (seconds) => {
    let videoSelector = document.querySelector('.rewindAudio')
    videoSelector.currentTime -= 10.0
}

// Controls the audio forward for 10 seconds
export const forwardAudio = (seconds) => {
    let videoSelector = document.querySelector('.rewindAudio')
    videoSelector.currentTime += 10.0
}