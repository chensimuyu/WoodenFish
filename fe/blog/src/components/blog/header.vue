<template>
  <header class="blog-header">
    <div class="site-name">
      <h1>小小木鱼</h1>
      <div class="description">点点滴滴的</div>
    </div>
    <nav>
      <ul>
        <li><a href="" class="active"><i></i>首页</a></li>
        <li><a href=""><i></i>归档</a></li>
        <li><a href=""><i></i>关于</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="less">
  .blog-header{
    padding: 58px 0 0;
    text-align: left;
    border-bottom: 1px solid #ddd;
    position: relative;
    .site-name{
      margin-bottom: 40px;
    }
    .description{
      margin: .2em 0 0;
      color: #999;
    }
    nav{
      margin: 10px 0 -1px;
      padding: 0;
      position: absolute;
      right: 0;
      bottom: 0;
      ul{
        display: flex;
      }
      a{
        display: block;
        padding: 3px 20px 3px;
        line-height: 30px;
        color: #444;
        font-size: 13px;
        border: 1px solid transparent;
        &.active{
          border: 1px solid #ddd;
          border-bottom-color: #fff;
          &:hover{
            border-bottom-color: #fff;
          }
        }
        &:hover{
          border-bottom-color: #444;
        }
      }
    }
  }
</style>
