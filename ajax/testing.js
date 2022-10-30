// unrelated file for testing FCC code, please ignore. 
//function diffArray(arr1, arr2) {
//     const newArr = [];
    // for (var i = 0; i < arr1.length; i++) {
    //     for (var j = 0; i < arr2.length; j++) {
    //         if (arr1[i] !== arr2[j]) {
    //             newArr.push(arr1[i]);
    //         }
    //         break;
    //     }
    // }
    // console.log("why isn't this working", newArr);
    // return newArr;

//     function diff(first, second) {
//         for(var i =0 ; i < first.length; i ++ ) {
//             if(second.indexOf(first[i] !== -1)) {
//                 newArr.push(first[i]);
//             }
//         }
//     }
//     diff(arr1, arr2);
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// return collection
// .filter(obj => sourceKeys
//                  .every(key => obj.hasOwnProperty(key) &&
//                         obj[key] === source[key]));


//                         function whatIsInAName(collection, source) {
//                             const arr = [];
//                             // Only change code below this line
//                             const value = Object.values(source);
//                              const key = Object.keys(source);
//                             console.log(value);
//                             for(var i = 0; i < collection.length; i++) {
//                             const obj = collection[i];
//                             //  console.log(obj);
//                             //  const check = obj[key];
//                             //  console.log(check)
//                             console.log(value.includes(obj[key]))
//                              if(value.includes(obj[key])) {
//                                arr.push(collection[i]);
//                              }
//                             }
//                           console.log(arr);
//                             // Only change code above this line
//                             return arr;
//                           }
                          
//                           whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

function translatePigLatin(str) {
  let toArr = str.split("");
  if(['a', 'e', 'i', 'o', 'u'].includes(toArr[0])) {
    return str + "way";
  }
  const first = toArr.shift();
  toArr.push(first);
  console.log(toArr.join("").concat("ay"))
  return toArr.join("").concat("ay");
}

translatePigLatin("glove");