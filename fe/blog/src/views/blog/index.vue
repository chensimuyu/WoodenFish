<template>
  <div class="body-container">
    <head-top></head-top>
    <div class="main">
      <section class="content-container">
        <div class="article-item">
          <h1 class="title">
            <a href="">春去春又来</a>
          </h1>
          <div class="meta">2017年04月04日</div>
          <div class="describe">忙碌了近一个月，终于能够出来透口气了。北京的春天总是短暂，晴空万里时让人愉快，阴郁雾霾时让人心塞。所以每一次天朗气清都会不忍其入夜，每一回惠风和畅都会加倍地珍惜。然而，这些已经在身边变换了九年的季节和情绪即将离我而去了，也不知道南方的气候是否友好，是否需要挣扎一番才能适应。</div>
          <p class="read-more">
            <a href="">阅读更多&gt;&gt;</a>
          </p>
        </div>
        <div class="article-item">
          <h1 class="title">
            <a href="">春去春又来</a>
          </h1>
          <div class="meta">2017年04月04日</div>
          <div class="describe">忙碌了近一个月，终于能够出来透口气了。北京的春天总是短暂，晴空万里时让人愉快，阴郁雾霾时让人心塞。所以每一次天朗气清都会不忍其入夜，每一回惠风和畅都会加倍地珍惜。然而，这些已经在身边变换了九年的季节和情绪即将离我而去了，也不知道南方的气候是否友好，是否需要挣扎一番才能适应。</div>
          <p class="read-more">
            <a href="">阅读更多&gt;&gt;</a>
          </p>
        </div>
        <div class="page">
          <!--<router-link>-->
            <!--sss-->
          <!--</router-link>-->
        </div>
      </section>
      <aside-comp></aside-comp>
    </div>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
  import headTop from '../../components/blog/header.vue'
  import footerComp from '../../components/blog/footer.vue'
  import asideComp from '../../components/blog/aside.vue'
  import articleServer from '../../services/blog/article'

  export default {
    data () {
      return {
        articleList: []
      }
    },
    mounted () {
      articleServer.getArticleList().then((data) => {
        console.log(data)
      })
    },
    components: {
      headTop,
      footerComp,
      asideComp
    }
  }
</script>

<style lang="less">
  .body-container{
    padding: 0 60px;
    max-width: 1150px;
    margin: 0 auto;
  }
  .main{
    display: flex;
    .content-container{
      width: 75%;
      padding-right: 50px;
      padding-top: 20px;
    }
    .article-item{
      padding: 25px 0 15px;
      .title{
        a{
          color: #555;
          font-size: 25px;
          line-height: 1.1;
        }
      }
      .meta{
        margin-top: 15px;
        color: #6E7173;
      }
      .describe{
        text-align: justify;
        word-break: break-all;
        padding-top: 15px;
        line-height: 1.77;
        color: #444;
      }
      .read-more{
        text-align: right;
        a{
          display: inline-block;
          color: #444;
          padding: 5px 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 12px;
        }
      }
    }
  }
</style>
