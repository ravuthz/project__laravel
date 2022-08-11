<template>
    <b-row>
        <b-col>
            <b-card :title="title">
                <b-tabs v-model="tabIndex" content-class="mt-3">
                    <b-tab :title="tabList">
                        <table-pagination
                            :items="itemsProvider"
                            :fields="fields"
                            :pagination="pagination"
                        >
                        </table-pagination>
                    </b-tab>
                    <b-tab :title="tabForm">
                        <customer-form :form="form" @submit="formSubmit"></customer-form>
                    </b-tab>
                </b-tabs>
            </b-card>
        </b-col>
    </b-row>
</template>

<script>
    import {action} from '../../../constants';
    import TablePagination from "../../TablePagination";

    export default {
        components: {TablePagination},
        mounted() {
            console.log('Customer Page mounted.')
        },
        data() {
            return {
                apiUrl: 'api/customers',
                fields: [
                    {key: "id", label: this.$t('field.id'), sortable: true, sortDirection: "desc"},
                    {key: "name", label: this.$t('field.name'), sortable: true, sortDirection: "desc"},
                    {key: "phone", label: this.$t('field.phone'), sortable: true, sortDirection: "desc"},
                    {key: "created_at", label: this.$t('field.created_at'), sortable: true, sortDirection: "desc"},
                    {key: "updated_at", label: this.$t('field.updated_at'), sortable: true, sortDirection: "desc"},
                    {key: "actions", label: this.$t('field.actions'), class: "text-center"}
                ],
                filter: {},
                perPage: 1,
                totalRows: 0,
                currentPage: 1,
                pagination: {
                    apiUrl: '',
                    filter: '',
                    perPage: 1,
                    currentPage: 1,
                    totalRows: 10,
                    sortBy: 'id',
                    sortDesc: false
                },
                tabIndex: 0,
                action: action.create,
                form: {},
                formButton: {
                    submit: 'Create', //  Update, Delete
                    cancel: 'Cancel'  //  Reset, Do it later
                }
            };
        },
        computed: {
            title() {
                return this.$t('customer.title');
            },
            tabList() {
                return this.$t('tab.list', [this.title]);
            },
            tabForm() {
                return this.$t('tab.form', [this.title]);
            }
        },
        watch: {
            pagination: {
                handler(value) {
                    this.itemsProvider(value);
                },
                deep: true
            }
        },
        methods: {
            itemsProvider(ctx) {
                // console.log('ctx: ', ctx);
                ctx.perPage = 1;
                this.pagination = ctx;

                return axios
                    .get("api/customers/", {params: this.pagination})
                    .then(res => {
                        // console.log('res: ', res.data.data);
                        const items = res.data.data;
                        this.totalRows = res.data.total;
                        this.pagination.totalRows = res.data.total;
                        return items || [];
                    })
                    .catch(this.handlerError);
            },
            rowClicked(item, action) {
                this.form = item;
                this.action = action;
                this.tabIndex = 1;
            },
            formSubmit() {
                switch (this.action) {
                    case action.create:
                        axios
                            .post(this.apiUrl, this.form)
                            .then(this.handleResponse)
                            .catch(this.handlerError);
                        break;

                    case action.update:
                        axios
                            .put(this.apiUrl + this.form.id, this.form)
                            .then(this.handleResponse)
                            .catch(this.handlerError);
                        break;

                    case action.delete:
                        axios
                            .delete(this.apiUrl + this.form.id, this.form)
                            .then(this.handleResponse)
                            .catch(this.handlerError);
                        break;
                }
            },
            handleResponse(res) {
                console.log('handleResponse: ', res);
            },
            handlerError(err) {
                // err.response.data.errors
                console.log('handlerError: ', err);
            }
        }
    }
</script>
