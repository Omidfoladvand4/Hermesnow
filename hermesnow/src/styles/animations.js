// styles/animations.js
import { keyframes } from 'styled-components'

// ============= انیمیشن‌های ورود =============
export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`

export const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`

export const fadeInDown = keyframes`
  from { opacity: 0; transform: translateY(-30px); }
  to { opacity: 1; transform: translateY(0); }
`

export const fadeInLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`

export const fadeInRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`

export const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`

export const rotateIn = keyframes`
  from { opacity: 0; transform: rotate(-10deg) scale(0.9); }
  to { opacity: 1; transform: rotate(0) scale(1); }
`

// ============= انیمیشن‌های hover و تعامل =============
export const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`

export const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`

export const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
`

export const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`

// ============= انیمیشن‌های درخشش =============
export const glowPulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(229, 9, 20, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(229, 9, 20, 0); }
  100% { box-shadow: 0 0 0 0 rgba(229, 9, 20, 0); }
`

export const borderGlow = keyframes`
  0% { border-color: var(--color-info); box-shadow: 0 0 5px rgba(0, 229, 255, 0.3); }
  50% { border-color: var(--color-accent); box-shadow: 0 0 20px rgba(229, 9, 20, 0.5); }
  100% { border-color: var(--color-info); box-shadow: 0 0 5px rgba(0, 229, 255, 0.3); }
`

export const textGlow = keyframes`
  0% { text-shadow: 0 0 0px var(--color-accent); }
  50% { text-shadow: 0 0 10px var(--color-accent); }
  100% { text-shadow: 0 0 0px var(--color-accent); }
`

// ============= انیمیشن‌های لودینگ =============
export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const shimmer = keyframes`
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
`

export const loadingWave = keyframes`
  0%, 100% { transform: scaleY(0.5); }
  50% { transform: scaleY(1); }
`

// ============= انیمیشن‌های پس‌زمینه =============
export const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

export const spinGlow = keyframes`
  0% { transform: rotate(0deg); opacity: 0; }
  50% { transform: rotate(180deg); opacity: 0.5; }
  100% { transform: rotate(360deg); opacity: 0; }
`

// ============= انیمیشن‌های جدید و خفن =============
export const neonPulse = keyframes`
  0% { text-shadow: 0 0 5px var(--color-info), 0 0 10px var(--color-info); }
  100% { text-shadow: 0 0 20px var(--color-info), 0 0 30px var(--color-info); }
`

export const slideInStagger = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
`

export const zoomIn = keyframes`
  from { opacity: 0; transform: scale(0.5); }
  to { opacity: 1; transform: scale(1); }
`

export const flipIn = keyframes`
  from { opacity: 0; transform: rotateY(90deg); }
  to { opacity: 1; transform: rotateY(0); }
`

export const slideInFromLeft = keyframes`
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
`

export const slideInFromRight = keyframes`
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
`

export const slideInFromTop = keyframes`
  from { opacity: 0; transform: translateY(-50px); }
  to { opacity: 1; transform: translateY(0); }
`

export const slideInFromBottom = keyframes`
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
`