import Vue from 'vue'

new Vue({
    data() {
        return {
            test: 'xxx'
        }
    },
    methods: {
        todo() {
            console.log('xxx')
        }
    },
    mounted() {
        console.log(this)
    }
})