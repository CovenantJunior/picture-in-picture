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
      btn.innerHTML = "Start PiP";
    }
  } catch (error) {
    console.info(error);
  }
}

// Click event listener - requests PIP
btn.addEventListener('click', async () => {
  if (_v.srcObject == null || _v.srcObject.active == false) {
    // If PermissionStatus was denied or media stream was turned off, request media stream once more.
    selectMediaStream();
  } else {
    // PermissionStatus granted, pop the PIP man!
    await _v.requestPictureInPicture();
  }
  await _v.requestPictureInPicture();
})

// selectMediaStream();