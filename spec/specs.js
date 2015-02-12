describe("scrabbleScore", function() {
  it("returns score for 'a'", function() {
    expect(scrabbleScore("A")).to.equal(1)
  });

  it("returns correct score for longer words", function() {
    expect(scrabbleScore("cat")).to.equal(5)
  });
});
