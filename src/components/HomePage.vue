<template>
    <div class="homePage">
        <h1>Recent Articles</h1>
        <div class="articles">
            <!-- Article 1 -->
            <router-link to="/en/slug" class="article link">
                <img src="https://images.unsplash.com/photo-1643120382882-2e3de81f81c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Card 1">

                <div class="articleBody">
                    <div class="info">
                        <span class="author">Jade Thompson</span>
                        <span class="createdAt">12 Jan, 2022</span>
                    </div>
                    <h3 class="title">Content Marketing Strategies</h3>
                    <p class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, officia alias inventore nam commodi asperiores.</p>
                </div>
            </router-link>

            <!-- Article 2 -->
            <router-link to="/en/slug" class="article link">
                <img src="https://images.unsplash.com/photo-1643120382882-2e3de81f81c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Card 1">

                <div class="articleBody">
                    <div class="info">
                        <span class="author">Jade Thompson</span>
                        <span class="createdAt">12 Jan, 2022</span>
                    </div>
                    <h3 class="title">Content Marketing Strategies</h3>
                    <p class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, officia alias inventore nam commodi asperiores.</p>
                </div>
            </router-link>

            <!-- Article 3 -->
            <router-link to="/en/slug" class="article link">
                <img src="https://images.unsplash.com/photo-1643120382882-2e3de81f81c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Card 1">

                <div class="articleBody">
                    <div class="info">
                        <span class="author">Jade Thompson</span>
                        <span class="createdAt">12 Jan, 2022</span>
                    </div>
                    <h3 class="title">Content Marketing Strategies</h3>
                    <p class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, officia alias inventore nam commodi asperiores.</p>
                </div>
            </router-link>

            <!-- Article 4 -->
            <router-link to="/en/slug" class="article link">
                <img src="https://images.unsplash.com/photo-1643120382882-2e3de81f81c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Card 1">

                <div class="articleBody">
                    <div class="info">
                        <span class="author">Jade Thompson</span>
                        <span class="createdAt">12 Jan, 2022</span>
                    </div>
                    <h3 class="title">Content Marketing Strategies</h3>
                    <p class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, officia alias inventore nam commodi asperiores.</p>
                </div>
            </router-link>

            <!-- Article 5 -->
            <router-link to="/en/slug" class="article link">
                <img src="https://images.unsplash.com/photo-1643120382882-2e3de81f81c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Card 1">

                <div class="articleBody">
                    <div class="info">
                        <span class="author">Jade Thompson</span>
                        <span class="createdAt">12 Jan, 2022</span>
                    </div>
                    <h3 class="title">Content Marketing Strategies</h3>
                    <p class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, officia alias inventore nam commodi asperiores.</p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage'
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