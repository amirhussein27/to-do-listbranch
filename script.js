let myinp=document.getElementById("myinp")
let myUL=document.getElementsByClassName("myUL")
let container=document.getElementById("container")
let myul=document.getElementById("myul")


function addnewdo(newdo){
// console.log(trash);

if(myinp.value==""){
    alert("emptytext")
}
else{console.log(newdo);
    let newdoli=document.createElement('li')
    newdoli.id="newli"

    let newicon=document.createElement('li')
    newicon.id="newli"
    newicon.className='fa fa-square-o'

    let trash1=document.createElement('li')
    // console.log(newdotrash);
    let newhr=document.createElement('hr')
    


    let newcheck=document.createElement('li')
    newcheck.id="newli"
    newcheck.className='fa fa-check'
    newdoli.append(newcheck)
    newcheck.style.display="none"
    
    
    trash1.className='fa fa-remove'
    trash1.id="trash"
    console.log(trash1);
    
    newdoli.innerHTML=newdo
    container.append()
    
    myul.append(newdoli,trash1,newcheck,newhr)



    
    trash1.addEventListener('click',function(){
        newdoli.remove()
        trash1.remove()
        newhr.remove()
        newcheck.remove()
    
    })
    deleteme.addEventListener('click',function(){
        newdoli.remove()
        trash1.remove()
        newhr.remove()
        newcheck.remove()

       })
       
       newdoli.addEventListener('click',function(){

        if( newdoli.style.textDecoration!="line-through"){  
              newdoli.style.textDecoration="line-through"
              newdoli.style.opacity=0.35
        newcheck.style.display="block"
        // newcheck.style.textDecoration="none"

      
            //   newicon.remove()

            //   fa fa-check
    }
    else{
        newdoli.style.textDecoration="none"
        newdoli.style.color="red"
        newdoli.style.opacity=1
        newcheck.style.display="none"


        
    }
    
       }
       
       )
    }

   }

addme.addEventListener('click',function(event){
let newdo=myinp.value
    

    // console.log("object");

    // console.log(event.keyCode);


addnewdo(newdo)
myinp.value=''  

        })
  