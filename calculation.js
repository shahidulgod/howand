
let total=0;
function itemNameShow(target){
  const selectedItemContainer= document.getElementById("selectItem");
  const  itemName = target.parentNode.childNodes[1].innerText;
  const li = document.createElement("li");
  li.innerText = itemName;
  selectedItemContainer.appendChild(li);

//  console.log(target.parentNode.childNodes[3].innerText.split(" ")[0]);
 const price =target.parentNode.childNodes[3].innerText.split(" ")[0];
total = parseInt(total) + parseInt(price);
// console.log(total);
document.getElementById("discountInfo").innerText = total;



// const count = itemNameShow.childElementCount;
}



// coupon show state here



// const totalAmountElement = document.getElementById("coupon");
//         const messageElement = document.getElementById("show");

//         const totalAmount = parseInt(totalAmountElement.innerText);
//         if (totalAmount > 200) {
  
//         }

const couponText = document.getElementById("show")
function cheekAndEnableCoupon(price){
  if(total>= 200){
    couponText.style.display = "block"; }
    else{
      couponText.style.display = "block"; 
    }
  }

// apply coupon start here


function applyCouponAndDiscount() {
  const totalAmountElement = document.getElementById("totalp");
  const couponCodeInput = document.getElementById("couponCode");
  const discountInfoElement = document.getElementById("discountInfo");
  const discountPercentageElement = document.getElementById("discountPercentage");
  const discountedPriceElement = document.getElementById("discountedPrice");

  const totalAmount = parseInt(totalAmountElement.innerText);
  const couponCode = couponCodeInput.value;

  if (totalAmount >= 200) {
      if (couponCode === "SELL200") {
          const discount = 0.2 * totalAmount; // 20% discount
          const discountedAmount = totalAmount - discount;

          discountInfoElement.innerText = discountedAmount + "tk";
          discountPercentageElement.innerText = "20%";
          discountedPriceElement.innerText = discountedAmount + "tk";
      } else {
          discountInfoElement.innerText = totalAmount + "tk";
          discountPercentageElement.innerText = "00";
          discountedPriceElement.innerText = totalAmount + "tk";
          alert("Invalid coupon code.");
      }
  } else {
      discountInfoElement.innerText = totalAmount + "tk";
      discountPercentageElement.innerText = "00";
      discountedPriceElement.innerText = totalAmount + "tk";
      alert("Coupon code can only be applied for orders of 200tk or more.");
  }
}



// home btn 

var homeButton = document.getElementById("homeButton");

homeButton.addEventListener("click", function() {
    
    window.location.href = "http://127.0.0.1:5500/index.html";
});












