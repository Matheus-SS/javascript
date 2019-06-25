const todo = async ()=>{
    const response = await fetch('videos.json');
   
    if(response.status !== 200){
        throw new Error('error');
    }
   
    const data  = await response.json();
    return (data);
};

const array = todo()
.then((data)=>{
   console.log (data['videos'][0]);
}).catch((err)=>{
    console.log (err.message);
});


