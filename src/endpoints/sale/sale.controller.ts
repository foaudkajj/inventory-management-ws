import {Controller} from '@nestjs/common';
import {SaleService} from './sale.service';

@Controller('api/Sales')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}
}
