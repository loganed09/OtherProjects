import java.util.ArrayList;

class Playlist {
  
  public static void main(String[] args) {
    ArrayList<String> desertIslandPlaylist = new ArrayList<String>();

    desertIslandPlaylist.add("Braincase");
    desertIslandPlaylist.add("String Theory");
    desertIslandPlaylist.add("Wake up");
    desertIslandPlaylist.add("Never change");
    desertIslandPlaylist.add("Entombment of a Machine");
    desertIslandPlaylist.add("Clockwork");

    System.out.println(desertIslandPlaylist);

    System.out.println(desertIslandPlaylist.size());
    System.out.println("\n");
    desertIslandPlaylist.remove("Entombment of a Machine");
    System.out.println(desertIslandPlaylist);
    System.out.println(desertIslandPlaylist.size());

    System.out.println("\n");

    int songA = desertIslandPlaylist.indexOf("Braincase");
    int songB = desertIslandPlaylist.indexOf("String Theory");

    String tempA = "Braincase";
    desertIslandPlaylist.set(songA, "String Theory");
    desertIslandPlaylist.set(songB, tempA);
    System.out.println(desertIslandPlaylist);

   


  }
  
}
