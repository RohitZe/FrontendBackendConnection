import express from 'express';

const app=express();

app.get('/',(req,res)=>{
    res.send("<h1>server is running<h1>");
})
app.get('/api/jokes',(req,res)=>{
    const joke=[
         {"id":"65665",
          "name":"santa",
          "profession":"Banta",
         },
        {"position":"first",
        "name":"fanta",
        "profession":"moj masti",
        },
        {"joke":"dark"},
    ]
    res.send(joke);
})

const port=process.env.PORT||3001;
app.listen(port,()=>{
    console.log(`listening at ${port}`);
});
