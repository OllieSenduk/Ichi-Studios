<template>
        <section class='projects' :class="{ remove_page: navStatus }">
        <appProjectPage 
            v-for="project in projects" 
            :key="project.id"
            :title="project.title" 
            :imgLeft="project.imgLeft"
            :imgRight="project.imgRight"
            :text="project.text"
            :categories="project.categories"
            :background="project.background"
        ></appProjectPage>
        
    </section>
</template>

<script>
import ProjectPage from '~/components/projects/ProjectPage'
import  { mapState, mapGetters, mapMutations } from 'vuex'

export default {
    computed: {
        ...mapState([
            'navOpen'
        ]),
        ...mapGetters([
            'navStatus'
        ])
    },
    components: {
        appProjectPage: ProjectPage
    },
    data () {
        return {
            projects: [
                {
                    id: 'ikea',
                    title: 'IKEA',
                    imgLeft: 'https://i.imgur.com/aIsAVTR.jpg',
                    imgRight: 'https://i.imgur.com/zGKi8MQ.png',
                    url: '/ikea',
                    text: 'The Wonderful Everyday',
                    categories: ['Tech', 'Development', 'Project Management'],
                    background: '#101010'
                },
                {
                    id: 'creativos_de_la_noche',
                    title: 'Creativos de la Noche',
                    imgLeft: 'https://i.imgur.com/ieEjiHi.jpg',
                    imgRight: 'https://i.imgur.com/AG1ezvi.jpg',
                    url: '/creativos-de-la-noche',
                    text: 'Campaign for Creativity',
                    categories: ['Event', 'Production', 'Photography', 'Film'],
                    background: '#101010'
                }
            ]
        }
    },
}
</script>
<style lang='scss' scoped>

    .projects {
        overflow-x: hidden;
    }
    // .remove_page {
    //     display: none;
    // }

</style>


