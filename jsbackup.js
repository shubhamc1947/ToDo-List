const listcont=document.querySelector("#listcont");
const addlist=document.getElementById("addlist");
const btn=document.getElementById("btn");
let items=document.querySelectorAll(".items");
let itemsleft=document.querySelectorAll(".itemsleft");

addlist.focus();
//Add List Code
btn.addEventListener("click",(e)=>{
    if(addlist.value==""){
        alert("List Can't Be Empty");
    }else{

        const add =`<div class="items" ><div class="itemsleft">${addlist.value}</div><div class="itemsright"><i class="fa-solid fa-trash"></i></li></div></div>`;

        // creating below items
        // Step 1: Create the elements
        var cont = document.createElement('div');
        var itemsleftDiv = document.createElement('div');
        var itemsrightDiv = document.createElement('div');
        var trashIcon = document.createElement('i');
        
        // Step 2: Set attributes and content
        cont.className = 'items';
        itemsleftDiv.className = 'itemsleft';
        itemsleftDiv.textContent = addlist.value;
                
        itemsrightDiv.className = 'itemsright';
        
        trashIcon.className = 'fa-solid fa-trash';
        
        // Step 3: Append elements to the desired parent element
        itemsrightDiv.appendChild(trashIcon);

        cont.appendChild(itemsleftDiv);
        cont.appendChild(itemsrightDiv);

        listcont.appendChild(cont);

        storeitems(); // Call storeitems function here only

    }
    addlist.value="";
    addlist.focus();
    itemsleft=document.querySelectorAll(".itemsleft");
});

// Event delegation for dynamically added items
listcont.addEventListener('click', function(e) {
    if (e.target.classList.contains("itemsleft")) {
        e.target.classList.toggle('checked');
    } else if (e.target.classList.contains("fa-trash")) {
        e.target.parentElement.parentElement.remove(); // Remove the parent of the parent element (the .items element)
        storeitems();
    }
});

//store items
function storeitems(){
    const localstg=localStorage.setItem("data",listcont.innerHTML);
}

function showdata(){
    if(localStorage.getItem("data")){
        listcont.innerHTML=localStorage.getItem("data");
    }
}

showdata();
