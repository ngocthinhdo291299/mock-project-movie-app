function titleFucntion(string: string, typeOfTitle: string) {
  if (typeOfTitle === "movie-detail" || typeOfTitle === "movie-watch") {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export default titleFucntion;
