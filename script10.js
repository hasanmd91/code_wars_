function hero(bullets, dragons) {
  let reminder = bullets % dragons;
  if (reminder == 0) {
    return true;
  } else return false;
}

console.log(hero(10, 5));
