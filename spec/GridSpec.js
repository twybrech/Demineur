describe("Grid", function() {
  // var player;
  // var song;

  beforeEach(function() {
    // player = new Player();
    // song = new Song();
  });

  it("should not be empty", function() {

    expect(Grid).toBeDefined();
    // player.play(song);
    // expect(player.currentlyPlayingSong).toEqual(song);
    //
    // //demonstrates use of custom matcher
    // expect(player).toBePlaying(song);
  });

  it("Nombre bombes ok", function() {

    expect(Grid).nbBombs;
  });

  it("Nombre drapeaux = nombre bombes", function() {

    expect(Grid.flags == Grid.bombs);
  });

});
