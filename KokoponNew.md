New Version of Kokopon V2

BE
  - Add user roles (manager, admin, member)
    - [x] 120$ Admin can CRUD on roles
    - [x] 80$  Admin can assign and unassign roles to user
  - Register new user default is role user
    - [x] 40$  Employee can register account
  - Prmotions - 400$
    - [x] 40$  Admin can see all promitions and filter
    - [x] 40$  Admin can approver and reject promotions
    - [x] 120$ Admin can CRUD on promotions
    - [x] 40$  User can only list his promitions and filter
    - [x] 100$ User can create, update, and delete his promotions
    - [x] 20$  User can submit his promotions to admin
    - [] 40$  Send mail when submit, approve, reject
FE
  - List pons by types
    - [x] 50$ Filter Pons which created by manager or admin, display on Kokopon tab
    - [x] 50$ Filter Pons which created by member and approved, display on OtherPon tab
      - List hot promotion
      - List next hot promotion
  - Design Front and Admin
    - [] Design UI for dashboard 50$
    - [] Design UI for frontent 50$

Note:
  - Pon vs Prmotion = false
  - Promotion can use transaction (or sell) = no
  - New user register by himself

  Pon (Deal)
    - type - pon, promition
    - status - draft, approve, reject
    - rejected_by
    - approved_by

  Promotion - this month, hot promotion expired at next momth  
    - type (promotion, grand openning)
    - title
    - photo

  User
    - role - admin, user, members
    - user required to approve
    - members auto approve

  
- Crop photo before upload
- Compress photo after upload
- Multi photos



- Report transation filter by
  - date_from
  - date_to
  - partner

  => 
    total_quanity,


10 * 2 = 20
20 - 20 * 50 / 100 = 10
10 * 20 / 100 = 2


10 * 2 = 20
20 - 20 * 70 / 100 = 6
6 * 20 / 100 = 1.2

total_price = price * quantity
discount_price = total_price - (total_price * discount / 100)
commission_price = discount_price * commission / 100


DO:

```
composer require spatie/laravel-permission

php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider" --tag="migrations"

php artisan migrate

php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider" --tag="config"

php artisan make:seeder RolePermissionsTableSeeder

php artisan make:controller Admin/UserController
php artisan make:controller Admin/RoleController

```

https://github.com/spatie/laravel-permission#database-seeding


Fixed:

### Fixed promotion description
```
php artisan make:migration update_descrption_of_promotion_table
```

### Fixed promotion views label
```
buy -> Buy
Facebook Photo -> Facebook Logo
```

### Fixed promotion validations and listing with page size

https://u.expressionengine.com/article/using-gmail-smtp-to-send-emails-from-your-website?fbclid=IwAR2hvj8NXccvLYL4OmzJ64QbOTa87zceAX6Wq9G_-SzD-DnhVeV5PBPzwjA
https://myaccount.google.com/apppasswords