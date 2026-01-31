const counters = document.querySelectorAll(".counter")

counters.forEach((counter) => {
    counter.innerText = "0"

    const updateCounter = () => {
        const target = Number(counter.getAttribute("data-target"))
        //console.log(typeof target, target);
        const c = +counter.innerText

        const incremet = target / 300 

        if(c < target){
            counter.innerText = `${Math.ceil(c + incremet)}`
            setTimeout(updateCounter, 1.2)
        }else{
            counter.innerText = target
        }
    }
    updateCounter()
})