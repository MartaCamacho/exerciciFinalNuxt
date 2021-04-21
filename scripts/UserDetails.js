import UserDetailsComponent from '@/components/UserDetailsComponent.vue';

export default {
  name: 'UserDetails',
  components: {
    UserDetailsComponent
  },
  props:{ id: [String, Number], user: Object },
  mounted () {
    let vue = this;
    let TheId = vue.$route.params.id;
    this.$store.dispatch('addCurrentUserToSeen', TheId);
  }
};