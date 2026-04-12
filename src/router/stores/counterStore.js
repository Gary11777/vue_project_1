import { defineStore } from 'pinia';

export let useCounterStore = defineStore('counter', {
    // data
    state() {
        return {
            count: 5,
        };
    },

    // methods
    actions: {
        increment() {
            if (this.count < 10) {
                this.count++;
            }
        },
        decrement() {
            if (this.count > 0) {
                this.count--;
            }
        },
        reset() {
            this.count = 0;
        }
    },

    // computed properties
    getters: {
        remaining() {
            return 10 - this.count;
        },
        remainingColor() {
            return this.remaining <= 0 ? 'red' : 'green';
        },
        remainingText() {
            return this.remaining <= 0 ? 'You have no remaining attempts' : 'You have ' + this.remaining + ' remaining attempts';
        },
    },
});


// import { reactive } from 'vue';

// export let counter = reactive({
//     // state
//     count: 0,

//     // actions
//     increment() {
//         if (this.count >= 10) {
//             return;
//         }
//         this.count++;
//     },
//     decrement() {
//         if (this.count <= 0) {
//             return;
//         }
//         this.count--;
//     },
//     reset() {
//         this.count = 0;
//     },
// });