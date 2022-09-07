import {defineStore} from "pinia";
import {ref} from "vue";

const useFooStore = defineStore('foo', () => {
    const myFoo = ref();
    return {
        myFoo,
        bar() {
            return null;
        },
        baz() {
            return 'baz'
        }
    }
})

export default useFooStore