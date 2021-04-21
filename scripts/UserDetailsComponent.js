
export default {
    name: 'UserDetailsComponent',
    props:{ id: [String, Number]},
    data(){
      return {
        currentUser: []
      }
    },
    mounted () {
      let vue = this;
      let TheId = vue.$route.params.id;
      let thisUser = this.$store.state.users.map(user => {
        if (parseInt(user.id) === parseInt(TheId)){
          return vue.currentUser = user;
        }
      })
      return thisUser;
    },
  };