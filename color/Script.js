
function a()
{
    var btn = document.querySelectorAll('.btn');
   Array.from(btn).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target.innerHTML);
        if(e.target.innerHTML=="Yellow")
        {
            document.body.style.backgroundColor="yellow";
        }
        else if(e.target.innerHTML=="Red")
        {
            document.body.style.backgroundColor="Red";
        }
        else if(e.target.innerHTML=="Black")
        {
            document.body.style.backgroundColor="black";
        }
        else if(e.target.innerHTML=="red")
        {
            document.body.style.backgroundColor="red";
        }
        else if(e.target.innerHTML=="black")
        {
            document.body.style.backgroundColor="black";
        }
        else if(e.target.innerHTML=="white")
        {
            document.body.style.backgroundColor="white";
        }
        else if(e.target.innerHTML=="blue")
        {
            document.body.style.backgroundColor="blue";
        }
        else if(e.target.innerHTML=="pink")
        {
            document.body.style.backgroundColor="pink";
        }

    })
   })

}