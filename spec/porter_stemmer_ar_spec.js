
var stemmer = require('../lib/natural/stemmers/porter_stemmer_ar');


describe('porter_stemmer', function () {
  it('dummy test', function () {
    stemmer.stem("ببباب");
    // expect(stemmer.stem("يل؟؟ــــّعب??!؟؟لاــ٠")).toBe("يلعب0");
  });
});

// describe('porter_stemmer', function () {
//   it('dummy test', function () {
//     let x = function (word, str) {
//       if(word.startsWith(str)){
//         word = word.substring(str.length);
//       }
//       return word;
//     }
//
//     expect(x("maher", "ma")).toBe("her");
//     expect(x("maher", "al")).toBe("maher");
//   });
// });

