// ============================================================
//  NOTIFICATION/TOAST SERVICE
// ============================================================

/**
 * Show toast notification
 */
export function showToast(message, type = 'info', duration = 4000) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const icon = type === 'error' ? '❌' : 
               type === 'success' ? '✅' : 
               type === 'warning' ? '⚠️' : '✨';
  
  toast.className = `toast anim-fade-in-up ${type}`;
  toast.innerHTML = `<span>${icon}</span> ${message}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('exit');
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

/**
 * Show success toast
 */
export function showSuccess(message) {
  showToast(message, 'success');
}

/**
 * Show error toast
 */
export function showError(message) {
  showToast(message, 'error');
}

/**
 * Show warning toast
 */
export function showWarning(message) {
  showToast(message, 'warning');
}

/**
 * Show info toast
 */
export function showInfo(message) {
  showToast(message, 'info');
}

/**
 * Emit toast event (for cross-module communication)
 */
export function emitToast(message, type = 'info') {
  window.dispatchEvent(new CustomEvent('sz:toast', {
    detail: { msg: message, type }
  }));
}
