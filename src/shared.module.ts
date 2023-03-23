import { BranchService } from './endpoints/branch/branch.service';
import { BranchRepository } from './endpoints/branch/branch.repository';
import { BranchController } from './endpoints/branch/branch.controller';
import { RoleService } from './endpoints/role/role.service';
import { RoleRepository } from './endpoints/role/role.repository';
import { RoleController } from './endpoints/role/role.controller';
import { MerchantService } from './endpoints/merchant/merchant.service';
import { MerchantRepository } from './endpoints/merchant/merchant.repository';
import { MerchantController } from './endpoints/merchant/merchant.controller';
import { GenericListItemService } from './endpoints/generic-list-item/generic-list-item.service';
import { GenericListItemRepository } from './endpoints/generic-list-item/generic-list-item.repository';
import { GenericListService } from './endpoints/generic-list/generic-list.service';
import { GenericListRepository } from './endpoints/generic-list/generic-list.repository';
import { GenericListController } from './endpoints/generic-list/generic-list.controller';
import { CityService } from './endpoints/city/city.service';
import { CityRepository } from './endpoints/city/city.repository';
import { CityController } from './endpoints/city/city.controller';
import { City } from './models/city.model';
import { CountryService } from './endpoints/country/country.service';
import { CountryRepository } from './endpoints/country/country.repository';
import { CountryController } from './endpoints/country/country.controller';
import { Country } from './models/country.model';
import { PaymentMethodService } from './endpoints/payment-method/payment-method.service';
import { PaymentMethodRepository } from './endpoints/payment-method/payment-method.repository';
import { PaymentMethodController } from './endpoints/payment-method/payment-method.controller';
import { CustomerInfoService } from './endpoints/customer-info/customer-info.service';
import { CustomerInfoRepository } from './endpoints/customer-info/customer-info.repository';
import { CustomerInfoController } from './endpoints/customer-info/customer-info.controller';
import { CustomerInfo, GenericList, GenericListItem, Merchant, PaymentMethod, Branch } from 'src/models';
import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ColorController} from './endpoints/color/color.controller';
import {ColorRepository} from './endpoints/color/color.repository';
import {ColorService} from './endpoints/color/color.service';
import { CurrencyController } from './endpoints/currency/currency.controller';
import { CurrencyRepository } from './endpoints/currency/Currency.repository';
import { CurrencyService } from './endpoints/currency/Currency.service';
import {Color, Currency} from './models';
import { GenericListItemController } from './endpoints/generic-list-item/generic-list-item.controller';
import { Role } from './models/role.model';

@Module({
  imports: [TypeOrmModule.forFeature([Color,Currency,CustomerInfo,PaymentMethod,Country,City,GenericList,GenericListItem,Merchant
  ,Role,Branch])],
  controllers: [ColorController,CurrencyController,CustomerInfoController,PaymentMethodController,
    CountryController,CityController,GenericListController,GenericListItemController,MerchantController,RoleController,BranchController],
  providers: [ColorService, ColorRepository,CurrencyRepository,CurrencyService,CustomerInfoRepository,
    CustomerInfoService,PaymentMethodRepository,PaymentMethodService,CountryRepository,CountryService,
    CityRepository,CityService,GenericListRepository,GenericListService,GenericListItemRepository,GenericListItemService
    ,MerchantRepository,MerchantService,RoleRepository,RoleService,BranchRepository,BranchService],
  exports: [ColorService, ColorRepository,CurrencyRepository,CurrencyService,CustomerInfoRepository,
    CustomerInfoService,PaymentMethodRepository,PaymentMethodService,CountryRepository,CountryService,
    CityRepository,CityService,GenericListRepository,GenericListService,GenericListItemRepository,GenericListItemService
    ,MerchantRepository,MerchantService,RoleRepository,RoleService,BranchRepository,BranchService],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule {}
