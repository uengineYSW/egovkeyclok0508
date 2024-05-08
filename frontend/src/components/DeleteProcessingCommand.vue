<template>
    <v-card outlined>
        <v-card-title>
            DeleteProcessing
        </v-card-title>

        <v-card-text>
            <String label="Name" v-model="value.name" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="deleteProcessing"
            >
                DeleteProcessing
            </v-btn>
            
            <v-btn
                    color="primary"
                    text
                    @click="close"
            >
                Close
            </v-btn>
        </v-card-actions>
    </v-card>

</template>

<script>
   
    export default {
        name: 'DeleteProcessingCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.name = '';
        },
        watch: {
        },
        methods: {
            deleteProcessing() {
                this.$emit('deleteProcessing', this.value);
            },
            close() {
                this.$emit('closeDialog');
            },
            change() {
                this.$emit('input', this.value);
            },
        }
    }
</script>

