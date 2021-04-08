public class Continents {
  int continent;

  public Continents(int conti){
    continent = conti;
  }

  public void contCheck(){
    switch (continent) {
      case 1:
        System.out.println("North America: Mexico City, Mexico");
        break;
      case 2:
        System.out.println("South America: Sao Paulo, Brazil");
        break;
      case 3:
        System.out.println("Europe: Moscow, Russia");
        break;
      case 4:
        System.out.println("Africa: Lagos, Nigeria");
        break;
      case 5:
        System.out.println("Asia: Shanghai, China");
        break;
      case 6:
        System.out.println("Austrailia: Sydney, Austrailia");
        break;
      case 7:
        System.out.println("Antartica: McMurdo Station, US");
        break;
      default:
        System.out.println("Undefined continent!");
    }
  }

	public static void main(String[] args) {
    // Connect continents to cities using integers.
    Continents test1 = new Continents(4);
    test1.contCheck();
    Continents test2 = new Continents(242);
    test2.contCheck();


		

	}
}
