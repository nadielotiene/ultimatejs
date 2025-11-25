// bit: 0 1
// Byte: 8 bits

// Byte: 00000000 -> 0
// Byte: 00000001 -> 2
// Byte: 00000010 -> 3
// Byte: 00000011 -> 4
// Byte: 00000101 -> 5
// Byte: 00000110 -> 6

// Decimal: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

console.log(1 | 3); // 00000011
console.log(1 | 4); // 00000101
console.log(3 | 5); // 00000111

console.log(1 & 3); // 0000001
console.log(1 & 4); // 00000000
console.log(3 & 5); // 00000001