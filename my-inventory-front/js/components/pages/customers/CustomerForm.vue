<template>
    <b-form @submit.prevent="$emit('submit', form)" @reset="$emit('reset')">

        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder="Enter name"
            ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Food:" label-for="input-3">
            <b-form-input
                id="input-2"
                v-model="form.phone"
                required
                placeholder="Enter name"
            ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
</template>

<script>
    export default {
        props: ['form'],
        mounted() {
            console.log('Form mounted.')
        }
    }
</script>
