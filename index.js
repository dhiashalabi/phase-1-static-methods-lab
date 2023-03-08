class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string) {
    let exceptionWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = string.split(' ');
    let titleizedWords = words.map(function (word, index) {
      if (index === 0) {
        return Formatter.capitalize(word);
      } else {
        if (exceptionWords.includes(word)) {
          return word;
        } else {
          return Formatter.capitalize(word);
        }
      }
    });
    return titleizedWords.join(' ');
  }
}