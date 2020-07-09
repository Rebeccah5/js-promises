setTimeout(function() {
    console.log("first item");
    setTimeout(function() {
        console.log("second item");
        setTimeout(function(){
          console.log("Third item");
          },100);
    }, 1000);
}, 1000);
console.log("finish up");