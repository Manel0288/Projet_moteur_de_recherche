
export default {
    name: "DetailComponent",
    data(){
        return{
            page: {},
            imageUrl:""
        }
    },

    mounted(){
        const pages = this.$store.state.pages;
        const id = parseInt(this.$route.params.id, 10);
        console.log('id ', id);
        Object.assign(this.page, pages[id]);
        //this.page = pages[id];
        //console.log('split ', pages[id].image_src.split('?'));
        this.imageUrl = pages[id].image_src.split('?')[0]
    },
    methods: {}
}