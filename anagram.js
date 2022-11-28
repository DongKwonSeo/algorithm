{
  function Anagram(t1, t2) {
    if (t1.length !== t2.length) {
      return false;
    }

    const lookup = {};

    for (let i = 0; i < t1.length; i++) {
      const letter = t1[i];
      lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    }

    for (let i = 0; i < t2.length; i++) {
      const letter = t2[i];
      // console.log(letter, "letterletter");
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
    return true;
  }

  // Anagram("azz", "azz");

  console.log(Anagram("azz", "azz"), "zmzmzmzm");
}
