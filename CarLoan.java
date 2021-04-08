public class CarLoan {
  int carLoan;
  int loanLength;
  int interestRate;
  int downPayment;

  public CarLoan(int loan, int length, int interestR, int dPayment){
    carLoan = loan;
    loanLength = length;
    interestRate = interestR;
    downPayment = dPayment;
  }
  public void loanPayment(){
    if (loanLength <= 0 || interestRate <= 0){
      System.out.println("Error! You must take out a valid car loan.");
    } else if (downPayment >= carLoan){
      System.out.println("The car can be paid in full");
    } else {
      int remainingBalance = carLoan - downPayment;
      int months = loanLength * 12;
      int monthlyBalance = remainingBalance / months;
      int interest = (monthlyBalance * interestRate) / 100;
      int monthlyPayment = monthlyBalance + interest; 
      System.out.println(monthlyPayment);
    }
  }
 	public static void main(String[] args) {
   CarLoan loan1 = new CarLoan(10000, 3, 5, 2000);
   loan1.loanPayment();

   
	

	}
}
