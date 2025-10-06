const textInput = document.getElementById("textInput");
const wordCountEl = document.getElementById("wordCount");
const charCountEl = document.getElementById("charCount");

// Convert to UPPERCASE
function toUpper() {
  textInput.value = textInput.value.toUpperCase();
  updateStats();
}

// Convert to lowercase
function toLower() {
  textInput.value = textInput.value.toLowerCase();
  updateStats();
}

// Convert to Title Case
function toTitleCase() {
  const words = textInput.value.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  textInput.value = words.join(" ");
  updateStats();
}

// Remove extra spaces
function removeExtraSpaces() {
  textInput.value = textInput.value.replace(/\s+/g, " ").trim();
  updateStats();
}

// Copy text
function copyText() {
  textInput.select();
  document.execCommand("copy");
  alert("✅ Text copied to clipboard!");
}

// Clear text
function clearText() {
  textInput.value = "";
  updateStats();
}

// Update word & character count
function updateStats() {
  const text = textInput.value.trim();
  wordCountEl.textContent = text.length > 0 ? text.split(/\s+/).length : 0;
  charCountEl.textContent = text.length;
}

// Update stats live
textInput.addEventListener("input", updateStats);
