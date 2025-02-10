//1. 주어진 배열을 가지고 다음 질문에 코드를 짜시오
let animals= [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur", 
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum", 
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit", 
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]


//1.어레이에 마지막 아이템 “Zebra” 제거하기
// animals.pop()
// console.log('checking the answer:' + animals)

// 2.주어진 어레이에 “Dog” 추가하기
// animals.push("Dog")
// console.log(animals)

//3. 주어진 어레이에 “Mosquito”,“Mouse”,“Mule” 추가하기
// animals.push('Mosquito','Mouse','Mule')
// console.log(animals)

// 4.해당 어레이에는 "Human"이 있는가?
// let h = animals.includes("Human");
// console.log(h);


// 5.해당 어레이에는 “Cat” 이 있는가?
// let c = animals.includes("Cat")
// console.log(c);
// console.log(animals.indexOf("Cat"));

// 6."Red deer"을 "Deer"로 바꾸시오
// let idx = animals.indexOf("Red deer");
// animals[idx] = "Deer"; 
// console.log(animals[idx]);

// 7."Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
// let idx = animals.indexOf("Spider")

// **복사본에서 잘라난 값과 비교. 
// let com = animals.slice(0,idx).concat(animals.slice(idx+3));
// console.log(com);

// **여기가 7번 질문에 대한 답.
// animals.splice(idx,3);
// console.log(animals);


// 8."Tiger"부터 그 이후의 값을 제거하시오 (Tiger 포함임)

// animals.splice(animals.indexOf("Tiger"))
// console.log(animals);


// 9."B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오
// let idx1 = animals.indexOf("Baboon")
// let idx2 = animals.indexOf("Bison")
// let newarr = animals.slice(idx1, idx2+1 )
// console.log(newarr);