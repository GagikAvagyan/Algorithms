

let array = [66, 88, 100, 40, 115, 78, 65, 62, 35, 126, 20, 56, 110, 95, 26, 47, 56, 80, 45, 65];
let arr;

function createArray(){
   arr = Array.from((array))
}
createArray()

function printInToHtml(){
   $(".BubbleContainer").empty();
   for( let i = 0; i < arr.length; i++){
      $(".BubbleContainer").append(`
         <div class="item" style="height: ${arr[i]}px;"></div>
      `);
   }
}
printInToHtml()

function print() {
   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
         if (arr[j] > arr[j + 1]) {
            let Switch = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = Switch;
            printInToHtml()
         }
      }
      break
   }
}
setInterval(function (){
   print();
}, 250);

$(".bubbleSorting").click(function (){
   createArray();
})

