// ============================================================
//  RECOMMENDATION ENGINE SERVICE
// ============================================================

import { getPaletteByTone } from '../constants/colorPalettes.js';
import { getBodyTypeAdvice } from '../constants/bodyTypes.js';

/**
 * Generate AI recommendations based on user profile
 */
export function generateRecommendationProfile(profile) {
  return {
    userProfile: profile,
    bodyTypeAdvice: getBodyTypeAdvice(profile.bodyType),
    colorPalette: getPaletteByTone(profile.skinTone),
    generatedAt: new Date().toISOString()
  };
}

/**
 * Filter products based on user profile
 */
export function filterRecommendedProducts(products, profile) {
  return products.filter(product => {
    // Match occasion
    if (product.occasion !== profile.occasion) return false;
    
    // Match gender
    if (product.gender !== profile.gender) return false;
    
    // Match body type (if applicable)
    if (product.bodyType && !product.bodyType.includes(profile.bodyType)) {
      return false;
    }
    
    return true;
  });
}

/**
 * Get recommendations by category
 */
export function getRecommendationsByCategory(products, profile, category) {
  const filtered = filterRecommendedProducts(products, profile);
  return filtered.filter(p => p.category === category);
}

/**
 * Score products for relevance
 */
export function scoreProductRelevance(product, profile) {
  let score = 100;
  
  // Boost if matches body type
  if (product.bodyType && product.bodyType.includes(profile.bodyType)) {
    score += 20;
  }
  
  // Factor in rating
  score += (product.rating / 5) * 30;
  
  return score;
}

/**
 * Sort products by relevance
 */
export function sortByRelevance(products, profile) {
  return [...products].sort((a, b) => {
    return scoreProductRelevance(b, profile) - scoreProductRelevance(a, profile);
  });
}

/**
 * Get trending items
 */
export function getTrendingItems(products, limit = 12) {
  return products
    .filter(p => p.rating >= 4.5)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

/**
 * Get featured products
 */
export function getFeaturedProducts(products, limit = 6) {
  return products
    .filter(p => p.featured === true || p.rating >= 4.7)
    .slice(0, limit);
}
