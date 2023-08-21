
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
}



// apply coupon code

const couponInput = document.getElementById('couponCode');
const applyCouponBtn = document.getElementById('applyCoupon');
const totalPriceInfo = document.getElementById('totalPriceInfo');
const discountPercentage = document.getElementById('discountPercentage');
const discountedPrice = document.getElementById('discountedPrice');
const validCoupon = 'SUMMER2023';
const couponDiscount = 0.2;

applyCouponBtn.addEventListener('click', () => {
  const enteredCoupon = couponInput.value;

  if (enteredCoupon === validCoupon) {
    const originalPrice = 100;
    const discountAmount = originalPrice * couponDiscount;
    const newPrice = originalPrice - discountAmount;

    totalPriceInfo.textContent = `Total Price: $${originalPrice.toFixed(2)}`;
    discountPercentage.textContent = `Discount: ${couponDiscount * 100}%`;
    discountedPrice.textContent = `Discounted Price: $${newPrice.toFixed(2)}`;
  } else {
    totalPriceInfo.textContent = '';
    discountPercentage.textContent = 'Invalid coupon';
    discountedPrice.textContent = '';
  }
});








