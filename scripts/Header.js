export default {
    name: 'Header',
    computed: {
      SearchForm: {
        get() {
            return this.$store.state.filters.search;
        },
        set(value) {
          this.$store.commit("SetSearch", value)
        }
      }
    }
  };