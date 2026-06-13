// ============================================================
//  LOCAL STORAGE SERVICE
// ============================================================

const STORAGE_PREFIX = 'styliosenz_';

/**
 * Save data to localStorage
 */
export function saveData(key, data) {
  try {
    const storageKey = `${STORAGE_PREFIX}${key}`;
    localStorage.setItem(storageKey, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error(`Error saving ${key}:`, error);
    return false;
  }
}

/**
 * Get data from localStorage
 */
export function getData(key, defaultValue = null) {
  try {
    const storageKey = `${STORAGE_PREFIX}${key}`;
    const data = localStorage.getItem(storageKey);
    return data ? JSON.parse(data) : defaultValue;
  } catch (error) {
    console.error(`Error retrieving ${key}:`, error);
    return defaultValue;
  }
}

/**
 * Remove data from localStorage
 */
export function removeData(key) {
  try {
    const storageKey = `${STORAGE_PREFIX}${key}`;
    localStorage.removeItem(storageKey);
    return true;
  } catch (error) {
    console.error(`Error removing ${key}:`, error);
    return false;
  }
}

/**
 * Clear all styliosenz data
 */
export function clearAllData() {
  try {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(STORAGE_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
    return true;
  } catch (error) {
    console.error('Error clearing data:', error);
    return false;
  }
}

/**
 * Save user profile
 */
export function saveUserProfile(profile) {
  return saveData('userProfile', profile);
}

/**
 * Get user profile
 */
export function getUserProfile() {
  return getData('userProfile', null);
}

/**
 * Save user preferences (theme, settings, etc.)
 */
export function savePreferences(preferences) {
  return saveData('preferences', preferences);
}

/**
 * Get user preferences
 */
export function getPreferences() {
  return getData('preferences', { theme: 'dark' });
}
