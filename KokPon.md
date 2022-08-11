# KOK PON

## Create new laravel project

```shell=
laravel new kokpon
```

## Create mysql data base

```shell=
mysql -u ravuthz -p -e "create database kokpon";
```

## Configure file .env (My Example Below)

```shell=
DB_DATABASE=kokpon
DB_USERNAME=ravuthz
DB_PASSWORD=123123
```

## Generate default laravel auth

```shell=
php artisan make:auth

php artisan migrate
```

## Start server for test now

```shell=
php artisan serve
```

## User and auth

```shell=
php artisan make:seeder UsersTableSeeder
```

## Create few tables and resources

```shell=


php artisan make:model Models/Partner -m
php artisan make:factory PartnerFactory
php artisan make:seeder PartnersTableSeeder

php artisan make:model Models/Deal -m
php artisan make:factory DealFactory
php artisan make:seeder DealsTableSeeder

php artisan migrate:fresh --seed
```

## ApiController

```
php artisan make:controller ApiController --resource

php artisan make:controller Api/PartnerController

```

## Install JWT Auth

```
php artisan make:controller Api/UserController
php artisan make:middleware JwtMiddleware

```

## Update field created_by to nullable

```
php artisan make:migration add_nullable_to_partners_table_field_created_by --table=partners
php artisan make:migration add_nullable_to_deals_table_field_created_by --table=deals
```

## Admin Laravel

```
php artisan make:controller Admin/PartnerController --resource

mkdir resources/views/admin
mkdir resources/views/admin/partners
touch resources/views/admin/partners/index.blade.php
touch resources/views/admin/partners/show.blade.php
touch resources/views/admin/partners/edit.blade.php
touch resources/views/admin/partners/form.blade.php



php artisan make:controller BaseController


rm -rf storage/app/public/files
rm -rf storage/app/public/images
php artisan cache:clear
php artisan config:clear
php artisan optimize:clear
php artisan route:clear
php artisan view:clear
php artisan storage:link

php artisan make:migration add_soft_delete_to_users_table
php artisan make:migration add_soft_delete_to_partners_table
php artisan make:migration add_soft_delete_to_deals_table

php artisan make:migration remove_lang_from_partners_table --table=partners
php artisan make:migration remove_lang_from_deals_table --table=deals

php artisan make:migration update_descrption_of_partners_table --table=partners
php artisan make:migration update_descrption_of_deals_table --table=deals

php artisan make:migration update_condition_of_deals_table --table=deals

php artisan make:migration add_kh_fields_for_partners_table --table=partners
php artisan make:migration add_kh_fields_for_deals_table --table=deals

php artisan make:migration add_quantity_to_deals_table --table=deals
php artisan make:migration add_commission_to_deals_table --table=deals

composer install
php artisan vendor:publish --tag=ckeditor

composer require dimsav/laravel-translatable
php artisan make:model Models/PartnerTranslation -m
php artisan make:model Models/DealTranslation -m
```

```
composer require maatwebsite/excel

php artisan make:export UsersExport --model=App\\Models\\User
php artisan make:import UsersImport --model=App\\Models\\User

php artisan make:export PartnersExport --model=App\\Models\\Partner
php artisan make:import PartnersImport --model=App\\Models\\Partner

php artisan make:export DealsExport --model=App\\Models\\Deal
php artisan make:import DealsImport --model=App\\Models\\Deal


php artisan make:controller Admin/IEController
php artisan make:controller Admin/UploadController

php artisan make:seeder InitAllTableSeeder
php artisan db:seed --class=InitAllTableSeeder

php artisan make:command DatabaseBackup
php artisan make:command DatabaseRestore

```

#### Add Expired Date And Share Button

```
php artisan make:migration add_expired_at_to_deals_table --table=deals
```

https://developers.facebook.com/docs/plugins/like-button/
https://developers.facebook.com/docs/plugins/share-button/

####

```
php artisan make:migration add_expired_at_to_deals_table --table=deals
```

#### Add Transation with Quatity and Comission

```
+ Transactions
    - id
    - pon_id
    - quantity
    - price
    - commission
    - created_at
    - created_by

+ Pon
    - quantity
    - commission

php artisan make:migration add_quantity_at_to_deals_table --table=deals
php artisan make:migration add_comission_at_to_deals_table --table=deals

php artisan make:model Transaction -m

php artisan make:controller Admin/TransactionController -r
```

{{ dd(request()->route('deal')) }}
{{ dd(Route::current()->parameters() }}

ln -s storage /path/to/laravel/public/folder public/storage/images/
ln -s /home/ravuthz/ProjectLocal/Laravel/kokopon/vendor public/vendor

php artisan storage:link
lrwxrwxrwx  1 ravuthz ravuthz   61 Mar 12 23:13 storage -> /home/ravuthz/ProjectLocal/Laravel/kokopon/storage/app/public


https://bootstrap-vue.js.org/docs/components/form#inline-form
https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs.html


```
CREATE USER 'ravuthz'@'localhost' IDENTIFIED BY '123123';

GRANT ALL PRIVILEGES ON *.* TO 'ravuthz'@'localhost';


git@gitlab.com-ravuthz:sabayv/kkpn-lar.git


git remote remove origin
git remote add origin git@gitlab.com:sabayv/kkpn-lar.git

php artisan make:migration update_percentage_of_promotions_table --table=promotions

```