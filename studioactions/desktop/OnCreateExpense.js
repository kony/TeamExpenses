function OnCreateExpense(eventobject) {
    return AS_Button_h8438d2e270b47419308e54401d66766(eventobject);
}

function AS_Button_h8438d2e270b47419308e54401d66766(eventobject) {
    frmAddExpenseKA.show();
    frmAddExpenseKA.tbxAmount.text = "";
    frmAddExpenseKA.tbxDescriptionNew.text = "";
    frmAddExpenseKA.tbxExpenseName.text = "";
}