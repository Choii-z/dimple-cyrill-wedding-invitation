export interface StoryChapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  date: string;
  story: string;
  image: string;
  quote?: string;
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  iconName: string;
  location?: string;
}

export interface EntourageMember {
  role: string;
  names: string[];
}

export interface EntourageCategory {
  category: string;
  members: EntourageMember[];
}

export interface AccommodationOption {
  name: string;
  type: string;
  distance: string;
  address: string;
  priceRange: string;
  contact: string;
  description: string;
  bookingLink?: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: 'all' | 'portraits' | 'romantic' | 'garden' | 'moments';
  aspect: 'tall' | 'wide' | 'square';
}

export interface RsvpEntry {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  attending: boolean;
  guestCount: number;
  guestNames?: string;
  mealPreference?: string;
  dietaryRestrictions?: string;
  songRequest?: string;
  message?: string;
  submittedAt: string;
}

export interface GuestbookMessage {
  id: string;
  author: string;
  relationship: string;
  message: string;
  stamp: string;
  date: string;
  likes: number;
}
