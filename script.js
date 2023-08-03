function volume_sphere(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the radius input field
  const radius = document.getElementById("radius").value;

  // Check if the input value is a valid number
  if (!isNaN(radius) && radius !== "") {
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Set the calculated volume in the volume input field
    document.getElementById("volume").value = volume.toFixed(2);
  }
}

window.onload = function() {
  const form = document.getElementById('MyForm');
  form.onsubmit = volume_sphere;
}
