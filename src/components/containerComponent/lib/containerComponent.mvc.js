import FormComponent from '../../formComponent/FormComponent'
import CategoryComponent from '../../categoryComponent/CategoryComponent'
export default {
    name: "ContainerComponent",
    components: {
        FormComponent,
        CategoryComponent
    },
    data(){
        return {}
    },
    mounted(){
        this.$store.dispatch("getTaxonomy");
    }
}