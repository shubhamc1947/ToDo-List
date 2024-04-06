const addlist=document.getElementById("addlist");
const btn=document.getElementById("btn");

const listcont=document.getElementById("listcont");


addlist.focus();
//add list event


// Store data and show data

function storingdata(){
    console.log(addlist.value);

    addlist.value=addlist.value.trim();
    if(addlist.value==""){
        alert("Empty List");
    }else{
        const ele=`<div class="items" ><div class="itemsleft" >
            ${addlist.value}</div><div class="itemsright"><i class="fa-solid fa-trash"></i></li></div></div>`;
            listcont.innerHTML+=ele;
    }       
    addlist.value="";
    addlist.focus();

    //storing in local data
    storedata();
}


btn.addEventListener("click",function(){
    storingdata();
})


//Tring to add the list on clicking the enter as well but enter 
// document.addEventListener("keypress",function(eve){    
//     if(eve.key=="Enter"){
//         storingdata();
//     }
// })




//checking or deleing element
listcont.addEventListener("click",function(ele){

    if(ele.target.classList.contains("itemsleft")){

        ele.target.classList.toggle("checked");

    }else if(ele.target.classList.contains("itemsright")){

        ele.target.parentElement.remove();
        
    }
    storedata();
})


// storing data in local storage


function storedata(){
    localStorage.setItem("data",listcont.innerHTML);
}

// show data 

function showdata(){
    if(localStorage.getItem("data")){
        listcont.innerHTML=localStorage.getItem("data");
    }
}

showdata();