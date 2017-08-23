<template>
  <aside class="aside-container">
    <div class="widget">
      <form action="" class="search-form">
        <input type="text" placeholder="Search" name="" maxlength="20">
      </form>
    </div>
    <div class="widget">
      <div class="widget-title">分类</div>
      <ul class="widget-list category-list">
        <li><a href="">春去春又来</a></li>
        <li><a href="">又一个夏天</a></li>
        <li><a href="">春去春又来</a></li>
        <li><a href="">又一个夏天</a></li>
      </ul>
    </div>
  </aside>
</template>

<style lang="less">
  .aside-container{
    border-left: 1px solid #ddd;
    padding-left: 35px;
    margin-top: 40px;
    padding-bottom: 20px;
    .widget{
      margin-bottom: 30px;
    }
    .widget-title{
      color: #6E7173;
      line-height: 2.7;
      font-size: 16px;
      border-bottom: 1px solid #ddd;
    }
    .widget-list{
      padding: 10px 0;
      li{
        margin: 5px 0;
        line-height: 1.5;
      }
    }
    .search-form{
      input{
        padding: 7px 11px 7px 28px;
        line-height: 16px;
        border: 1px solid #bbb;
        width: 65%;
        border-radius: 5px;
      }
    }
  }
</style>
