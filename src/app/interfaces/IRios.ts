
export interface IRios {
  concello: string;
  dataLocal: string;
  dataUTC: string;
  ide: number;
  latitude: string;
  listaMedidas: ListaMedida[];
  lonxitude: string;
  nomeEstacion: string;
  provincia: string;
}
export interface ListaMedida {
  codParametro: number;
  codValidacion: number;
  parametro: string;
  unidade: string;
  valor: number;
}