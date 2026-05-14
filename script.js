const slider = document.getElementById('bentonite-slider');
const additiveValue = document.getElementById('additive-value');
const kValueText = document.getElementById('k-value');
const efficiencyNote = document.getElementById('efficiency-note');
const linerLayer = document.getElementById('liner-layer');

slider.addEventListener('input', function() {
    let val = parseInt(this.value);
    additiveValue.textContent = val;

    // Civil Engineering Logic Update
    if (val === 0) {
        kValueText.textContent = "1.0 × 10⁻⁴ cm/s";
        efficiencyNote.textContent = "High Risk: Fast contaminant transport.";
        efficiencyNote.style.color = "#ff6b6b";
        linerLayer.style.background = "#b08d6a"; // Normal soil color
    } else if (val > 0 && val < 5) {
        kValueText.textContent = "1.0 × 10⁻⁶ cm/s";
        efficiencyNote.textContent = "Inadequate: Voids not fully filled.";
        efficiencyNote.style.color = "#feca57";
    } else if (val >= 5 && val <= 10) {
        kValueText.textContent = "≤ 1.0 × 10⁻⁷ cm/s";
        efficiencyNote.textContent = "Optimum Efficiency: Highly impermeable liner.";
        efficiencyNote.style.color = "#1dd1a1";
        linerLayer.style.background = "#8d7053"; // Darker, denser soil
    } else {
        kValueText.textContent = "1.0 × 10⁻⁸ cm/s";
        efficiencyNote.textContent = "Uneconomical: Risk of desiccation cracking.";
        efficiencyNote.style.color = "#ff9f43";
    }
});

// Rain animation logic would go here (e.g., using Canvas API or creating DOM elements that drop down the cross-section)
document.getElementById('btn-rain').addEventListener('click', () => {
    alert("Rain sequence initiated! (Integrate particle animation here)");
});
