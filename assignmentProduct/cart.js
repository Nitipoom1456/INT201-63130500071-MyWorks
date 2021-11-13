
let cart;
let numCart = document.querySelector("#numCart");
let localStorage = window.localStorage;

if(JSON.parse(localStorage.getItem('cart'))===null){
    cart = [];
    numProductInCart();
}else{
    cart = JSON.parse(localStorage.getItem('cart'));
    numProductInCart();
}
// cart = JSON.parse(localStorage.getItem('cart'));


//cool button but cannot do
// let cartBtn = document.getElementById("cart");
// cartBtn.innerHTML = `<a class="btn btn-dark position-relative"><i class="fas fa-shopping-cart"></i> Cart<span class="cart-header position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span></a>`;

let cartIcon = document.getElementById('cartIcon');
cartIcon.addEventListener('click',() => {
    // cart = JSON.parse(localStorage.getItem('cart'));
    if(cart.length == 0){
        alert('no item in cart!!');
    }else{
        let textInfo = '';
        for (let i = 0; i < cart.length; i++) {
        textInfo += `id:${cart[i].id} qty:${cart[i].qty}
`;
        }
        alert(textInfo);
    }
});


export function addProductToCart(e) {
    let Pid = e.target.id
    let exist = false;
    if(cart.length==0){ //ของชิ้นแรก เพิ่มแน่นอน
        cart.push({id:Pid,qty:1});
    }
    else{
        for(let c of cart){ //เช็คว่า id นี้มีในตะกร้าแล้วหรือยัง
            if(Pid==c.id){ // ถ้ามี เพิ่มจำนวน
                c.qty +=1;
                exist = true;
            }
        }
        if(exist==false){// ถ้าไม่มี ให้เพิ่มเป็นของใหม่ในตะกร้า
            cart.push({id:Pid,qty:1});
        }
    }
    console.log(cart)
    localStorage.setItem('cart',JSON.stringify(cart));
    alert("add product " + Pid + " to your cart");
    numProductInCart();
}

export function numProductInCart(){
    let numProductInCart = 0;
    if(cart===null){
        return 0;
    }
    for(let c of cart){
        numProductInCart += c.qty;
    }
    numCart.innerHTML = numProductInCart
    return numProductInCart;
}

const trashButton = document.querySelector('#trash');
trashButton.addEventListener('click',emptyCart)

function emptyCart(){ //ล้างตะกร้า ทำให้ array ที่เก็บข้อมูลกลายเป็น array เปล่าๆ
    if(numProductInCart() === 0){
        alert('now your cart is empty');
    }else{
        cart = [];
        localStorage.clear();
        numProductInCart(); // เรียก function เพื่อให้ update จำนวนข้อมูลในตะกร้าสินค้า
        alert('empty your cart?') // แจ้ง alert ให้กับ user
    }
}