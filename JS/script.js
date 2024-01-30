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
            axios.get(endpoint)
            .then((res)=>{
                const email = res.data
                this.emailList.push(email.response)
                if(this.emailList.length === 10) this.loading = false;
            }) 
        }
    },
    created(){
        for(let i = 0; i < 10; i++){
            this.fetchData();
        }
    }
    
    
    
}) 
app.mount('#root')
console.log('Vue ok',Vue)