<template>
    <div class="homePage">
        <h1>Recent Articles</h1>
        <div class="articles">

            <!-- Article  -->
            <template 
                v-for="article in articles"
            >
                <router-link 
                    v-if="article.locale === locale"
                    to = '/locale/slug'
                    :key="article._id"
                    class="article link"
                >
                    <img :src="article.coverUrl" :alt="article.title">
                    <div class="articleBody">
                        <div class="info">
                            <span class="author">{{article.author}}</span>
                            <span class="createdAt">{{new Date(article.creationTime).toLocaleString(article.locale, {dateStyle: 'long'})}}</span>
                        </div>
                        <h3 class="title">{{article.title}}</h3>
                        <p class="subtitle">{{article.subtitle}}</p>
                    </div>
                </router-link>
            </template>
        </div>
    </div>
</template>

<script>
import { getArticles } from '@polyblog/polyblog-js-client';
import { useRoute } from 'vue-router';
export default {
    name: 'HomePage',
    data () {
        const route = useRoute()
        
        return {
            locale: route.params.locale,
            articles: []
        }
    },
    methods: {
        async fetchArticles () {
            let allArticles = await getArticles({
                organizationId: 'c398463407b5c12f27f9aed4',
                project: 'polyblog',
                locale: this.locale, 
                published: true,
                sortDirection: 'DESC'
            })
            console.warn('Allarticles', allArticles)
            console.log('locale', this.locale)
            this.articles = allArticles
        }
    },
    created() {
        this.fetchArticles();
    },
    // mounted() {
    //     const route = useRoute()
    //     this.locale = route.params.locale;
    // },
    
}
</script>

<style scoped>
    .homePage > h1 {
        text-align: center;
        margin: 3rem 0 2rem;
    }
    .articles {
        display: flex;
        flex-wrap: wrap;
        padding-left: 4rem;
        padding-bottom: 3rem;
    }
    .article {
        width: 30%;
        margin-right: 2rem;
        box-shadow: 0 0 7px -1px rgba(0, 0, 0, .5);
        margin-bottom: 3rem;
        transition: .3s ease-in-out;
    }
    .article:hover{
        transform: translateY(-3px);
    }
    .article img {
        width: 100%;
        height: 16rem;
    }
    .articleBody {
        padding: 1rem 1rem 2rem;
    }
    .info {
        display: flex;
        justify-content: space-between;
    }
    .author {
        font-size: .9rem;
        display: block;
    }
    .createdAt {
        font-size: .9rem;
        display: block;
        color: gray;
    }
    .title {
        margin: 1rem auto;
        font-size: 1.5rem;
    }
    .subtitle {
        font-size: .95rem;
    }
</style>