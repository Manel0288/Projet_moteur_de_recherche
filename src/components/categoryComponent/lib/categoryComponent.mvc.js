import DocumentsListComponent from '../../documentsListComponent/DocumentsListComponent'
export default {
    name: "CategoryComponent",
    components: {
        DocumentsListComponent
    },
    data(){
        return {
            item: null,
            iconsArray: [
                'mdi-silverware',
                'mdi-food',
                'mdi-silverware-fork-knife',
                'mdi-pasta',
                'mdi-table-chair',
                'mdi-food-fork-drink',
                'mdi-noodles'
            ]
        }
    },

    computed: {
        taxos(){
            return this.$store.state.taxonomy;
        }
    },

    methods: {
        getPages(ev){
            console.log('item', ev.target.childNodes[0].textContent);
            const categorie = ev.target.childNodes[0].textContent
            this.$store.dispatch("getPages", {formData: categorie});
        }
    }
}