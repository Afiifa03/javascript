console.log("looping for");
for (let i = 0; i < 5; i++) {
    console.log ( i+1, "truct");
}

console.log ("looping while");
let s = 0
while (s < 5) {
    console.log(s+1)
    s++;
}

console.log("looping do while");
let f = 0;
do {
    console.log(f+1);
    f++;
} while (f < 5);

console.log("looping for in");
const k = (1, 2, 3);
for (let key in k ) {
    console.log ( key );
}