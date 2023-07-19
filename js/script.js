function expenseEntryElement(name,amount) {
    return `<tr>
    <td>${name}</td>
    <td>${amount}</td>
    <td><button class="remove">Remove</button></td>
    </tr>`
}

function addExpenseEntry() {
    const expenseNameInput = $("#expenseNameInput");
    const expenseAmountInput = $("#expenseAmountInput");
    const expenseTable = $("#expenseTable tbody");

    if (expenseNameInput.val().trim() === "" || expenseAmountInput.val().trim() === "") {
        return;
    }


    const expenseEntry = $(expenseEntryElement(expenseNameInput.val(), expenseAmountInput.val()));
    expenseTable.append(expenseEntry);

    expenseNameInput.val("");
    expenseAmountInput.val("");

    expenseEntry.find(".remove").click(function () {
        expenseEntry.remove();
        updateTotalSum();
    });

    updateTotalSum();
}

function calculateTotalSum() {
    let totalSum = 0;
    $("#expenseTable tbody tr").each(function() {
        const expenseAmount = parseFloat($(this).find("td:nth-child(2)").text());
        totalSum += expenseAmount;
    });
    return totalSum;
}

function updateTotalSum() {
    const totalSum = calculateTotalSum();
    $("#sum").text(`${totalSum}`);
}


$(document).ready(function() {
    const inputButton = $("#inputButton");
    inputButton.click(addExpenseEntry);
})



