/**
 * Interface for the 'Boiler' data
 */
export interface IBoilerEntity {
  land: string| null;
  approach: string| null;
  framework: string | null;
}

export interface IVersionEntity {
  [key: string]: string;
}
