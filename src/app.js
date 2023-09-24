const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()

//define paths for express config
const directPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')

//set up handlebar engine and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialPath)

//set up static directory to serve
app.use(express.static(directPath))

app.get('/',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'PavanKalyan'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'rose'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        helpText:'help me from any danger',
        name:'Suvarna'
    })
})


app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'you must enter address'
        })
    }
    res.send({
        forecast:'its too hot',
        location:'america',
        address:req.query.address
    })
    
})               


app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'you must enter search'
            
        })
    }
    console.log(req.query.search)
    res.send({
        products:[],
        search:req.query
    })
})
app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Suvarna',
        errorMsg:'Page not found in help'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Suvarna',
        errorMsg:'Page not found'
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})