//==== PRODUCT DATA ==== // (used everywhere)

//This stores all products in JS array of objects which satisfies the requirement to store product data in JSON/JS  objects
const products=[
  {
    "id": "1",
    "name": "Superhero figures",
    "category": "figures",
    "price": 1000,
    "image": "images/Figure1.jpg"
  },
  {
    "id": "2",
    "name": "Fantasy Figures",
    "category": "figures",
    "price": 2500,
    "image": "images/Figure2(2).jpg"
  },
  {
    "id": "3",
    "name": "Mini Character Figures",
    "category": "figures",
    "price": 2000,
    "image": "images/Figure2.jpg"
  },
  {
    "id": "4",
    "name": "Mini Heros collection",
    "category": "figures",
    "price": 3400,
    "image": "images/figure3.jpg"
  },
  {
    "id": "5",
    "name": "Robut Action Figures",
    "category": "figures",
    "price": 4200,
    "image": "images/Figure4.jpg"
  },
  {
    "id": "6",
    "name": "Racing vehicle Figure",
    "category": "figures",
    "price": 1700,
    "image": "images/Figure5.jpg"
  },
  {
    "id": "7",
    "name": "Bubble gun",
    "category": "toys",
    "price": 4400,
    "image": "images/Toy1.jpg"
  },
  {
    "id": "8",
    "name": "Plush elephant toy",
    "category": "toys",
    "price": 5700,
    "image": "images/Toy3.jpg"
  },
  {
    "id": "9",
    "name": "Toy kitchen set",
    "category": "toys",
    "price": 5400,
    "image": "images/Toy4.webp"
  },
  {
    "id": "10",
    "name": "Toy Robut",
    "category": "toys",
    "price": 8600,
    "image": "images/Toy5.webp"
  },
  {
    "id": "11",
    "name": "Toy Train Set",
    "category": "toys",
    "price": 4600,
    "image": "images/Toy6.jpg"
  },
  {
    "id": "12",
    "name": "Play dough set",
    "category": "toys",
    "price": 3400,
    "image": "images/toy7.jpg"
  },
  {
    "id": "13",
    "name": "Jenga",
    "category": "games",
    "price": 7520,
    "image": "images/Boardgame1.jpg"
  },
  {
    "id": "14",
    "name": "Monopoly",
    "category": "games",
    "price": 5300,
    "image": "images/Boardgame2.jpg"
  },
  {
    "id": "15",
    "name": "UNO",
    "category": "games",
    "price": 3700,
    "image": "images/Boardgame3.webp"
  },
  {
    "id": "16",
    "name": "Snake and Ladders",
    "category": "games",
    "price": 2300,
    "image": "images/Boardgame4.jpg"
  },
  {
    "id": "17",
    "name": "Ludo",
    "category": "games",
    "price": 3300,
    "image": "images/Boardgame5.jpg"
  },
  {
    "id": "18",
    "name": "Chess",
    "category": "games",
    "price": 4300,
    "image": "images/Boardgame6.jpg"
  },
  {
    "id": "19",
    "name": "Scrabble",
    "category": "games",
    "price": 5200,
    "image": "images/Boardgame7.avif"
  },
  {
    "id": "20",
    "name": "Emergency vehicles",
    "category": "cars",
    "price": 2300,
    "image": "images/Diecastcars1.jpg"
  },
  {
    "id": "21",
    "name": "Sports Cars",
    "category": "cars",
    "price": 4600,
    "image": "images/Cars2.jpg"
  },
  {
    "id": "22",
    "name": "Racing car",
    "category": "cars",
    "price": 3100,
    "image": "images/Cars3.jpg"
  },
  {
    "id": "23",
    "name": "Classic Cars",
    "category": "cars",
    "price": 2500,
    "image": "images/Cars4.jpg"
  },
  {
    "id": "24",
    "name": "Miniature Car Set",
    "category": "cars",
    "price": 2000,
    "image": "images/Cars5.jpg"
  }
];

function getproductimage(product){
    const match=products.find(item => item.id === product.id);
    return match ? match.image : product.image;
}

//======= NAV BAR - HAMBURGER MENU (MOBILE VIEW) ========// (every page)

//Toggles hamburger icon animation and shows/hides the mobile nav links.c
(function () {
    const hamburger = document.getElementById('hamburger');
    const navlinks  = document.getElementById('navlinks');
    const overlay   = document.getElementById('menuoverlay');

    if (!hamburger || !navlinks) return;

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navlinks.classList.toggle('active');
        if (overlay) overlay.classList.toggle('active');
    }

    hamburger.addEventListener('click', toggleMenu);
    if (overlay) overlay.addEventListener('click', toggleMenu);
})();

//======= NAV BAR - HIGHLIGHT CURRENT PAGE ========// (every page)

//Adds the "activepage" class (underline) to the nav link of the page the
//visitor is currently on, e.g. Home is underlined on index.html.
(function () {
    let page = window.location.pathname.split('/').pop() || 'index.html';
    if (page.indexOf('.') === -1) page += '.html';

    document.querySelectorAll('.navlinks a').forEach(function (link) {
        if (link.getAttribute('href') === page) {
            link.classList.add('activepage');
            link.setAttribute('aria-current', 'page');
        }
    });
})();

//=============== HOME PAGE (HERO SLIDER) ==============//

//This automatically rotates the hero slides every few seconds by removing
//the active slide and adding another one

let currentslide=0;

const slides=document.querySelectorAll(".heroslide");

function showslide(index){
    if (slides.length===0) return;

    slides.forEach(slide=> slide.classList.remove("active"));

    if (slides[index]){
        slides[index].classList.add("active");
    }
}

function nextslide(){
    if (slides.length===0) return;
    currentslide++;
    if (currentslide >= slides.length){
        currentslide=0;
    }
    showslide(currentslide);
}

if (slides.length>0){
    setInterval(nextslide,3000);
}



//Picks products from the array and displays it.
//'Featured products of the day' - changes for every page reload.
function showhighlights(){
    const container=document.getElementById("highlightsgrid");
    if (!container) return;

    const shuffled=[...products].sort(() => 0.5 - Math.random());
    const picks = shuffled.slice(0, 4);

    container.innerHTML="";
    picks.forEach(function(product){
        container.innerHTML+= `
            <div class="productcards" data-id="${product.id}"  data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">
                <img src="${product.image}" alt="${product.name}"/>
                <p>${product.name}</p>
                <p>Rs.${product.price}</p>
                <div class="buttons">
                    <button class="addtocart"  onclick="addtocart(this)">Add to Cart</button>
                </div>
            </div>
        `;
    });

}
showhighlights();

//========= FOOTER PAGE (NEWSLETTER SUBSCRIPTION) ===========//

//This saves the email entered to the localStorage and the user clicks the button
const newsletterform=document.querySelector(".footerform form");

if (newsletterform){
    newsletterform.addEventListener("submit",function(e){
        e.preventDefault();
        const emailinput=document.getElementById("email");
        const msg=document.getElementById("newsletterstore");
        const email=emailinput ? emailinput.value.trim():"";

        if (email===""){
            msg.textContent="Please enter a valid email address.";
            return;
        }

        localStorage.setItem("newsletterstore",email);
        msg.textContent="Thank you for subscribing to Toy Haven!";

        emailinput.value="";

        setTimeout(function(){
            msg.textContent="";
        },3000);
    });
}

//=============== PRODUCT LISTING PAGE ==============//


//This adds a product to the localStorage when user clicks add to cart
//If the product is already in the cart it increase the quantity without duplicating the entry.
function addtocart(button){
    
    const card=button.closest(".productcards");

    const product={
        id:card.dataset.id,
        name:card.dataset.name,
        price:Number(card.dataset.price),
        image:card.dataset.image,
        quantity:1
    };

    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    const exisiting=cart.find(item => item.id === product.id);

    if (exisiting){
        exisiting.quantity++;
    }else {
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(product.name + " added to cart!");
}

//Filters products by search text and category.
//And hides/shows the entire category section if they exist.
function filterproducts(){
    const searchinput=document.getElementById("searchbox");
    const filterselect=document.getElementById("filter");
    const products=document.querySelectorAll(".productcards");
    const noresultsmsg=document.getElementById("noresults");


    if (!searchinput || !filterselect) return;

    const searchtext=searchinput.value.toLowerCase().trim();
    const selectedcategory=filterselect.value.toLowerCase();
    let visiblecount=0;

    products.forEach(function(product){
        const name=product.querySelector("p");
        const productname=name ? name.textContent.toLowerCase():"";
        const productcategory=product.dataset.category || "";

        const matchessearch=productname.includes(searchtext);

        const matchcatergory=(selectedcategory === "all") || (productcategory === selectedcategory);

        if (matchessearch && matchcatergory){
            product.style.display="";
            visiblecount++;
        }else {
            product.style.display="none";
        }
    });

    document.querySelectorAll(".category").forEach(function(section){
        const visible=section.querySelectorAll(".productcards:not([style*='display: none'])").length;
        section.style.display=visible>0?"":"none";
    });


    if (noresultsmsg){
        noresultsmsg.style.display=visiblecount===0?"block":"none";
    }
}


document.addEventListener("DOMContentLoaded",function(){
    const searchbox=document.getElementById("searchbox");
    const categoryfilter =document.getElementById("filter");
    const search=document.getElementById("searchbtn");

    if(searchbox){
        searchbox.addEventListener("input", filterproducts);
    }

    if(categoryfilter){
        categoryfilter.addEventListener("change" , filterproducts);
    }
    if (search){
        search.addEventListener("click",filterproducts);
    }
});

//Adds a product to wishlist by preventing duplicates.
let currentbtn;

document.addEventListener("click", function(e){
    const popup = document.getElementById("wishlistpopup");
    if (!popup) return;   // this page has no popup, so stop here

    const heart = e.target.closest(".wishbtn");
    if (heart){
        currentbtn = heart;
        const react = heart.getBoundingClientRect();
        popup.style.position = "fixed";
        popup.style.top = (react.bottom + 5) + "px";
        popup.style.left = react.left + "px";
        popup.style.display = "flex";
        return;
    }

    if (!e.target.closest(".wishlistpopup")){
        popup.style.display = "none";
    }
});

document.querySelectorAll("#wishlistpopup button").forEach(function(btn){
    btn.addEventListener("click",function(e){
        e.stopPropagation()
        const card=currentbtn.closest(".productcards") || currentbtn.closest(".modalbox");
        if (!card) return;

        const product={
            id:card.dataset.id || document.getElementById("modaladdtocart")?.dataset.cardid,
            name:card.dataset.name || document.getElementById("modalname")?.textContent,
            price:parseFloat(card.dataset.price) || parseFloat(document.getElementById("modalprice")?.textContent.replace("Rs.","")),
            image:card.dataset.image || document.getElementById("modalimage")?.src
        };

        let wishlist=JSON.parse(localStorage.getItem("wishlist")) || [];
        if (!wishlist.some(item => item.id === product.id)){
            wishlist.push(product);
            localStorage.setItem("wishlist",JSON.stringify(wishlist));
        }

        let status=JSON.parse(localStorage.getItem("wishliststatus")) || {};
        status[product.id]=this.dataset.status;
        localStorage.setItem("wishliststatus",JSON.stringify(status));

        const selected=this.textContent;
        document.getElementById("wishlistpopup").style.display="none";
        setTimeout(function(){
            alert("Added as " + selected);
        },10);
    });
});


//Opens the modal when a product card is clicked.
document.addEventListener("click",function(e){
    if (!document.getElementById("productmodal")) return;

    const card=e.target.closest(".productcards");
    if (!card) return;
    if (e.target.closest(".buttons")) return;

    document.getElementById("modalimage").src=card.dataset.image;
    document.getElementById("modalcategory").textContent=card.dataset.category;
    document.getElementById("modalname").textContent=card.dataset.name;
    document.getElementById("modalprice").textContent="Rs." + card.dataset.price;
    document.getElementById("modaladdtocart").dataset.cardid=card.dataset.id;

    document.getElementById("productmodal").style.display="flex";
});

document.getElementById("modalclose")?.addEventListener("click",function(){
    document.getElementById("productmodal").style.display="none";
});

document.getElementById("productmodal")?.addEventListener("click",function(e){
    if (e.target===this)this.style.display="none";
});

document.getElementById("modaladdtocart")?.addEventListener("click",function(){
    const cardid=this.dataset.cardid;
    const card=document.querySelector(`.productcards[data-id="${cardid}"]`);
    if (card){
        const realbutton=card.querySelector(".buttons button");
        realbutton.click();
    }
    document.getElementById("productmodal").style.display="none";
});


//================ CART PAGE ===============//

//Displays all cart items in the html table, while reading from localStorage.

function displaycart(){
    const itemscontainer=document.getElementById("cartitems");

    if (!itemscontainer){
        return;
    }

    let cart=JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length==0){
        itemscontainer.innerHTML=`
            <tr>
                <td colspan="6">
                    Your cart is empty.
                </td>
            </tr>
        `;

        updatecarttotal();
        return;
    }

    itemscontainer.innerHTML="";

    cart.forEach((product,index) => {
        const total=product.price*product.quantity;

        itemscontainer.innerHTML+= `
        <tr>
            

            <td>
                <img src="${getproductimage(product)}"
                    alt="${product.name}"
                    class="cartimage">
            </td>

            <td class="productname">
                ${product.name}
            </td>

            <td>
                Rs.${product.price.toFixed(2)}
            </td>

            <td>
                <div class="quantity">
                    <button onclick="decreasequantity(${index})">-</button>

                    <span class="quantityvalue">
                        ${product.quantity}
                    </span>

                    <button onclick="increasequantity(${index})">+</button>
                </div>
            </td>

            <td>
                Rs.${total.toFixed(2)}
            </td>
            <td>
                <button class="remove" onclick="removeitem(${index})">X</button>
            </td>
        </tr>
      `;

    });

    updatecarttotal();
}

//Increases the quantity of a cart item by 1
function increasequantity(index){

    let cart =JSON.parse(localStorage.getItem("cart")) || [];
    cart[index].quantity++;

    localStorage.setItem("cart",JSON.stringify(cart));

    displaycart();
}

//Decreases the quantity of a cart item by 1
function decreasequantity(index){

    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    if (cart[index].quantity>1){
        cart[index].quantity--;
    }

    localStorage.setItem("cart",JSON.stringify(cart));

    displaycart();
}


// Removes an item from the cart, based on its index in the array.
function removeitem(index)
{
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    displaycart();

}  

//Calculates total price of all items in cart and displays total.
function updatecarttotal(){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];

    let totalcount=0;

    cart.forEach(function(product){
        totalcount+=product.price * product.quantity;
    });

    const subtotal=document.getElementById("carttotal");

    if (subtotal){
        subtotal.textContent= "Rs." + totalcount.toFixed(2);
    }
}
    
//Redisplays the cart and shows a sucess message.
function updatecart(){
    displaycart();

    alert("Cart updated!");
}

displaycart();


//Removes all items from the cart and displays the cart as empty.
function clearcart(){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0){
        alert("Your cart is empty!");
        return;
    }

    localStorage.removeItem("cart");

    displaycart();

    alert("Cart has been cleared!");
}

document.addEventListener("DOMContentLoaded",function(){
    displaycart();
    const clearbtn=document.getElementById("clear");

    if (clearbtn){
        clearbtn.addEventListener("click",clearcart);
    }
});

//=============== CHECKOUT PAGE ==============//

//Reads the cart data from localStorage and displays each items in the order summary.
function displaycheckout(){
    const container=document.getElementById("orderitems");
    if (!container) return;

    let cart=JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length===0){
        container.innerHTML="<p>Your cart is empty</p>";
        updatecheckouttotal();
        return;
    }

    container.innerHTML="";

    cart.forEach((product) =>{
        container.innerHTML+=`
            <div class="eachproduct">
                <img src="${getproductimage(product)}" alt="${product.name}">
                <div class="productname">
                    <h3>${product.name}</h3>
                    <p>Quantity:${product.quantity}</p>
                </div>
                <p class="itemprice">Rs.${(product.price * product.quantity).toFixed(2)}</p>
            </div>
        `;
    });

    updatecheckouttotal();
}

//Calculates cart's total and displays it in checkout summmary.
function updatecheckouttotal(){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];

    let totalcount=0;
    cart.forEach(function(product){
        totalcount+=product.price * product.quantity;
    });

    const total=document.getElementById("checkouttotal");
    const final=document.getElementById("finaltotal");

    if (total) total.textContent="Rs." + totalcount.toFixed(2);
    if (final) final.textContent="Rs." + totalcount.toFixed(2);
}

displaycheckout();

//Validates the form which calculates the order total, saves the order
//records the order, clears the cart and redirects to order confirmation page.
document.getElementById("checkoutform")?.addEventListener("submit",function(e){
    e.preventDefault();

    const payment=document.querySelector('input[name="payment"]:checked');
    const fullname=document.getElementById("fullname").value.trim();
    const email=document.getElementById("checkoutemail").value.trim();
    const address=document.getElementById("address").value.trim();

    if (!fullname || !email || !address){
        alert("Please fill in all fields.");
        return;
    }

    if (!payment){
        alert("Please select a payment method.");
        return;
    }

    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length===0){
        alert("Your cart is empty.");
        return;
    }

    let total=0;
    cart.forEach(function(item){
        total+=item.price*item.quantity;
    });

    const order={
        orderid:Math.floor(100000+Math.random()*900000),
        fullname:fullname,
        email:email,
        address:address,
        payment:payment.value,
        items:cart,
        total:total,
        date:new Date().toISOString()
    };

    let orderhistory=JSON.parse(localStorage.getItem("orderhistory")) || [];
    orderhistory.push(order);
    localStorage.setItem("orderhistory",JSON.stringify(orderhistory));

    localStorage.setItem("lastorderid",order.orderid);

    localStorage.removeItem("cart");
    window.location.href="orderconfirmation.html";
});


//========== ORDER CONFIRMATION PAGE ==========//

//Displays the order number saved during checkout or falls to dashes if none found.
const orderid=document.getElementById("orderid");
if (orderid){
    orderid.textContent=localStorage.getItem("lastorderid") || "-------";
}


//=============== WISHLIST PAGE ==============//

//Saves a product to wishlist (Interested / Not interested/ Owned) to localStorage.
function savewishlist(productId,value){
    let wishliststatus=JSON.parse(localStorage.getItem("wishliststatus")) || {};
    wishliststatus[productId]=value;
    localStorage.setItem("wishliststatus",JSON.stringify(wishliststatus));
}

//Removes a product from wishlist.
function removefromwishlist(productId){
    let wishlist=JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist=wishlist.filter(item => item.id !==productId);
    localStorage.setItem("wishlist",JSON.stringify(wishlist));
    displaywishlist();
}

//Listens to the radio button changes and saves the status for the selected product.
document.addEventListener("change",function(e){
    if (e.target.matches(".statusoptions input[type='radio']")){
        const card=e.target.closest(".wishlistcard");
        savewishlist(card.dataset.id,e.target.value);
    }
});

displaywishlist();

//Reads the wishlist status from localStorage and build a card
//for each product with its price,image and status.
function displaywishlist(){
    const container=document.getElementById("wishlistitems");
    if (!container)return;

    let wishlist=JSON.parse(localStorage.getItem("wishlist")) || [];
    let status=JSON.parse(localStorage.getItem("wishliststatus")) || {};

    if (wishlist.length===0){
        container.innerHTML="<p>Your wishlist is empty.</p>";
        return;
    }

    container.innerHTML="";

    wishlist.forEach(function(product){
        const savedstatus=status[product.id] || "";

        container.innerHTML+=`
            <div class="wishlistcard" data-id="${product.id}">
                <img src="${getproductimage(product)}" alt="${product.name}"/>
                <h2>${product.name}</h2>
                <p>Rs.${product.price}</p>
                <fieldset>
                    <legend class="visuallyhidden">Options:</legend>
                    <div class="statusoptions">
                        <label>
                            <input type="radio" name="status${product.id}" value="interested"
                                ${savedstatus ==="interested" ? "checked":""}>
                                Interested
                        </label>
                        <label>
                            <input type="radio" name="status${product.id}" value="notinterested"
                                ${savedstatus ==="notinterested" ? "checked":""}>
                                Not Interested
                        </label>
                        <label>
                            <input type="radio" name="status${product.id}" value="owned"
                                    ${savedstatus ==="owned" ? "checked":""}>
                            Owned
                        </label>
                    </div>
                </fieldset>
                <button class="removebtn" onclick="removefromwishlist('${product.id}')">Remove</button>
            </div>

        `;
    });
}

//Moves the products from wishlist to cart while merging quantities if 
//is already there and redirects to cart page.
document.getElementById("wishlisttocart")?.addEventListener("click",function(){
    let wishlist=JSON.parse(localStorage.getItem("wishlist")) || [];
    let cart=JSON.parse(localStorage.getItem("cart")) || [];

    if (wishlist.length===0){
        alert("Your wishlist is empty!");
        return;
    }

    wishlist.forEach(function(product){
        const existitem=cart.find(item => item.id === product.id);

        if (existitem) {
            existitem.quantity++;
        }else{
            cart.push({
                id:product.id,
                name:product.name,
                price:product.price,
                image:product.image,
                quantity:1
            });
        }
    });

    localStorage.setItem("cart",JSON.stringify(cart));
    alert("Wishlist items added to cart!");
    window.location.href="cart.html";
});

//Takes user back to the products page.
document.getElementById("continueshop")?.addEventListener("click",function(){
    window.location.href="products.html";
});


//=============== FEEDBACK PAGE ==============//

//Validates name,email,message and saves to localStorage while giving the user a 
//confirmation message and clear the form.
document.getElementById("fdform")?.addEventListener("submit",function(e){
    e.preventDefault();

    const nameholder=document.getElementById("name").value.trim();
    const emailholder=document.getElementById("feedbackemail").value.trim();
    const messageholder=document.getElementById("message").value.trim();
    const emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/


    if (!nameholder || !emailholder || !messageholder){
        alert("Please fill in all fields.");
        return;
    }

    
    if (!emailpattern.test(emailholder)){
        alert("Please enter a valid email.");
        return;
    }

    let feedback=JSON.parse(localStorage.getItem("feedback")) || [];
    feedback.push({
        name:nameholder,
        email:emailholder,
        message:messageholder,
        date:new Date().toISOString()
    });
    localStorage.setItem("feedback",JSON.stringify(feedback));

    const sucess=document.getElementById("feedbacksucess");
    if (sucess)sucess.style.display="block";

    this.reset()
});

//Toggles each FAQ answer open/closed when the question is clicked.
document.querySelectorAll(".faqanswer").forEach(function(button){
    button.addEventListener("click",function(){
        this.closest(".faqitem").classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded",function(){
    document.querySelectorAll(".faqquestion").forEach(function(button){
        button.addEventListener("click",function(){
            this.closest(".faqitem").classList.toggle("active");
        });
    });
});


//============= SCROLL REVEAL ANIMATION =======// (every page)

//Fades/slides the view when user scrolls.
//This adds revealonscroll to any HTML element to apply this effect.
document.addEventListener("DOMContentLoaded",function(){

    const reveal=document.querySelectorAll(".revealonscroll");

    const revealobserve=new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if (entry.isIntersecting){
                entry.target.classList.add("visible");
            }
        });
    });

    reveal.forEach(function(item){
        revealobserve.observe(item);
    });
});



//============ PWA / SERVICE WORKER ==========// (every page)


//Registers the worker so the site can work offline/ installed as an app.
if ("serviceWorker" in navigator){
    window.addEventListener("load",function(){
        navigator.serviceWorker.register("service-worker.js")
            .then(function(){
                console.log("Service Worker Registered");
            })
            .catch(function(err){
                console.log("Service Worker registration failed",err);
            });
    });
}