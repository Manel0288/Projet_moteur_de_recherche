export default {
    name: "FormComponent",
    data() {
        return {
            rechVal: "",
            password: 'Password',
            show: false,
            icon: 'mdi-magnify',
        };
    },

    methods: {
        cleanRechVal(){
            return this.rechVal.trim();
        },

        findPages(e) {
            e.preventDefault();
            console.log(this.rechVal);
            this.$store.dispatch("getPages", {formData: this.cleanRechVal()});
            this.clearMessage()
        },
        clearMessage () {
            this.rechVal = ''
        }
    }
}