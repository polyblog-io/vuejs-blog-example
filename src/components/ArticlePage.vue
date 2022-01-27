<template>
    <div class="articlePage">
        <router-link to="/en"><h2>Blog</h2></router-link>

        <div>
            <div class="hero">
                <img src="https://images.unsplash.com/photo-1643120382882-2e3de81f81c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="blog" class="coverImg">
                <div class="heroContent">
                    <h1 class="title">Content Marketing Strategies</h1>
                    <h3 class="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, officia alias inventore nam commodi asperiores</h3>
                    <p>Posted by <span>Jade Thompson</span> on <span>12 Jan, 2022</span></p>
                </div>
            </div>
            <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid tempora neque facere omnis, ullam vero praesentium soluta laboriosam vitae perspiciatis, similique facilis, temporibus quo obcaecati repudiandae eveniet debitis laudantium doloremque earum. Quaerat quasi tenetur assumenda, explicabo rerum sapiente? Ullam explicabo veniam odit consectetur sed mollitia, quis saepe repellat assumenda, dolore, libero sequi corporis vitae corrupti cum doloribus debitis voluptate rem possimus dolorem a nesciunt unde? Suscipit, sapiente. Ratione magni voluptatem possimus voluptatibus voluptas aut unde molestiae fugiat expedita! Magni voluptas temporibus maxime rerum praesentium error quos ut in, ipsa incidunt ratione veniam dolores tempora quo deserunt nisi natus repudiandae adipisci eum nemo earum blanditiis ea, autem rem? Nihil quo itaque, laudantium ipsum, doloremque nam cupiditate odio facere debitis autem repudiandae ipsa id ex eos officiis deleniti consequatur quibusdam quidem? Cumque, nostrum temporibus. Iure eveniet similique animi temporibus id doloremque, deleniti molestias nisi! Error ab tempora neque amet, ipsa voluptate placeat, quibusdam magnam voluptatum dolorem aperiam labore accusantium ipsum ipsam sed optio similique molestias, at aspernatur. Incidunt asperiores quos dolorem iste accusamus libero obcaecati ipsum, placeat rem assumenda eaque unde modi repudiandae error exercitationem praesentium id ipsa? Fugiat vero dolorem, quae dolor aspernatur corrupti doloremque dolore, eius libero numquam est ea error laborum odio ullam nam dicta porro aperiam nostrum labore fuga repellat culpa perspiciatis. Nulla dolor voluptate a fuga, fugiat magnam ea eveniet reprehenderit quaerat neque aliquid ut enim earum blanditiis officia quia. Pariatur dolor voluptates corporis iste natus error assumenda minus commodi? Natus, facilis, rerum veniam qui voluptatem numquam harum ad autem, fugiat minus quia officia non iste rem at labore tempore animi blanditiis. Numquam animi ut illo adipisci, ratione exercitationem obcaecati. Impedit velit aperiam repellendus tempore nobis. Inventore molestiae eveniet blanditiis est aspernatur nihil sapiente aliquam reprehenderit. Hic exercitationem quae aliquam nostrum tempore impedit perferendis voluptate nulla omnis quisquam similique, ducimus, eum eaque dolorem consequatur delectus nihil accusamus velit praesentium obcaecati illum earum sit possimus dolore! Facere, id adipisci? Magnam pariatur voluptatem tenetur iste tempore, fugiat rem atque nihil odio earum ipsam praesentium similique! Nihil temporibus doloremque odio consectetur dicta hic maiores nesciunt quia, earum perferendis laudantium illum aliquam vitae aspernatur nostrum ipsam tempore est provident autem quod vel voluptatibus repellendus nulla. Autem iusto, quae et, ducimus fugiat repudiandae ipsa in aspernatur quo minus veritatis! Necessitatibus ullam unde at perferendis pariatur veniam rem sunt iusto officia, harum optio aperiam eaque. Excepturi quos voluptatum labore ullam recusandae minima error itaque esse illum, ipsa velit eveniet, aspernatur, blanditiis reiciendis qui est praesentium magnam consequatur ab consectetur nihil eos officiis numquam et. Esse eos, nostrum dolores, eaque numquam facere voluptates consequatur atque tempore ea temporibus rerum officia minus consectetur saepe inventore maxime laudantium officiis dolorem laboriosam adipisci, magnam architecto a? Dolor, iste vel laboriosam quas maxime harum, accusantium dolore dicta exercitationem voluptates nesciunt. Fuga dicta cum doloribus quaerat laborum architecto eum consequatur voluptates officiis nam, asperiores laudantium quam odio saepe dolorum, eveniet quae exercitationem, perferendis voluptate harum iusto ipsam provident. Exercitationem perspiciatis neque saepe sequi sint ducimus ullam molestiae error animi.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ArticlePage'
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
    .coverImg {
        width: 100%;
        height: 25rem;
        position: absolute;
        top: 0;
        filter: brightness(60%);
    }
    .heroContent {
        position: relative;
        color: white;
        margin-left: 10%;
        padding-top: 12rem;
        width: 70%;
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
        margin-top: 4rem;
    }
</style>