export default {
    name: 'PictureDetailsComponent',
    props:{ id: [String, Number]},
    data(){
      return {
        currentPicture: []
      }
    },
    mounted () {
      let vue = this;
      let TheId = vue.$route.params.id;
      let thisPic = this.$store.state.pictures.map(picture => {
        if (parseInt(picture.id) === parseInt(TheId)){
          return vue.currentPicture = picture;
        }
      })
      return thisPic;
    },
  };