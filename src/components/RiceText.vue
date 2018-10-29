<template>
      <div class="quill-wrap">
                      <quill-editor
                        v-model="formData.content"
                        ref="myQuillEditor"
                         @change="onEditorChange($event)"
                        :options='editorOption'
                        >
                        </quill-editor>
                  </div>     
</template>

<script>
 import {quillEditor, Quill} from 'vue-quill-editor'
  import {container, ImageExtend, QuillWatch} from 
  'quill-image-extend-module'
   Quill.register('modules/ImageExtend', ImageExtend)
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
    export default {
        name:'ricetext',
        props:{
            value:Object
        },
        components: {quillEditor},
        data(){
            return{
                formData:{
                    content:'',
                    contentText:''
                },
                 token:'',
                 editorOption:{
                modules: {
                ImageExtend: {
                loading: true,
                name: 'file',
                action:' https://upload-z1.qiniup.com',
                response: (res) => {
                    return res.url
                },
                    change: (xhr, formData) => {
                        formData.append('token', this.token)
                        }
                },
                toolbar: {
                container: container,
                handlers: {
                    'image': function () {
                    QuillWatch.emit(this.quill.id)
                    }
                }
                }
            }
        },
            }
        },   
        
        methods:{
        getToken(){
            this.$axios.get('http://upload.yaojunrong.com/getToken').then(res=>{
                    this.token = res.data.data
                })
            },
            onEditorChange({ quill, html, text }) {
                this.formData.contentText = text
                this.formData.content = html
                this.$emit('input',this.formData)
            }

        },
        created(){
            this.getToken()
        },
        watch:{
            value(val){
                console.log(val)
                this.formData = val
            }
        }
    }
</script>

<style >
.ql-container {
    min-height: 200px;
}
</style>