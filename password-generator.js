const generator=require("generate-password")

let password= generator.generate({
    length:10,
    numbers:true,
    Symbol: true,
    uppercase:true,
    excludeSimilarCharacters:true,
});
console.log(password)