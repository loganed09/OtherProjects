class Language{

  protected String name;
  protected int numSpeakers;
  protected String regionsSpoken;
  protected String wordOrder;

  Language(String langName, int speakers, String regions, String wdOrder){
    this.name = langName;
    this.numSpeakers = speakers;
    this.regionsSpoken = regions;
    this.wordOrder = wdOrder;
  }

  public void getInfo(){
    System.out.println(this.name + " is spoken by " + this.numSpeakers + " people mainly in " + this.regionsSpoken + ".\nThe language follows the word order: " + this.wordOrder+ ".");
  }

  public static void main(String[] args){
    Language spanish = new Language("Spanish", 3498377, "Spain, Latin, America, and Equatorial Guinea", "subject-verb-object");
    spanish.getInfo();


    Language chontal = new Mayan("Chontal", 36810);
    chontal.getInfo();

    Language chinese = new SinoTibetan("Mandarin Chinese", 515153);
    chinese.getInfo();

    Language nChinese = new SinoTibetan("Burmese", 234242);
    nChinese.getInfo();
  }


}
