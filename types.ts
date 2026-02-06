import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
}

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface StatProps {
  value: string;
  label: string;
}

export interface TimelineStepProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}