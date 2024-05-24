
  // write your code here
}
function toCase(text) {
  let u = text.toUpperCase();
  
  // Convert text to lowercase
  let l = text.toLowerCase();

  // Return the combined string
  return `${l}-${u}`;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));

