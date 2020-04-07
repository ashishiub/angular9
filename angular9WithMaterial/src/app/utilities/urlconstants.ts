import { rendererTypeName } from '@angular/compiler';

export class Url {
    public static get baseUrl(): string {return "https://localhost:44361/api";}
    
    public static get depositList(): string {return "/Deposit/DepositList";}
    public static get depositListByQuery(): string {return "/Deposit/DepositListQ";}
    public static get addDeposit(): string {return "/Deposit/AddDeposit";}
    public static get updateDeposit(): string {return "/Deposit/UpdateDeposit";}
    public static get depositById(): string {return "/Deposit/DepositById/";}
    public static get deleteDepositById(): string {return "/Deposit/DeleteDepositById";}
    
    public static get addStudent(): string {return "/Student/AddStudent";}
    public static get studentList(): string {return "/Student/StudentList";}
    public static get studentListByQuery(): string {return "/Student/StudentListF";}
    public static get updateStudent(): string {return "/Student/UpdateStudent";}
    public static get getStudentById(): string {return "/Student/GetStudentById/";}
    public static get getMaleFemaleRatio(): string {return "/Student/GetMaleFemaleRatio/";}
    public static get getEducationYears(): string {return "/Student/GetEducationYears";}
    public static get deleteStudentById(): string {return "/Student/DeleteStudentById";}

    public static APPLICATION_NAME = 'DEV Classroom';
    public static get getCredentials(): string {return "/Login/GetCredentials";}

    public static get addExpense(): string {return "/Expense/AddExpense";}
    public static get expenseList(): string {return "/Expense/ExpenseList";}
}