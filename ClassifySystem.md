# Install GraphQL dependency

composer require folklore/graphql:dev-develop

# Publish GraphQL's config and view

php artisan vendor:publish --provider="Folklore\GraphQL\ServiceProvider"

# Add Todo resources (Migration, Model, Factory, Seeder)

php artisan make:model Task -m
php artisan make:seeder TasksTableSeeder
php artisan make:factory TaskFactory --model=Task

## Execute command to generate table and records

php artisan migrate
php artisan db:seed --class=TasksTableSeeder

php artisan migrate:fresh --seed

# Defined models and relations

```shell=
php artisan make:model Models/Category -m
php artisan make:model Models/Product -m
php artisan make:model Models/Location -m
php artisan make:model Models/Setting -m
php artisan make:model Models/SettingItem -m
php artisan make:model Models/Attachment -m

php artisan make:model Models/UserTranslation -m
php artisan make:model Models/CategoryTranslation -m
php artisan make:model Models/ProductTranslation -m
php artisan make:model Models/LocationTranslation -m
php artisan make:model Models/SettingTranslation -m
php artisan make:model Models/SettingItemTranslation -m
php artisan make:model Models/AttachmentTranslation -m

php artisan make:seeder CategoriesTableSeeder
php artisan make:seeder ProductsTableSeeder


```

# Add Todo GraphQL resources (Type, Query, Mutation) - Branch TODOs

php artisan make:graphql:type TaskType
php artisan make:graphql:query TasksQuery
php artisan make:graphql:mutation NewTaskMutation
php artisan make:graphql:mutation UpdateTaskStatusMutation

```
http://127.0.0.1:8000/graphiql

# Example

{
  tasks {
    id
    title
  }
}

```

https://packagist.org/packages/folklore/graphql

LV 5.6.\*
https://blog.pusher.com/graphql-laravel/
https://github.com/ammezie/laravel-graphql-tasks

LV 5.7.\*
https://qiita.com/ucan-lab/items/32969d6a9b5aa99b475e

php artisan make:command RedisSubscribe

#### Others

GraphQL - UserType UserQuery CreateUserMutation
https://medium.com/@albertcito/basic-example-graphql-with-laravel-225ab8d57981

#### Light House

https://www.youtube.com/watch?v=y19EaW2X7ac
https://github.com/nuwave/lighthouse-example

https://packagist.org/packages/nuwave/lighthouse
https://packagist.org/packages/nuwave/lighthouse-ws
https://packagist.org/packages/nuwave/lighthouse-subscriptions

## Install Prdis in Laravel project to use Redis

```shell=
composer require predis/predis

## Run Publish
curl http://localhost:8000/publish

## Test Subscribe
redi-cli
php artisan redis:subscribe
```

php artisan migrate:fresh --seed
Ref: https://bagja.net/blog/seeding-table-with-relationships-in-laravel.html
Doc: https://github.com/fzaninotto/Faker
Oth: https://scotch.io/tutorials/cleaner-laravel-controllers-with-route-model-binding

Doc: https://github.com/Folkloreatelier/laravel-graphql GraphQL for Laravel
Oth: https://medium.com/@olivernybroe/testing-graphql-with-laravel-4d6201b40f68 -- Test QraphQL

```
dump('Laravel Collection');
$time_start1 = microtime(true);
$saved1 = Category::createWithChildren($categories);
// dump($saved1);
dump(microtime(true) - $time_start1);

dump('Pure PHP');
$time_start2 = microtime(true);
$saved2 = Category::createWithChildrenRaw($categories);
// dump($saved2);
dump(microtime(true) - $time_start2);
```

## API with GraphQL

```
mutation {
  login(data: { username: "admin@domain.com", password: "123123" }) {
    access_token
    refresh_token
  }
}


App\Models\User::create(['username'=>'adminz','email'=>'adminz@gmail.com', 'gender'=>'M', 'first_name'=>'fake','last_name'=>'adminz', 'password'=>bcrypt('123123')]);


http://localhost:8000/graphiql


  php artisan view:clear
  php artisan cache:clear
  php artisan route:clear
  php artisan config:clear
  php artisan optimize:clear
  php artisan session:table

  php artisan lighthouse:clear-cache
```

{
"Authorization": "Bearer"
}



Client ID: 1
Client secret: uoNeghuANbZEORrcaLN4EzHv8YfbSTqjXQTaR5p7
Password grant client created successfully.
Client ID: 2
Client secret: E0YLwnF5lS3uyKJKUssuebRGnnhB5HUSjjzmoQr1


composer require laravel/passport
php artisan migrate
php artisan passport:install
php artisan passport:keys --force

Passport::loadKeysFrom('/secret-keys/oauth');

php artisan lighthouse:mutation AuthMutator

http://localhost:8000/graphiql

php artisan make:exception GraphqlRendersErrors

# passportRegister(input: {
#     email: String!
#     gender: String
#     username: String!
#     password: String
#     last_name: String
#     first_name: String
# }): TokenResponse @field(resolver: "AuthMutator@register")
