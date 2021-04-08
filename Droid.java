public class Droid{

  int batteryLevel = 100;
  String name;

  public Droid(String droidName){
    name = droidName;
  }

  public String toString(){
    return "Hello, I'm the droid: " + name + "!";
  }

  public void performTask(String task){
    System.out.println(name + " is performing task: " + task + "!"); 
    batteryLevel = batteryLevel - 10;
  }

  public void energyReport(){
    System.out.println(name + " is at " + batteryLevel + " percent!");
  }

  public void energyTransfer(int amount, Droid transferTo){
    batteryLevel -= amount;
    transferTo.batteryLevel += amount;
    
    }


  public static void main(String[] args) {
    Droid droid1 = new Droid("Codey");
    System.out.println(droid1);
    droid1.performTask("Running");
    droid1.energyReport();

    Droid droid2 = new Droid("Jimmy");
    System.out.println(droid2);
    droid2.performTask("dancing");
    droid2.performTask("killing");
    droid2.energyReport();

    droid1.energyTransfer(10, droid2);
    droid1.energyReport();
    droid2.energyReport();



  }
}
