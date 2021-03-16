const templateCard = document.querySelector('.card');
for ( const articleData of photosArray) {
    const myClone = templateCard.cloneNode(true);
    document.querySelector ('.section7').append (myClone);
   // myClone.classList.add(articleData.category);
    myClone.querySelector('.card-img').src =articleData.imgUrl;
    myClone.querySelector('h3').innerText = articleData.name;
    myClone.querySelector('.p11').innerText = articleData.price;
    //ici on cible le bestseller dans article data
    //ensuite on fait une boucle à true ou false
    if (articleData.bestSeller) {
        myClone.querySelector('.bestSeller').style.display = "block";
    } else {
        
        myClone.querySelector('.bestSeller').style.display = "none";
    }


//event listener
    document.querySelector('.best').addEventListener ('click', function (){
        if (articleData.bestSeller) {
            myClone.querySelector('.card').style.display = "block";

    }else {
        
        myClone.querySelector('.card').style.display = "block";
        
    
    }
    });

  
    document.querySelector('.all').addEventListener ('click', function (){

            myClone.querySelector('.card').style.display = "block";

    });
       

}
templateCard.remove();

const templateComments = document.querySelector('.section8');
for ( const articleData of comments) {
    const myClone1 = templateComments.cloneNode(true);
    document.querySelector ('.container').append (myClone1);
    myClone1.classList.add(articleData.user);
    let userid = articleData.user;
    myClone1.querySelector('.user').src = ('images/'+ userid+'.png')
    myClone1.querySelector('.p12').innerText = articleData.message;
}
templateComments.remove();
