export interface Place {
    place_id: string;
    name: string;
    geometry: {
      location: google.maps.LatLngLiteral;
    };
    photos?: { getUrl: () => string }[];
    formatted_address?: string;
    vicinity?: string;
    rating?: number;
    user_ratings_total?: number;
    opening_hours?: {
      isOpen: () => boolean;
      weekday_text: string[];
    };
    formatted_phone_number?: string;
    website?: string;
  }
  