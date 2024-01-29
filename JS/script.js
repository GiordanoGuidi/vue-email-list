const {createApp} = Vue;
const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const app = createApp({
    data:()=>({
        emailList:[],
    }),
    methods:{

    },
    created(){
        for(let i = 0; i < 10; i++){
            axios.get(endpoint)
            .then((res)=>{
                this.emailList.push(res.data.response)
            })
        }
        console.log(this.emailList)
    }
    
    
    
}) 
app.mount('#root')
console.log('Vue ok',Vue)