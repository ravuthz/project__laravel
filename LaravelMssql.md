https://blog.pusher.com/complete-guide-to-form-validation-in-vue/

https://scotch.io/tutorials/template-driven-form-validation-in-vuejs

https://laraveldaily.com/differences-request-get-vs-request-input-vs-helper-vs-get_data/

https://baianat.github.io/vee-validate/api/errorbag.html#api

https://baianat.github.io/vee-validate/concepts/backend.html

https://bootstrap-vue.js.org/docs/reference/validation/
https://vuejs.org/v2/guide/computed.html#Watchers

TODOs:

- [] Add field token in user
- [] Store jwt in token and set jwt not expired
- [] Make middleware for verify by user.token 


php artisan make:migration add_token_to_users_table --table=users
php artisan make:model UserLogs -m


sudo docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=<YourStrong!Passw0rd>' \
   -p 1433:1433 --name sql1 \
   -d mcr.microsoft.com/mssql/server:2017-latest


docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=<YourStrong!Passw0rd>' -p 1433:1433 --name mssql1 -d mcr.microsoft.com/mssql/server:2017-latest