export interface Transaction {
  id: String;
  date: Date;
  sender: {
    firstName: String;
    lastName: String;
    dateOfBirth: Date;
    IDNumber: String;
  };
  recipient: {
    firstName: String;
    lastName: String;
    email: String;
    accountNumber: String;
    bank: String;
  };
  amount: Number;
  currencyCd: String;
  Comments: String;
  status: String;
}
