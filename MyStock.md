# My Inventory - Plainng

TODOs

```
php artisan make:auth
php artisan migrate

php artisan make:model Models\Customer -m
php artisan make:model Models\Supplier -m
php artisan make:model Models\Category -m
php artisan make:model Models\Product -m
php artisan make:model Models\Sale -m
php artisan make:model Models\Purchase -m
php artisan make:model Models\SaleProduct -m
php artisan make:model Models\PurchaseProduct -m

php artisan make:factory CustomerFactory
php artisan make:factory SupplierFactory
php artisan make:factory CategoryFactory
php artisan make:factory ProductFactory
php artisan make:factory SaleFactory
php artisan make:factory PurchaseFactory

php artisan make:seed UserTableSeeder
php artisan make:seed CategoryTableSeeder
php artisan make:seed ProductTableSeeder
php artisan make:seed SupplierTableSeeder
php artisan make:seed CustomerTableSeeder

php artisan make:controller Admin\CustomerController -r

```

Install Vue BootstrapVue
```
yarn add --dev bootstrap-vue
yarn add --dev vue-router

yarn add --dev vue-i18n
```

CRUD User 
- id 
- name
- email
- password

CRUD Customer
- id
- name
- phone
- address
- social - facebook

CRUD Suppliers - Who sell products for us
- id
- name
- phone
- address
- social - facebook

CRUD Category
- id
- name
- note
- photo
- parent_id

CRUD Product
- id
- category_id
- name
- note
- photo
- buy_price
- sale_price

CRUD Sale Order
- id
- order_at
<!-- - product_id -->
<!-- - product_price -->
<!-- - product_quantity -->
- customee_id
- note
billing_data
payment_data

OrderProduct
- id 
- order_id
- product_id
- product_price
- product_quantity

Purchase Order
- id
- order_at
- product_id
- product_price
- product_quantity
- saler_id
- note

sale price
avaiable quantity

CRUD Report



```
Schema::create('orders', function(Blueprint $table) {
    $table->integer('user_id')->unsigned()->nullable();

    $table->foreign('user_id')->references('id')->on('users')
        ->onUpdate('cascade')->onDelete('set null');
});
```


