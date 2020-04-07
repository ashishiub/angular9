export interface Expense {
    paymentMethod: string,
    paymentTo: string,
    descriptionOfCharge: string,
    typeOfPayment: string,
    amount: number,
    paymentDate: string,
    oid: string
}

export interface Exp {
    paymentMethod: string,
    paymentTo: string,
    descriptionOfCharge: string,
    typeOfPayment: string,
    amountString: string
}