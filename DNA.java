public class DNA {
 // Will find proteins in strands of DNA.
  public static void main(String[] args) {
    String dna1 = "ATGCGATACGCTTGA";
    String dna2 = "ATGCGATACGTGA";
    String dna3 =  "ATTAATATGTACTGA";
    String dna = dna1;

    int proStart = dna.indexOf("ATG");
    int proStop = dna.indexOf("TGA");

    if (proStart != -1 && proStop != -1 && (proStop - proStart) % 3 == 0){
      String protein = dna.substring(proStart,proStop+3);
      System.out.println("Protein: " + protein);
    }else{
      System.out.println("NO PROTEIN!");
    }

    System.out.println(dna.length());
    System.out.println("Start: " + proStart);
    System.out.println("Stop: " + proStop);





  }


}
