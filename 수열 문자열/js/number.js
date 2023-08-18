const numberInput = document.getElementById('numberInput');
const copyButton = document.getElementById('copyButton');
const numberArray = [];

  numberInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      const enteredValue = parseInt(numberInput.value);
      console.log('입력한 값:', enteredValue);
      numberArray.length = 0;
      for (let i = 1; i <= enteredValue; i++) {
        numberArray.push(i);
      }

      console.log('양의 정수 배열:', numberArray);

      const sum = numberArray.reduce((total, current) => total + current, 0);
      console.log('합:', sum);
    }
  });

  copyButton.addEventListener('click', function() {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = numberArray.join(', '); // Join the array elements with commas
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();
    document.execCommand('copy'); // Copy the selected text to clipboard

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    alert('배열이 복사되었습니다. // 메모장에 붙여넣어서 사용하시면 편합니다 ^_-');
  });