export enum Gender {
  Male = 'Male',
  Female = 'Female',
}

export enum Species {
  Alien = 'Alien',
  Human = 'Human',
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: Species | string;
  type: unknown;
  gender: Gender | string;
  image: string;
  created: Date | string;
}