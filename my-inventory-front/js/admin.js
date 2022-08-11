require('./bootstrap');
require('../assets/js/sb-admin-2');

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import i18n from "./utils/i18n";
import router from "./utils/router";
import Layout from "./components/Layout";

Vue.use(BootstrapVue);

window.axios.default.baseURL = 'http://localhost:8001';

const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// {key: "id", label: "Id", sortable: true, sortDirection: "desc"},
// {key: "name", label: "Name", sortable: true, sortDirection: "desc"},
// {key: "phone", label: "Phone", sortable: true, sortDirection: "desc"},
// {key: "created_at", label: "Create Date", sortable: true, sortDirection: "desc"},
// {key: "updated_at", label: "Update Date", sortable: true, sortDirection: "desc"},
// {key: "actions", label: "Actions", class: "text-center"}

const admin = new Vue({
    i18n,
    router,
    render: h => h(Layout)
}).$mount("#admin");
