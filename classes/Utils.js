class Utils {
  static dataFormat(date) {
    return (
      date.getData() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear()() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes()
    );
  }
}
