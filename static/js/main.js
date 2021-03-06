/* External link blank */
function externalLinks() {
  for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
    var b = c[a];
    b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")
    if(b.hostname !== location.hostname){
      c[a].rel = 'nofollow';
    }
  }
};
externalLinks();

