const calculate = () => {
    const unitsConsumed = document.querySelector('input[name="unitsConsumed"]').value;
    const ratePerUnit = document.querySelector('input[name="ratePerUnit"]').value;

    const totalBill = unitsConsumed * ratePerUnit;

    document.querySelector("#unitsDisplay").innerHTML = unitsConsumed;
    document.querySelector("#rateDisplay").innerHTML = ratePerUnit + 'Rs';
    document.querySelector("#totalBill").innerHTML = totalBill + 'Rs';
};

document.querySelector("button").addEventListener("click", calculate);
