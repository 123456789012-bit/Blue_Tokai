import { Estate } from '../types/estate';

export const estates: Estate[] = [
  {
    id: 'chikmagalur',
    name: 'Chikmagalur Estate',
    region: 'Karnataka',
    location: 'Chikmagalur, Karnataka',
    altitude: '1,200 - 1,400 masl',
    processing: 'Washed & Natural',
    flavorNotes: ['Chocolate', 'Caramel', 'Citrus', 'Floral'],
    signatureBrews: ['Attikan Estate', 'Sunkada Estate'],
    coordinates: { x: 225, y: 720 }
  },
  {
    id: 'coorg',
    name: 'Coorg Estate',
    region: 'Karnataka',
    location: 'Coorg, Karnataka',
    altitude: '900 - 1,200 masl',
    processing: 'Honey & Washed',
    flavorNotes: ['Berries', 'Wine', 'Dark Chocolate', 'Spice'],
    signatureBrews: ['Thogarihunkal Estate', 'Ratnagiri Estate'],
    coordinates: { x: 240, y: 750 }
  },
  {
    id: 'araku',
    name: 'Araku Valley',
    region: 'Andhra Pradesh',
    location: 'Araku Valley, Andhra Pradesh',
    altitude: '900 - 1,100 masl',
    processing: 'Natural',
    flavorNotes: ['Tropical Fruit', 'Honey', 'Nuts', 'Cocoa'],
    signatureBrews: ['Araku Single Origin'],
    coordinates: { x: 400, y: 620 }
  },
  {
    id: 'wayanad',
    name: 'Wayanad Estate',
    region: 'Kerala',
    location: 'Wayanad, Kerala',
    altitude: '700 - 1,000 masl',
    processing: 'Washed',
    flavorNotes: ['Butter', 'Caramel', 'Citrus', 'Clean'],
    signatureBrews: ['Wayanad Single Origin'],
    coordinates: { x: 230, y: 780 }
  },
  {
    id: 'biligiris',
    name: 'Biligiri Rangana Hills',
    region: 'Karnataka',
    location: 'BR Hills, Karnataka',
    altitude: '1,000 - 1,300 masl',
    processing: 'Natural & Honey',
    flavorNotes: ['Strawberry', 'Vanilla', 'Caramel', 'Smooth'],
    signatureBrews: ['BR Hills Estate'],
    coordinates: { x: 270, y: 770 }
  },
  {
    id: 'shevaroys',
    name: 'Shevaroy Hills',
    region: 'Tamil Nadu',
    location: 'Yercaud, Tamil Nadu',
    altitude: '1,200 - 1,500 masl',
    processing: 'Washed',
    flavorNotes: ['Jasmine', 'Lemon', 'Green Apple', 'Tea-like'],
    signatureBrews: ['Shevaroy Estate'],
    coordinates: { x: 310, y: 765 }
  }
];