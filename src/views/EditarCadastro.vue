<template>
    <div class="container mt-3">
       <div class="row">
           <div class="col">
               <p class="h3 fw-bold">Editar Cadastro</p>
               <p class="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum modi quam facere saepe, dolores inventore sapiente maiores eaque sed earum laborum mollitia odit, recusandae adipisci nobis illo rem quod cumque.</p>
           </div>
       </div>
   </div>
   <div class="container mt-3">
       <div class="row">
           <div class="col-md-4">
               <form v-for="cliente of clientes" :key="cliente.id"> 
                <div class="mb-2" >
                        <input type="text" class="form-control" placeholder="Nome" v-model="cliente.nome">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Telefone" v-model="cliente.telefone">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Data de Nascimento" v-model="cliente.datanascimento">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Adicionar URL da Foto" v-model="cliente.foto">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="E-Mail" v-model="cliente.email">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Cidade" v-model="cliente.cidade">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Endereço" v-model="cliente.endereco">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Numero da Casa" v-model="cliente.numero">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Complemento" v-model="cliente.complemento">
                    </div>
                    <div class="mb-2">
                        <button class="btn btn-success ">Atualizar</button>
                    </div>
               </form>
           </div>
           <div class="col-md-4">
               <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" class="contact-img">
           </div>
       </div>
   </div>
</template>

<script>
  import Clientes from '../servidor/clientes'
export default{
    name: "EditarCadastro",
  
    
    data(){
           return{
            cliente:{
                id:'',
                nome:'',
                telefone:'',
                datanascimento:'',
                foto:'',
                email:'',
                cidade:'',
                endereco:'',
                numero:'',
                complemento:''

            },

            clientes:[]
           }
        },
 
    mounted(){

        Clientes.listar().then(resposta =>{
            console.log(resposta.data)
            this.clientes = resposta.data
        })
    },

    methods:{
        listar(){
            Clientes.listar().then(resposta =>{
             this.clientes = resposta.data
        })

        },

        salvar(){
            if(!this.cliente.id){
                Clientes.salvar(this.cliente).then(resposta =>{
                this.cliente = {}
                alert('Cadastrado com sucesso!')
            }).catch(e => {
            console.log(e.response)
             })
            }else{
                Clientes.atualizar(this.cliente).then(resposta =>{
                this.cliente = {}
                alert('Atualizado  com sucesso!')
            }).catch(e => {
            console.log(e.response)
             })
            }
          
            
            
        },
        editar(cliente){
            this.cliente = cliente
        }

    }
}

</script>

<style scoped>

</style>