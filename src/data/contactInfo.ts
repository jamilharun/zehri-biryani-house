export interface BranchInfo {
  city: 'Bacolod' | 'Cebu';
  address: string;
  phone: string;
  hours: string;
  mapEmbedUrl?: string;
  googleMapsUrl: string;
  /** Set to false to hide branch from public-facing UI until confirmed */
  isLive: boolean;
}

export const BRANCHES: BranchInfo[] = [
  {
    city: 'Bacolod',
    // TODO: Replace with confirmed street address before going live
    address: '786 Spice Market Road, Cultural District, Bacolod City',
    // TODO: Replace with actual phone number
    phone: '+63 34 XXX XXXX',
    hours: 'Mon – Sun: 11:00 AM – 10:30 PM',
    googleMapsUrl: 'https://maps.google.com',
    isLive: true,
  },
  {
    city: 'Cebu',
    // TODO: Confirm Cebu branch address before enabling
    address: 'Cebu City — address to be confirmed',
    // TODO: Replace with actual phone number
    phone: '+63 32 XXX XXXX',
    hours: 'Mon – Sun: 11:00 AM – 10:30 PM',
    googleMapsUrl: 'https://maps.google.com',
    isLive: false,
  },
];
