// ── camera.js ────────────────────────────────────────────────
let stream = null;

export function initCamera(onPhotoReady) {
  const cameraBtn = document.getElementById('btn-camera');
  const uploadBtn = document.getElementById('btn-upload');
  const captureBtn = document.getElementById('btn-capture');
  const fileInput  = document.getElementById('photo-file-input');
  const preview    = document.getElementById('photo-preview');
  const placeholder = document.getElementById('photo-placeholder');

  if (cameraBtn) cameraBtn.addEventListener('click', () => startCamera(preview, placeholder, captureBtn));
  if (uploadBtn) uploadBtn.addEventListener('click', () => fileInput && fileInput.click());
  if (captureBtn) captureBtn.addEventListener('click', () => capturePhoto(preview, placeholder, captureBtn, onPhotoReady));
  if (fileInput)  fileInput.addEventListener('change', (e) => handleFileUpload(e, preview, placeholder, onPhotoReady));
}

async function startCamera(preview, placeholder, captureBtn) {
  try {
    if (stream) stopCamera();
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false });
    // Replace img with video
    const videoEl = document.createElement('video');
    videoEl.id = 'camera-video';
    videoEl.srcObject = stream;
    videoEl.autoplay = true;
    videoEl.playsInline = true;
    videoEl.style.cssText = 'width:100%;height:100%;object-fit:cover;';
    preview.innerHTML = '';
    preview.appendChild(videoEl);
    if (placeholder) placeholder.style.display = 'none';
    if (captureBtn) { captureBtn.style.display = 'flex'; captureBtn.textContent = '📸 Capture Photo'; }
    showToast('📷 Camera is live! Click Capture to take your photo.', 'info');
  } catch (err) {
    showToast('❌ Camera access denied. Please allow camera permission.', 'error');
  }
}

function capturePhoto(preview, placeholder, captureBtn, onPhotoReady) {
  const video = document.getElementById('camera-video');
  if (!video) return;
  const canvas = document.createElement('canvas');
  canvas.width  = video.videoWidth  || 640;
  canvas.height = video.videoHeight || 480;
  canvas.getContext('2d').drawImage(video, 0, 0);
  const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
  showPhotoPreview(dataUrl, preview, placeholder, captureBtn);
  stopCamera();
  if (onPhotoReady) onPhotoReady(dataUrl);
}

function handleFileUpload(e, preview, placeholder, onPhotoReady) {
  const file = e.target.files[0];
  if (!file || !file.type.startsWith('image/')) {
    showToast('⚠️ Please select a valid image file.'); return;
  }
  const reader = new FileReader();
  reader.onload = (ev) => {
    showPhotoPreview(ev.target.result, preview, placeholder, null);
    if (onPhotoReady) onPhotoReady(ev.target.result);
  };
  reader.readAsDataURL(file);
}

function showPhotoPreview(src, preview, placeholder, captureBtn) {
  preview.innerHTML = '';
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Your photo';
  img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
  preview.appendChild(img);
  if (placeholder) placeholder.style.display = 'none';
  if (captureBtn) captureBtn.style.display = 'none';
  showToast('✨ Photo ready! Click "Get Recommendations" to style you.');
}

function stopCamera() {
  if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null; }
}

function showToast(msg, type='info') {
  window.dispatchEvent(new CustomEvent('sz:toast', { detail: { msg, type } }));
}
