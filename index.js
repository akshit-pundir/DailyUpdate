
const express=require("express");
const app=express();
const path=require("path");
const ejsMate=require("ejs-mate");

const dotenv=require("dotenv");
dotenv.config()

// const url = 'https://google-news13.p.rapidapi.com/latest?lr=en-US';
// const options = {
	
// 	headers: {
// 		'X-RapidAPI-Key': 'a33b4c7665msh688c661a5bfacf2p190bfajsna75eaba7ddb6',
// 		'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
// 	}
// };
// const apikey = '5dacf2362df299ec1227616f331feb2b';
// const url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apikey;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.engine("ejs",ejsMate);

// app.use(express.urlencoded({ extended: true }));



app.get('/' ,(req,res) =>{
    res.render('pages/home');

} );

app.get('/latest' , async(req,res) =>{
    const result=await fetch(process.env.URLGENRAL);
	const news=await result.json();
	const response=news.articles;
	res.render('pages/latest',{response});

} );
app.get('/business' , async(req,res) =>{
    const result=await fetch(process.env.URLBUSSINESS);
	const news=await result.json();
	const response=news.articles;
	res.render('pages/business',{response});

} );
app.get('/world' , async(req,res) =>{
    const result=await fetch(process.env.URLWORLD);
	const news=await result.json();
	const response=news.articles;
	res.render('pages/world',{response});

} );
app.get('/technology' , async(req,res) =>{
    const result=await fetch(process.env.URLTECHNOLOGY);
	const news=await result.json();
	const response=news.articles;
	res.render('pages/technology',{response});

} );
app.get('/entertainment' , async(req,res) =>{
    const result=await fetch(process.env.URLENTERTAINMENT);
	const news=await result.json();
	const response=news.articles;
	res.render('pages/entertainment',{response});

} );
app.get('/sports' , async(req,res) =>{
    const result=await fetch(process.env.URLSPORTS);
	const news=await result.json();
	const response=news.articles;
	res.render('pages/sports',{response});

} );
app.get('/science' , async(req,res) =>{
    const result=await fetch(process.env.URLSCIENCE);
	const news=await result.json();
	const response=news.articles;
	res.render('pages/science',{response});

} );
app.get('/health' , async(req,res) =>{
    const result=await fetch(process.env.URLHEALTH);
	const news=await result.json();
	const response=news.articles;
	res.render('pages/health',{response});

} );
app.get('/nation' , async(req,res) =>{
    const result=await fetch(process.env.URLNATION);
	const news=await result.json();
	const response=news.articles;
	res.render('pages/nation',{response});

} );









app.listen(3000,   ()=>{
    console.log("the website is live now!!")
});




