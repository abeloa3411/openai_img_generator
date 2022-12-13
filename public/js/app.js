function onSubmit(e) {
  e.preventDefault();

  const prompt = document.getElementById("prompt").value;
  const size = document.getElementById("size").value;

  if (!prompt) {
    alert("Enter a description");
    return;
  }

  generateImage(prompt, size);
}

async function generateImage(prompt, size) {
  try {
    showSpinner();

    document.getElementById("prompt").value = "";

    const response = await fetch("/openai/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt, size }),
    });

    if (!response.ok) {
      removeSpinner();
      throw new Error("Image could not be generated");
    }

    const data = await response.json();

    document.querySelector("#image").src = data;
    removeSpinner();
  } catch (error) {
    console.log(error.message);
  }
}

function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}
function removeSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}

document.querySelector("#form").addEventListener("submit", onSubmit);
