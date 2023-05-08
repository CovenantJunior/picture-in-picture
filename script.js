// Get video element
const _v = document.getElementById('video');
// Get button element
const btn = document.getElementById('button');

// A prompt to select media stream, pass to video element, and then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    _v.srcObject = mediaStream;
    _v.onloadedmetadata = () => {
      _v.play();
    }
  } catch (error) {
    console.info(error);
  }
}

// Click event listener - undisbales button first, request PIP and then disables
btn.addEventListener('click', async () => {
  btn.disabled = true;
  await _v.requestPictureInPicture();
  btn.disabled = false;
})

selectMediaStream();