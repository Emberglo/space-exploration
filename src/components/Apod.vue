<template>
    <div class="Apod">
        <div class="container-fluid text-center">
            <div class="row">
                <div class="col-12">
                    <h2>NASA Astronomy Picture Of The Day</h2>
                    <h4>{{state.image.title}}</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-10 offset-1">
                    <iframe :src="state.image.url" frameborder="0"></iframe>
                    <img src="{{state.image.url}}" alt="">
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <p>{{state.image.explanation}}</p>
                    <p>- {{state.image.date}} -</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { computed, reactive, onMounted } from 'vue'
import { AppState } from '../AppState.js'
import { apodService } from '../services/ApodService.js'

export default {
    name: 'Apod',
    setup(){
        const state = reactive({
            image: computed(() => AppState.apodImg)
        })
        onMounted(() => {apodService.getImage()})
       return {
            state
        }
    },
    components:{}
}
</script>


<style scoped>
    h2 {
        margin-top: 1em;
    }
    h4 {
        margin-top: .5em;
    }
    p{
        margin-top: 1em;
    }
    img {
        margin-top: 1em;
        height: 30em;
        width: auto;
    }
    iframe{
        margin-top: 1em;
        height: 30em;
        width: 45em;
    }
</style>