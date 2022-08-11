<template>
    <div>
        <!-- User Interface controls -->
        <b-row>
            <b-col md="6" class="my-1">
                <b-form-group label-cols-sm="3" label="Filter" class="mb-0">
                    <b-input-group>
                        <b-form-input size="sm" v-model="filter" placeholder="Type to Search"></b-form-input>
                        <b-input-group-append>
                            <b-button size="sm" :disabled="!filter" @click="filter = ''">Clear</b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-form-group>
            </b-col>

            <b-col md="6" class="my-1">
                <b-form-group label-cols-sm="3" label="Per page" class="mb-0">
                    <b-form-select size="sm" v-model="perPage" :options="pageOptions"></b-form-select>
                </b-form-group>
            </b-col>
        </b-row>

        <!-- Main table element -->
        <b-table
            ref="table"
            responsive
            show-empty
            :items="itemsProvider"
            :fields="fields"
            :filter="filter"
            :per-page="perPage"
            :current-page="currentPage"
        >
            <template slot="actions" slot-scope="{ item }">
                <b-button
                    size="sm"
                    variant="light"
                    @click="rowClicked(item, action.show, $event)"
                    class="mr-1"
                ><i class="fas fa-eye"></i>
                </b-button>
                <b-button
                    size="sm"
                    variant="primary"
                    @click="rowClicked(item, action.update, $event)"
                    class="mr-1"
                ><i class="fas fa-pencil-alt"></i>
                </b-button>
                <b-button
                    size="sm"
                    variant="danger"
                    @click="rowClicked(item, action.delete, $event)"
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
                    :per-page="perPage"
                    :total-rows="totalRows"
                    v-model="currentPage"
                />
            </b-col>
        </b-row>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {isActive: true, age: 40, name: {first: 'Dickerson', last: 'Macdonald'}},
                    {isActive: false, age: 21, name: {first: 'Larsen', last: 'Shaw'}},
                    {
                        isActive: false,
                        age: 9,
                        name: {first: 'Mini', last: 'Navarro'},
                        _rowVariant: 'success'
                    },
                    {isActive: false, age: 89, name: {first: 'Geneva', last: 'Wilson'}},
                    {isActive: true, age: 38, name: {first: 'Jami', last: 'Carney'}},
                    {isActive: false, age: 27, name: {first: 'Essie', last: 'Dunlap'}},
                    {isActive: true, age: 40, name: {first: 'Thor', last: 'Macdonald'}},
                    {
                        isActive: true,
                        age: 87,
                        name: {first: 'Larsen', last: 'Shaw'},
                        _cellVariants: {age: 'danger', isActive: 'warning'}
                    },
                    {isActive: false, age: 26, name: {first: 'Mitzi', last: 'Navarro'}},
                    {isActive: false, age: 22, name: {first: 'Genevieve', last: 'Wilson'}},
                    {isActive: true, age: 38, name: {first: 'John', last: 'Carney'}},
                    {isActive: false, age: 29, name: {first: 'Dick', last: 'Dunlap'}}
                ],
                fields: [
                    {key: 'name', label: 'Person Full name', sortable: true, sortDirection: 'desc'},
                    {key: 'age', label: 'Person age', sortable: true, class: 'text-center'},
                    {key: 'isActive', label: 'is Active'},
                    {key: 'actions', label: 'Actions'}
                ],
                totalRows: 1,
                currentPage: 1,
                perPage: 5,
                pageOptions: [5, 10, 15],
                sortBy: null,
                sortDesc: false,
                sortDirection: 'asc',
                filter: null,
                infoModal: {
                    id: 'info-modal',
                    title: '',
                    content: ''
                }
            }
        },
        computed: {
            sortOptions() {
                // Create an options list from our fields
                return this.fields
                    .filter(f => f.sortable)
                    .map(f => {
                        return {text: f.label, value: f.key}
                    })
            }
        },
        mounted() {
            // Set the initial number of items
            this.totalRows = this.items.length
        },
        methods: {
            show(item, index, button) {
                this.infoModal.title = `Row index: ${index}`
                this.infoModal.content = JSON.stringify(item, null, 2)
                this.$root.$emit('bv::show::modal', this.infoModal.id, button)
            },
            edit() {

            },
            resetInfoModal() {
                this.infoModal.title = ''
                this.infoModal.content = ''
            },
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            }
        }
    }
</script>
