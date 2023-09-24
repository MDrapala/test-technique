export type City = {
  datasetid: Datasetid;
  recordid: string;
  fields: Fields;
  geometry?: Geometry;
  record_timestamp: Date;
};

export enum Datasetid {
  LaposteHexasmal = "laposte_hexasmal",
}

export type Fields = {
  nom_de_la_commune: string;
  libelle_d_acheminement: string;
  code_postal: string;
  coordonnees_gps?: number[];
  code_commune_insee: string;
  ligne_5?: string;
};

export type Geometry = {
  type: Type;
  coordinates: number[];
};

export enum Type {
  Point = "Point",
}
