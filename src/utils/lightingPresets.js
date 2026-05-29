/**
 * Pre-configured cinematic lighting setups
 */
export const lightingPresets = {
  studio: {
    ambientIntensity: 0.2,
    directionalIntensity: 2.0,
    mainColor: '#ffffff',
    castShadow: true,
  },
  neonCyberpunk: {
    ambientIntensity: 0.4,
    directionalIntensity: 1.5,
    mainColor: '#ff0055',
    secondaryColor: '#00e5ff',
    castShadow: true,
  },
  highContrast: {
    ambientIntensity: 0.05,
    directionalIntensity: 3.0,
    mainColor: '#f4f4f4',
    castShadow: true,
  }
};

export default lightingPresets;
