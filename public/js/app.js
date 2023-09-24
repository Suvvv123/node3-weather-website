console.log('Client side js is loaded')



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#msg-1')
const msgTwo = document.querySelector('#msg-2')



weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    const location = search.value
    msgOne.textContent='Loading....'
    msgTwo.textContent=''
    fetch('http://localhost:3000/weather?address='+ location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                console.log('enter a valid search ')
                msgOne.textContent=data.error
            } else{
                console.log(data.forecast)
                console.log(data.address) 
                console.log(data.location)
                
                msgTwo.textContent=data.forecast
                msgOne.textContent=data.address
            }
        })

    })

})
