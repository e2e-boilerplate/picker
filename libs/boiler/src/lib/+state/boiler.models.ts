/**
 * Interface for the 'Boiler' data
 */
export interface IBoilerEntity {
  land: string| null;
  approach: string| null;
  framework: string | null;
  javascript: string | null;
  module: string | null;
  bundler: string | null;
  runner: string | null;
  assertion: string | null;
}

export interface IVersionEntity {
  [key: string]: string;
}
