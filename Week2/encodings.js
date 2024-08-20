//UInt8array to ascii

function bytesToAscii(byteArray) {
    return new TextDecoder().decode(byteArray);
  }
  
  // Example usage:
  const bytes = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
  const asciiString = bytesToAscii(bytes);
  console.log(asciiString); // Output: "Hello"

  
//ascii to UInt8array
  function asciiToBytes(asciiString) {
  return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}

// Example usage:
const ascii = "Hello";
const byteArray = asciiToBytes(ascii);
console.log(byteArray); // Output: Uint8Array(5) [72, 101, 108, 108, 111]

//ascii to Bytes

function asciiToBytes(asciiString) {
    const arr = [];
    for (let i = 0; i < asciiString.length; i++) {
        const char = asciiString[i]; 
        arr.push(char.charCodeAt(0))
    }
    return new Uint8Array(arr);
}

//Example Usage:
const asci = "Hello"; // Had to change variable
const byteAray = asciiToBytes(asci);  // Had to change variable
console.log(byteAray); // Output UInt8array

  



  