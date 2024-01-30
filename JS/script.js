const {createApp} = Vue;
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const app = createApp({
    data:()=>({
        emailList:[],
        loading: false,
    }),
    methods:{
        fetchData(){
            this.loading = true;
            for(let i = 0; i < 10; i++){
                axios.get(endpoint)
                .then((res)=>{
                    this.emailList.push(res.data.response)
                    if(this.emailList.length === 10){
                        this.loading = false;
                    }
                })
            }
        }
    },
    created(){
        this.fetchData();
        console.log(this.emailList.length,this.emailList)
    }
    
    
    
}) 
app.mount('#root')
console.log('Vue ok',Vue)