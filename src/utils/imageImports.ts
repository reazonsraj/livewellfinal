// This file centralizes all image imports
import communitySupport from '@images/community-support.jpg'
import dailyLife from '@images/daily-life.jpg'
import heroBackground from '@images/hero-bg.jpg'
import householdTasks from '@images/household-tasks.jpg'
import socialActivities from '@images/social-activities.jpg'
import travelFreedom from '@images/travel-freedom.jpg'

export const images = {
  communitySupport,
  dailyLife,
  heroBackground,
  householdTasks,
  socialActivities,
  travelFreedom,
} as const

export type ImageKey = keyof typeof images