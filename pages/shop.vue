<template>
<section class="section" id="post">
    <div class="container">
        <div class="row">
            <h1 class="title">Shop</h1>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
                <tr v-for="p of productlist" :key="p.id">
                    <td width="60px">
                        {{ p.id }}
                    </td>
                    <td width="100px">
                        <nuxt-link :to="{name: 'planet-id', params: {id: p.id}}">
                            {{ p.name }}
                        </nuxt-link>
                    </td>
                    <td width="100px">
                        {{ p.price }}
                    </td>
                    <td>
                        {{ p.description }}
                    </td>
                </tr>
            </table>
            {{ msg }}
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            productlist: undefined,
            msg: null,
            info: []
        }
    },
    /*async mounted () {
      //this.products = (await this.$axios.get('/products')).data
      //this.productlist = (await this.$axios.$get('/products'))  // One line code done
    }*/

    async mounted() {

        /*await this.$axios.get('/products')   // If use $get don't need to use data ex: resp.data.products
        .then(resp => {
            console.warn(resp.data.products);
        })*/

        await this.$axios.$get('/products')
            .then(resp => {
                //console.warn(resp.products);
                this.productlist = resp.products;
                console.log(resp.status);
                this.msg = resp.status;
            })
            .catch(error => {
                console.log(error);
            });
    }
}
</script>

<style>

</style>
