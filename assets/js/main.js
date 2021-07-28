function addToggle()
{
    const palydiv = document.querySelector('.videoDiv')
    const videoPlay = document.querySelector('.videoPlay')
    palydiv.classList.toggle('active')
    videoPlay.CurrentTime = 0
    videoPlay.pause()
}