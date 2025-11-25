export interface Estate {
  id: string;
  name: string;
  region: string;
  location: string;
  altitude: string;
  processing: string;
  flavorNotes: string[];
  signatureBrews: string[];
  coordinates: {
    x: number;
    y: number;
  };
}
