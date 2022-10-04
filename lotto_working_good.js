/*Author - Zbyszek Kaczmarek*/

document.getElementById("demo").onclick = function () {
  losowanie();
};

function losowanie() {
  const set = new Set();
  for (i = 1; i <= 5; i++) {
    set.add(Math.floor(Math.random(1) * 49) + 1);
  }
  console.log(set.size); //dla podgladu
  do {
    set.add(Math.floor(Math.random(1) * 49) + 1);
    console.log(set); //dla podgladu
  } while (set.size <= 5);

  let zbior = Array.from(set);
  let segregacja = zbior.sort(function (a, b) {
    return a - b;
  }); //sortowanie od najmniejszej do najwiekszej
  console.log(`Wylosowano ${zbior.length} cyfr: `); //dla podgladu
  console.log(zbior); //zostawic tylko to dla "gracza"
  document.getElementById("p_wynik").innerHTML =
    zbior[0] +
    "<br />" +
    zbior[1] +
    "<br />" +
    zbior[2] +
    "<br />" +
    zbior[3] +
    "<br />" +
    zbior[4] +
    "<br />" +
    zbior[5];
}
//losowanie();
