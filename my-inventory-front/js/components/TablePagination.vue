<template>
    <div>
        <b-table
            ref="table"
            responsive
            show-empty
            :items="items"
            :fields="fields"
            :filter="localPagination.filter"
            :per-page="localPagination.perPage"
            :current-page="localPagination.currentPage"
        >
            <template slot="actions" slot-scope="{ item }">
                <b-button
                    size="sm"
                    variant="light"
                    @click="showClicked(item, action.show, $event)"
                    class="mr-1"
                ><i class="fas fa-eye"></i>
                </b-button>
                <b-button
                    size="sm"
                    variant="primary"
                    @click="editClicked(item, action.update, $event)"
                    class="mr-1"
                ><i class="fas fa-pencil-alt"></i>
                </b-button>
                <b-button
                    size="sm"
                    variant="danger"
                    @click="deleteClicked(item, action.delete, $event)"
                    class="mr-1"
                ><i class="fas fa-trash"></i>
                </b-button>
            </template>
        </b-table>
        <b-row>
            <b-col md="6" class="my-1">
                <b-pagination
                    size="sm"
                    class="my-0"
                    :per-page="localPagination.perPage"
                    :total-rows.sync="localPagination.totalRows"
                    v-model="localPagination.currentPage"
                />
            </b-col>
            <b-col>
                <pre>
                    {{ pagination }}
                </pre>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    export default {
        props: {
            items: {
                type: null,
                required: true
            },
            fields: {
                type: Array,
                required: true
            },
            pagination: {
                type: Object,
                required: true
            }
        },
        computed: {
            localPagination: {
                get() {
                    return this.pagination;
                },
                set(value) {
                    this.$emit('update:pagination', value);
                }
            }
        },
        methods: {
            showClicked(item, event) {
                this.$emit("show-click", item, event);
            },
            editClicked(item, event) {
                this.$emit("edit-click", item, event);
            },
            deleteClicked(item, event) {
                this.$emit("delete-click", item, event);
            }
        }
    }
</script>
