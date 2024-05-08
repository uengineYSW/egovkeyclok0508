<template>
    <v-card outlined>
        <v-card-title>
            Apply
        </v-card-title>

        <v-card-text>
            <String label="민원번호" v-model="value.민원번호" :editMode="editMode"/>
            <String label="민원내용" v-model="value.민원내용" :editMode="editMode"/>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="primary"
                    text
                    @click="apply"
            >
                Apply
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
        name: 'ApplyCommand',
        components:{},
        props: {},
        data: () => ({
            editMode: true,
            value: {},
        }),
        created() {
            this.value.민원번호 = '';
            this.value.민원내용 = '';
        },
        watch: {
        },
        methods: {
            apply() {
                this.$emit('apply', this.value);
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

