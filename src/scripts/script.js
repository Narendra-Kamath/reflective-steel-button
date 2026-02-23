document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("webcam-video");
    const playBtn = document.getElementById("play-btn");

    // Request webcam access to drive the reflection effect
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                video.srcObject = stream;
            })
            .catch((err) => {
                console.warn("Webcam access denied or unavailable. The button will fall back to its static metallic texture.", err);
            });
    }

    // Ripple / Click logic (optional)
    playBtn.addEventListener("click", () => {
        // Visual feedback is handled by CSS :active state, 
        // but any JS triggers would go here.
        console.log("Play button clicked!");
    });
});
