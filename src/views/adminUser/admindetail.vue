<template>
    <div class="admindetail">
        <el-card>
            <div slot="header">
                管理员详细信息
            </div>
            <el-form :data='formData'>

            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        name:'admindetail',
        data(){
            return{
                formData:{},
                id:''
            }
        },
        methods:{
            getData(){
                this.$axios.get(`/admin/adminuser/${this.id}`).then(res=>{
                    console.log(res.data.data)
                    this.formData = res.data.data
                })
            }
        },
        created(){
           this.id = this.$route.query.id
           this.getData()
        }
    }
</script>

<style scoped>

</style>