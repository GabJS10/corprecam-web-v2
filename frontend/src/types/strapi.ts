export interface ImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  documentId: string;
  url: string;
  formats?: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
}

export interface Reciclador {
  documentId: string;
  name: string;
  description?: string;
  phone?: string;
  photo?: Image;
}

export interface Microruta {
  documentId: string;
  name: string;
  description: string;
  slug: string;
  recicladores?: Reciclador[];
  MapaCoords?: [number, number][];
}

export interface Macroruta {
  documentId: string;
  name: string;
  description: string;
  slug: string;
  microrutas?: Microruta[];
}
