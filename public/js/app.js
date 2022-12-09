function onSubmit(e) {
  e.preventDefault();

  const prompt = document.getElementById("prompt").value;
  const size = document.getElementById("size").value;

  if (!prompt) {
    alert("Enter a description");
    return;
  }
  console.log(prompt, size);
}

document.querySelector("#form").addEventListener("submit", onSubmit);
