export interface Deposit {
    oid: string,
    depositMethod: string,
    depositType: string,
    studentId: string,
    donationBy: string,
    amount: number,
    depositDate: Date,
    amountString: string
}

export interface Dep {
    depositMethod: string,
    depositType: string,
    studentId: string,
    donationBy: string,
    amountString: string
}