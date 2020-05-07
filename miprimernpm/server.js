const express = require('express');
const path =require('path');
const app= express();
const PORT= 3000;

app.get('/', (req,res) => {

    res.sendFile(path.join(__dirname,'views','index.html'));
/* res.send('Lo que pintaa otra vez!') */
})

app.get('/sobremi', (req,res) => {

    res.send('sobre mi aja!');
/* res.send('Lo que pintaa otra vez!') */
})
app.get('/contacto', (req,res) => {

    res.send('micorreo@gmail.com');
/* res.send('Lo que pintaa otra vez!') */
})
 //2 !== '2'


app.listen(PORT,()=>console.log(`Server on port ${PORT}`));