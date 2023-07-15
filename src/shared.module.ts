import { UnitService } from './endpoints/unit/unit.service';
import { UnitRepository } from './endpoints/unit/unit.repository';
import { UnitController } from './endpoints/unit/unit.controller';
import { UserService } from './endpoints/user/user.service';
import { UserRepository } from './endpoints/user/user.repository';
import { UserController } from './endpoints/user/user.controller';
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
import { CountryService } from './endpoints/country/country.service';
import { CountryRepository } from './endpoints/country/country.repository';
import { CountryController } from './endpoints/country/country.controller';
import { PaymentMethodService } from './endpoints/payment-method/payment-method.service';
import { PaymentMethodRepository } from './endpoints/payment-method/payment-method.repository';
import { PaymentMethodController } from './endpoints/payment-method/payment-method.controller';
import { CustomerInfoService } from './endpoints/customer-info/customer-info.service';
import { CustomerInfoRepository } from './endpoints/customer-info/customer-info.repository';
import { CustomerInfoController } from './endpoints/customer-info/customer-info.controller';
import { CustomerInfo, GenericList, GenericListItem, Merchant, PaymentMethod, Branch, User, Unit, Sale, Product, SaleProduct, SalePaymentMethod, LoginRequest, Role, Color, Currency, Country, City, ProductCategory } from 'src/models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColorController } from './endpoints/color/color.controller';
import { ColorRepository } from './endpoints/color/color.repository';
import { ColorService } from './endpoints/color/color.service';
import { CurrencyController } from './endpoints/currency/currency.controller';
import { CurrencyRepository } from './endpoints/currency/Currency.repository';
import { CurrencyService } from './endpoints/currency/Currency.service';
import { GenericListItemController } from './endpoints/generic-list-item/generic-list-item.controller';
import { SaleController } from './endpoints/sale/sale.controller';
import { ProductController } from './endpoints/product/product.controller';
import { SaleRepository } from './endpoints/sale/sale.repository';
import { SaleService } from './endpoints/sale/sale.service';
import { ProductRepository } from './endpoints/product/product.repository';
import { ProductService } from './endpoints/product/product.service';
import { SaleProductController } from './endpoints/sale-product/sale-product.controller';
import { SalePaymentMethodController } from './endpoints/sale-payment-method/sale-payment-method.controller';
import { SaleProductRepository } from './endpoints/sale-product/sale-product.repository';
import { SaleProductService } from './endpoints/sale-product/sale-product.service';
import { SalePaymentMethodRepository } from './endpoints/sale-payment-method/sale-payment-method.repository';
import { SalePaymentMethodService } from './endpoints/sale-payment-method/sale-payment-method.service';
import { AuthService } from './endpoints/auth/auth.service';
import { AuthController } from './endpoints/auth/auth.controller';
import { ProductCategoryController } from './endpoints/product-category/product-category.controller';
import { ProductCategoryService } from './endpoints/product-category/product-category.service';
import { ProductCategoryRepository } from './endpoints/product-category/product-category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Color, Currency, CustomerInfo, PaymentMethod, Country, City, GenericList, GenericListItem, Merchant
    , Role, Branch, User, Unit, Sale, Product, SaleProduct, SalePaymentMethod, LoginRequest, ProductCategory])],
  controllers: [ColorController, CurrencyController, CustomerInfoController, PaymentMethodController,
    CountryController, CityController, GenericListController, GenericListItemController, MerchantController, RoleController,
    BranchController, UserController, UnitController, SaleController, ProductController, SaleProductController, SalePaymentMethodController, AuthController, ProductCategoryController],
  providers: [ColorService, ColorRepository, CurrencyRepository, CurrencyService, CustomerInfoRepository,
    CustomerInfoService, PaymentMethodRepository, PaymentMethodService, CountryRepository, CountryService,
    CityRepository, CityService, GenericListRepository, GenericListService, GenericListItemRepository, GenericListItemService
    , MerchantRepository, MerchantService, RoleRepository, RoleService, BranchRepository, BranchService, UserRepository, UserService
    , UnitRepository, UnitService, SaleRepository, SaleService, ProductRepository, ProductService, SaleProductRepository, SaleProductService,
    SalePaymentMethodRepository, SalePaymentMethodService, AuthService, ProductCategoryService, ProductCategoryRepository],
  exports: [ColorService, ColorRepository, CurrencyRepository, CurrencyService, CustomerInfoRepository,
    CustomerInfoService, PaymentMethodRepository, PaymentMethodService, CountryRepository, CountryService,
    CityRepository, CityService, GenericListRepository, GenericListService, GenericListItemRepository, GenericListItemService
    , MerchantRepository, MerchantService, RoleRepository, RoleService, BranchRepository, BranchService, UserRepository, UserService,
    UnitRepository, UnitService, SaleRepository, SaleService, ProductRepository, ProductService, SaleProductRepository, SaleProductService,
    SalePaymentMethodRepository, SalePaymentMethodService, AuthService, ProductCategoryService, ProductCategoryRepository],
})
/**
 * This module contains only system wide used services (like repositories)
 */
export class SharedModule { }
