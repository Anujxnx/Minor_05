export interface FeatureCardItem {
  id: string
  title: string
  tagline: string
  description: string
  iconName: string
  phase: string
  category: string
}

export interface HowItWorksStep {
  stepNumber: string
  title: string
  subtitle: string
  description: string
  details: string[]
  icon: string
}
