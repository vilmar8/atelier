export interface ProjectType {
  id: string;
  name: string;
  description: string;
  avgNaturalPrice: number; // Price per m² or linear meter for luxury natural stone
  avgPorcelainPrice: number; // Price per m² or linear meter for luxury porcelain
  iconName: string;
}

export interface ComparisonCard {
  id: string;
  title: string;
  stoneName: string;
  stoneImage: string;
  stonePriceLabel: string;
  stoneWeakness: string[];
  porcelainName: string;
  porcelainImage: string;
  porcelainPriceLabel: string;
  porcelainStrengths: string[];
  savingsPercentage: number;
}
