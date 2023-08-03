// function volume_sphere() {}

function volume_sphere() {
  // Get the value of the radius input field
  const radius = document.getElementById("radius").value;

  // Check if the input value is a valid number
  if (!isNaN(radius) && radius !== "") {
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Set the calculated volume in the volume input field
    document.getElementById("volume").value = volume.toFixed(2);
  }
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;