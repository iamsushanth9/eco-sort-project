export interface PlasticItem {
  id: string;
  type: PlasticType;
  recyclable: boolean;
  image: string;
  suggestions: string[];
}

export enum PlasticType {
  PET = 'PET (Polyethylene Terephthalate)',
  HDPE = 'HDPE (High-Density Polyethylene)',
  PVC = 'PVC (Polyvinyl Chloride)',
  LDPE = 'LDPE (Low-Density Polyethylene)',
  PP = 'PP (Polypropylene)',
  PS = 'PS (Polystyrene)',
  OTHER = 'Other Plastics',
  
  UNKNOWN = 'Unknown'
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export interface UploadContextType {
  file: File | null;
  preview: string | null;
  isAnalyzing: boolean;
  result: PlasticItem | null;
  setFile: (file: File | null) => void;
  setPreview: (preview: string | null) => void;
  setIsAnalyzing: (isAnalyzing: boolean) => void;
  setResult: (result: PlasticItem | null) => void;
  resetUpload: () => void;
  analyzeImage: () => void;
}

export interface User {
  username: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
}