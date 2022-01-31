<template>
    <div class="articlePage">
        <router-link to="/"><h2>Blog</h2></router-link>
        
        <div>
            <div class="hero">
                <div class="imgContainer">
                    <img :src="article?.coverUrl" :alt="article?.title" class="coverImg" />
                </div>
                <div class="heroContent">
                    <h1 class="title">{{ article?.title }}</h1>
                    <h3 class="subtitle"> {{ article?.subtitle }}</h3>
                    <p>Posted by 
                        <span>{{ article?.author }}</span> on 
                        <span>{{ new Date(article?.creationTime).toLocaleString(locale, {dateStyle: 'long'}) }}</span>
                    </p>
                </div>
            </div>
            <div 
                v-html = "article?.content"
                class="content" 
            />
        </div>
    </div>
</template>

<script>
    import { getArticles } from '@polyblog/polyblog-js-client';
    import { useRoute } from 'vue-router';
    export default {
        name: 'ArticlePage',

        data (){
            const route = useRoute();
            return {
                locale: route.params.locale,
                slug:  route.params.slug,
                article: []
            }
        },
        methods: {
            async fetchArticles () {
                let articles = await getArticles({
                    organizationId: 'c398463407b5c12f27f9aed4',
                    project: 'polyblog',
                    locale: this.locale,
                    slugLocalized: this.slug
                })
                let singleArticle = articles?.[0]
                console.warn('singleArticle', singleArticle)

                this.article = singleArticle;
            } 
        },
        created() {
            this.fetchArticles()
        }
    }
</script>

<style scoped>
    .articlePage {
        width: 80%;
        margin: 0 auto;
        padding: 2rem 0;
    }
    
    .hero {
        position: relative;
        margin-top: 1rem;
    }

    .imgContainer {
        width: 100%;
        height: 25rem;
        position: relative;
    }

    .coverImg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        filter: brightness(60%);
        display: block;
    }

    .heroContent {
        position: absolute;
        color: white;
        margin-left: 10%;
        width: 80%;
        top: 20%;
    }

    .title {
        font-size: 3rem;
    }

    .subtitle {
        margin: .6rem 0 2rem;
    }

    p {
        font-style: italic;
        font-size: 1.2rem;
    }

    .content {
        margin-top: 1rem;
        width: 100%;
    }

    .content  img {
        width: 10rem;
    }
</style>