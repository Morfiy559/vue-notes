const vueApp = Vue.createApp({
    data() {
        return {title:"Список заметок", placeholder:"Введите название заметки", inputValue:'',
        notes:[]
        }
    },
    methods:{
        inputChangeHandler(event){
            this.inputValue = event.target.value
        },
        addNewNote(){
            if(this.inputValue!==''){
            this.notes.push(this.inputValue) 
            this.inputValue=''
            }
        },
        removeNote(i){
            this.notes.splice(i,1)
        }
      },
  });
  vueApp.mount('#app');