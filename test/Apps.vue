<template>
    <div class="test11">
        打印当前 $parent.$options 对象属性:
        <pre id="result" class="font-result">
            <div v-html="testOptions">
                <!-- 
                    {{testOptions}}
                -->
            </div>
        </pre>
        <Hello></Hello>
        <Second></Second>
    </div>
</template>

<script>
import Vue from 'vue'
import Hello from './components/hello'
import Second from './components/second'
export default {
    name: 'Apps-test',
    data() {
        return {
            testOptions: {}
        }
    },
    components: {
        Hello,
        Second
    },
    methods: {
        handleJson(json) {
            if (typeof json != 'string') {
                json = JSON.stringify(json, undefined, 2);
            }
            json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
            return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
                var cls = 'number';
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = 'key';
                    } else {
                        cls = 'string';
                    }
                } else if (/true|false/.test(match)) {
                    cls = 'boolean';
                } else if (/null/.test(match)) {
                    cls = 'null';
                }
                return '<span class="' + cls + '">' + match + '</span>';
            });
        }
    },
    mounted() {
        this.testOptions = this.handleJson(JSON.stringify(this.$root.$children[0].$children[0], null, 2))
        console.log(this, 'mounted')
    },
    created() {
        console.log(this, 'created')
    }
}
</script>

<style lang="less">
    html,body, *{
        padding: 0;
        margin: 0;
    }
    .test11{
        width: 100%;
        text-align: left;
    }
    .font-result{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    pre {padding: 0px 15px; background: #1E1E1E; color: #fff}
    .string { color: #CE8248; }
    .number { color: darkorange; }
    .boolean { color: blue; }
    .null { color: #BA695D; display: inline;}
    .key { color: #9CD0CB; }
</style>
