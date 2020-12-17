function action(n) {
    if (n >= 100 && n <=200) {
        return ("Liczba znajduje się w przedziale")
    } else {
        return ("Liczba nie znajduje się w przedziale")
    }
}

console.log(action(10));
console.log(action(150));
console.log(action(299999));