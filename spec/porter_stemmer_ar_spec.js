
var stemmer = require('../lib/natural/stemmers/porter_stemmer_ar');


describe('porter_stemmer', function () {
  it('dummy test', function () {
    expect(stemmer.stem("يل؟؟ــــّعب??!؟؟لاــ٠")).toBe("يلعب0");
  });
});
