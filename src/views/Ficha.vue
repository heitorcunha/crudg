<template>
       <div class="container mt-3">
       <div class="row">
           <div class="col">
               <p class="h3 fw-bold">Ficha do Cliente</p>
               <p class="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum modi quam facere saepe, dolores inventore sapiente maiores eaque sed earum laborum mollitia odit, recusandae adipisci nobis illo rem quod cumque.</p>
           </div>
       </div>
   </div>
   <div class="container">
    <div class="row align-items-center">
        <div class="col-md-4">
            <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" alt="" class="contact-img-big">
        </div>
        <div class="col-md-6 " v-for="cliente of clientes" :key="cliente.id">
            <ul class="list-group shadow-lg" >
                <li class="list-group-item">Nome : <span class="fw-bold">{{cliente.nome}}</span></li>
                <li class="list-group-item">Telefone : <span class="fw-bold">{{cliente.telefone}}</span></li>
                <li class="list-group-item">Data de Nascimento : <span class="fw-bold">{{cliente.datanascimento}}</span></li>
                <li class="list-group-item">E-Mail : <span class="fw-bold">{{cliente.email}}</span></li>
                <li class="list-group-item">Cidade : <span class="fw-bold">{{cliente.cidade}}</span></li>
                <li class="list-group-item">Endereço : <span class="fw-bold">{{cliente.endereco}}</span></li>
                <li class="list-group-item">Numero da Casa : <span class="fw-bold">{{cliente.numero}}</span></li>
                <li class="list-group-item">Complemento : <span class="fw-bold">{{cliente.complemento}}</span></li>
            </ul>
        </div>
    </div>
    <div class="row mt-3">
        <div class="col">
            <router-link to="/" class="btn btn-success"><i class="bi bi-arrow-left-circle"></i> Voltar</router-link>
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

    name: "Ficha",
    
    mounted(){

Clientes.listar().then(resposta =>{
    console.log(resposta.data)
    this.clientes = resposta.data
})


}
}
</script>

<style scoped>

</style>