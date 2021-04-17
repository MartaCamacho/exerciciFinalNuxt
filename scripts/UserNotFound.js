import UsersComponent from '@/components/UsersComponent.vue';
import { mapState } from 'vuex';

export default {
    name: 'UserNotFound',
    components: {
      'UsersComponent': UsersComponent
      },
    data() {
        return {
            filteredUsers: []
        }
    },
    methods: {
      back(){
        this.$router.go(-1)
      }
    }, 
    mounted () {
        this.$store.dispatch('loadUsers')
        let users = this.users;
        let usersRefresh = [];
        if(this.filters.search.length > 0){
            for(const user of users){
            if(user.name.toLocaleLowerCase().includes(this.filters.search)){
                usersRefresh.push(user);
            }
            }
            this.filteredUsers = usersRefresh;
            return this.filteredUsers;
        } else {
            this.filteredUsers = usersRefresh;
            return this.filteredUsers;
        }
      },
    computed: mapState([
        'users',
        'filters'
    ]),
    
    
  };