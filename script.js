
function calculateTotal() {
    // نجيب السعر والكمية
    let price = document.getElementById("price").value;
    let quantity = document.getElementById("quantity").value;

    // نحسب الاجمالي
    let total = price * quantity;

    // نظهر النتيجة
    document.getElementById("total").innerText = "الإجمالي : " + total + " جنيه";
}

