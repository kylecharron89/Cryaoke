function handleFile(file) {
  if (file && file.name.endsWith('.txt')) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('lyrics').innerText = e.target.result;
    };
    reader.readAsText(file);
  } else {
    alert("Please upload a .txt file.");
  }
}

function dropFile(event) {
  event.preventDefault();
  if (event.dataTransfer.files.length > 0) {
    handleFile(event.dataTransfer.files[0]);
  }
}
