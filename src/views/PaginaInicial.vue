<template>
  <div class="container mt-3">
    <div class="row">
        <div class="col">
            <p class="h3 fw-bold">Pagina Inicial
                <router-link to="/paginainicial/cadastro" class="btn btn-success btn-sm"><i class="bi bi-person-plus-fill"></i> Cadastrar</router-link>
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nisi hic deserunt dolore sequi odit temporibus, cum quam beatae consectetur ut ullam quos repellat adipisci sit? Consectetur blanditiis aliquam officiis.</p>
            <form>
                <div class="row">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col">
                                <input  type="text" class="form-control" placeholder="Nome do Cliente" >
                            </div>
                            <div class="col">
                                <button class="btn btn-outline-success" type="submit">Procurar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
           
          
        </div>
    </div>
  </div>
  <div class="container mt-3"  v-for="clientes of clientes" :key="clientes.id" >
    <div class="row">
        <div class="col-md-6">
            <div class="card my-2 shadow-lg">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-sm-4">
                            <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" class="contact-img">
                        </div>
                        <div class="col-sm-7" >
                            <ul class="list-group">
                              <li class="list-group-item">Nome : <span class="fw-bold">{{ clientes.nome }}</span></li>
                              <li class="list-group-item">Telefone : <span class="fw-bold">{{ clientes.telefone }}</span></li>
                              <li class="list-group-item">Cidade : <span class="fw-bold">{{ clientes.cidade }}</span></li>
                            </ul>
                        </div>

                        <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                            <router-link :to="{ path: '/paginainicial/ficha/'+clientes.id}" class="btn btn-warning my-1">
                                <i class="bi bi-eye-fill"></i>
                            </router-link>
                            <router-link @click="editar(clientes)" :to="{ path: '/paginainicial/editarcadastro/'+clientes.id}"  class="btn btn-primary my-1">
                                <i class="bi bi-pencil"></i>
                            </router-link>
                            <button @click="remover(clientes)" class="btn btn-danger my-1"><i class="bi bi-trash"></i></button>
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
   
</template>

<script>

import Clientes from '../servidor/clientes'


export default{

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
           

           
        
       


    name: "PaginaInicial",
 
    mounted(){

        Clientes.listar().then(resposta =>{
            console.log(resposta.data)
            this.clientes = resposta.data
        })


    },
    methods:{
         editar(cliente){
            this.clientes = cliente
        },

        remover(clientes){
            if(confirm('Deseja excluir o cliente?')){
                Clientes.apagar(clientes).then(resposta =>{
           
           this.listar();
       })
          .catch(e => {
           console.log(e.response)
       })
            }

     
        }
        
    }
    
 
}


</script>

<style scoped>

</style>