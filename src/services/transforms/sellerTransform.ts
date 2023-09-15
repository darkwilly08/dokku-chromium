import { SellerDto } from '../../models/dtos/req/SellerDto';
import { Seller } from '../../models/entities/Seller';

const toDto = (seller: Seller): SellerDto => {
  const { id, name, mercadoPagoAccessToken } = seller;

  if (!id) {
    throw new Error('Seller id is missing');
  }

  return {
    id,
    name,
    mercadoPagoAccessToken,
  };
};

export { toDto };
