import DetailComponent from '../../detailComponent/DetailComponent'
export default {
    name: "DocumentsListComponent",
    components: {
        DetailComponent
    },
    data(){
        return {
            rPages: 0,
            currentPage: 1
        }
    },

    computed: {
        pages(){
            return this.$store.state.pages;
        },

        numberOfPages(){
            return this.pages.length > 10 ? Math.floor(this.pages.length / 10) : 0;
        },
        renderedPages() {
            let p = [];
            if (this.numberOfPages === 0){
                this.rPages = this.pages;
            } else {
                for (let i=0; i<10; i++){
                    p.push(this.pages[i])
                }

                this.rPages= p;
            }
        }
    },

    watch: {
        renderedPages: function (oldVal, newVal) {
            return newVal;
        }
    },

    methods: {
        nextPage(page){
            let pag = [];
            const start = (parseInt(page, 10) -1) *10;
            const end = parseInt(page, 10) * 10;
            for (let i=start; i< end; i++){
                pag.push(this.pages[i])
            }
            this.rPages = pag.map(item => item);
        },

        paramId(ind){
            const curPage = parseInt(this.currentPage, 10);
            return curPage > 1 ?  ((curPage-1) * 10) + ind : ind;
        }
    }
}