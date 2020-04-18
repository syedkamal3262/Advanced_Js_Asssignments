class Product_Structure{
    constructor(img_url,pname,price){
        this.image_url=img_url;
        this.prd_name=pname;
        this.price=price;
    }
}
let cartData=null;
let count = ''; 
var cont = document.getElementById("count");
var cartModal=document.querySelector("#cart>img");
cartModal.addEventListener("click",()=>{
    if(document.querySelectorAll("#tableOutput > tr").length>0){
        document.getElementById("cartModal").style.display="block";
    }
   })
var cartClose=document.getElementById("closeModal");
cartClose.addEventListener("click",()=>{
    document.getElementById("cartModal").style.display="none";
})


function output(data){
    var tableE = document.getElementById("tableOutput");
    var rowE =document.createElement("tr");
    tableE.append(rowE);
    var x1 = rowE.insertCell(0);
    var img= document.createElement("img");
    img.setAttribute("class",`prd_img`);
    x1.appendChild(img);
    img.setAttribute("src",`./images/${data.image_url}`);
    var x2 = rowE.insertCell(1);
    x2.innerHTML= data.prd_name;
    var x4 = rowE.insertCell(2);
    var img2= document.createElement("img");
    x4.appendChild(img2);
    var x5 = rowE.insertCell(3);
    var img3= document.createElement("img");
    x5.appendChild(img3);
    img3.setAttribute("src","./images/refresh-ccw.svg");
    img2.setAttribute("src","./images/x-circle.svg");
    var x3 = rowE.insertCell(4);
    x3.innerHTML= data.price; 
}

let ProductData=[
    new Product_Structure('ce_shoes_6_184b_tk_6000_1_.jpg','Lorem ipsum dolor ','$3100'),
    new Product_Structure('formal_dress_shoes2__11896.1502948088.jpg','adipisicing elit','$3200'),
    new Product_Structure('new2.jpg','Ad dolorum quas est voluptate','$3300'),
    new Product_Structure('sb281-black-formal-6-shoes-bank-black-original-imafcntnafynejkw.jpeg','tenetur! Reprehenderit tempora ','$3400'),
    new Product_Structure('unnamed.jpg','sed dicta odit rem','$3500')
]

for(let i=0;i<ProductData.length;i++){
    var parentEle= document.getElementById('products_Slider');
    var prdDiv= document.createElement("div");
    prdDiv.setAttribute("id","product");
    var innerDiv= document.createElement("div");
    var images=document.createElement("img");
    images.setAttribute("src",`./images/${ProductData[i].image_url}`);
    var addtocart=document.createElement("button");
    addtocart.innerText="Add to Cart";
    var info=document.createElement("p");
    info.innerHTML=`
    ${ProductData[i].prd_name}<br>
    <strong>${ProductData[i].price}</strong>
    `;
    innerDiv.appendChild(images);
    innerDiv.appendChild(addtocart);
    parentEle.appendChild(prdDiv);
    prdDiv.appendChild(innerDiv);
    prdDiv.appendChild(info);  
    addtocart.addEventListener('click',function addcount (){
        count++;
        cont.style.display="block";
        cont.innerText=count;
        output(ProductData[i]);
    })
   
}
