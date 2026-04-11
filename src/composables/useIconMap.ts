import type { Component } from 'vue'
import {
  Home, Building2, Map, FileText, Ruler, TrendingUp, Target,
  Shield, Clock, Award, Sparkles, Headphones, BadgeCheck, Zap,
  Users, Globe, Scissors, Trophy, Calendar, Star, Phone, CheckCircle2,
  MapPin, Wrench,
} from 'lucide-vue-next'

const iconMap: Record<string, Component> = {
  Home, Building2, Map, FileText, Ruler, TrendingUp, Target,
  Shield, Clock, Award, Sparkles, Headphones, BadgeCheck, Zap,
  Users, Globe, Scissors, Trophy, Calendar, Star, Phone, CheckCircle2,
  MapPin, Wrench,
}

export function useIconMap() {
  return {
    getIcon(name: string): Component {
      return iconMap[name] ?? Sparkles
    },
  }
}
