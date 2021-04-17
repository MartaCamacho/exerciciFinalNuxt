import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
    name: 'default',
    components: {Header, Footer},
    methods: {
        back(){
          this.$router.go(-1)
        },      
      }, 
      computed: {
        SearchForm: {
          get() {
              return store.state.filters.search;
          },
          set(value) {
              store.commit("SetSearch", value)
          }
        }
      }
  };