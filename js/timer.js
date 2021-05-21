let EndDateTime = new Date(2021, 6, 26, 2, 1, 0, 0)
let EndStamp = EndDateTime.getTime()

let newDate = new Date()
let newStamp = newDate.getTime()

let timer

function updateClock() {
    newDate = new Date()
    newStamp = newDate.getTime()
    let diff = Math.round((EndStamp - newStamp) / 1000)

    let days = Math.floor(diff / (24 * 60 * 60))
    diff = diff - (days * 24 * 60 * 60)
    let hours = Math.floor(diff / (60 * 60))
    diff = diff - (hours * 60 * 60)
    let minutes = Math.floor(diff / (60))
    diff = diff - (minutes * 60)
    let seconds = diff

    const d = document.querySelector('.days')
    const h = document.querySelector('.hours')
    const m = document.querySelector('.minutes')
    const s = document.querySelector('.seconds')

    d.innerHTML = days
    h.innerHTML = hours
    m.innerHTML = minutes
    s.innerHTML = seconds
}

updateClock()

setInterval(updateClock, 1000);