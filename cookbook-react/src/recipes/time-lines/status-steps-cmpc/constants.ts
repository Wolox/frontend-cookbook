import { StatusType } from './types';

export const statusNames = {
  [StatusType.CREATED]: 'Creado',
  [StatusType.CONFIRMED]: 'Confirmado',
  [StatusType.IN_PRODUCTION]: 'En producción',
  [StatusType.DELIVERY]: 'En despacho',
  [StatusType.DELIVERED]: 'Entregado',
  [StatusType.CLOSED]: 'Finalizado'
};
