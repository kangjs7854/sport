<template>
  <div>
    <Menu mode="horizontal" theme="dark" active-name="1">
      <MenuItem name="1" to="/">BACK TO HUPU</MenuItem>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-paper" />内容管理
        </template>
        <MenuGroup title="当前">
          <MenuItem name="2-1" to="/admin/news" >新闻</MenuItem>
          <MenuItem name="2-2" to="/admin/jrs" >社区</MenuItem>
          <MenuItem name="2-3" to="/admin" >商品</MenuItem>
        </MenuGroup>
      </Submenu>
      <MenuItem name="3">
        <Icon type="ios-people" />用户管理
      </MenuItem>
      <Submenu name="4">
        <template slot="title">
          <Icon type="ios-stats" />统计分析
        </template>
        <MenuGroup title="使用">
          <MenuItem name="4-1" to="/admin/flow">项目大概</MenuItem>
          <MenuItem name="4-2">活跃分析</MenuItem>
          <MenuItem name="4-3">时段分析</MenuItem>
        </MenuGroup>
        <MenuGroup title="留存">
          <MenuItem name="4-4">用户留存</MenuItem>
          <MenuItem name="4-5">流失用户</MenuItem>
        </MenuGroup>
      </Submenu>
      <MenuItem name="4">
        <Icon type="ios-construct" />综合设置
      </MenuItem>
    </Menu>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>