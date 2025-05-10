// 1. str.trim()

let msg = "     Hello      ";
console.log(msg);
console.log(msg.trim());


// 2. Upper case and lower case

let str = "HeLlO"
console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());


// 3. Arguments - indexOf

let line = "IloveCoding";
a = line.indexOf("love");
b = line.indexOf("J");
c = line.indexOf("o");
console.log(a);
console.log(b);
console.log(c);


// 4. Mehod Chaining

sentence = "    Hi, I am a coder.   ";
console.log(sentence);
console.log(sentence.toUpperCase().trim());
console.log(sentence.toLowerCase().trim());


// 5. Slice

let sen = "ILoveCoding";
console.log(sen.slice(5));
console.log(sen.slice(1,5));
console.log(sen.slice(-6));
console.log(sen.slice(-6,-3));


// 6. Replace

let rep = "ILoveCoding";
console.log(rep.replace("Love", "Do"));


// 7. Repeat

let repe = " ILoveCoding ";
console.log(repe.repeat(3));


