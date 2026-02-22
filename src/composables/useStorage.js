import { ref, watch } from 'vue';

export function useStorage(key, val = null) {
    let storedVal = read();

    if (storedVal != null) {
        val = ref(storedVal);
    } else {
        val = ref(val);

        write();
    }

    watch(val, write);

    function read() {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch {
            return null;
        }
    }

    function write() {
        if (val.value === null || val.value === '') {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(val.value));
        }
    }

    function clear() {
        val.value = null;
    }

    return { val, clear };
}