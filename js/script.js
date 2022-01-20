let login=document.getElementById("login");
let modal_login=document.getElementById("modal-login");
let close_login=document.getElementById("close-btn");
let signin=document.getElementById("signin");
let modal_signin=document.getElementById("modal-signin");
let close_signin=document.getElementById("close-signin-btn");
let category_order_rigth=document.getElementById("category-order-rigth");
let category_order_left=document.getElementById("category-order-left");
let category_list=document.getElementById("category-list");
let count_down_date=new Date("Dec 31, 2022 23:59:59").getTime();
const search=()=>{
    const searchBox=document.getElementById("search-items").value;
    const storeitem=document.getElementById("box-wrapper");
    const product=document.querySelectorAll(".box");
    const pname=document.getElementsByTagName("span");
    for (var i = 0; i < pname.length; i++) {
        let match=product[i].getElementsByTagName("span")[0];
        if (match) {
            let textvalue=match.textContent || match.innerHTML;
            console.log(textvalue);
            if (textvalue.indexOf(searchBox) > -1) {
                product[i].style.display="";
                
            }
            else
            {
                product[i].style.display="none";
            }
            
        }
        
    }
}

let counter=setInterval(()=>{
    let datenwo=new Date().getTime();
    let datediff=count_down_date - datenwo;
    let days=Math.floor(datediff/1000*60*60*24);
    let hours=Math.floor((datediff % (1000 * 60 * 60 * 24))/(1000*60*60));
    let minut=Math.floor((datediff % (1000*60*60)) / (1000 *60));
    let second=Math.floor((datediff % (1000*60)) /1000);
    

    document.querySelectorAll(".day").forEach((e)=>{
        e.innerHTML=days;

    });
    document.querySelectorAll(".hour").forEach((e)=>{
        e.innerHTML=hours;

    });
    document.querySelectorAll(".menute").forEach((e)=>{
        e.innerHTML=minut;

    });
    document.querySelectorAll(".second").forEach((e)=>{
        e.innerHTML=second;

    });
},1000);
login.onclick=function () {
    modal_signin.classList.remove("active");
    modal_login.classList.add("active");
}
close_login.onclick=function () {
    modal_login.classList.remove("active");
    
}

signin.onclick=function () {
    modal_login.classList.remove("active");
    modal_signin.classList.add("active");
}
close_signin.onclick=function () {
    modal_signin.classList.remove("active");
    
}
window.onscroll=function () {
    modal_login.classList.remove("active");
    modal_signin.classList.remove("active");
    
}
category_order_left.onclick=function () {
    category_list.style.marginRight="0%";
    margin_left_cound+="100%";
}
category_order_rigth.onclick=function () {
   category_list.style.marginRight="-100%";
}
