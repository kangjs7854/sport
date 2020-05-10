<template>
    <div>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <MenuItem name="1" to="/">BACK TO HUPU</MenuItem>
            <Submenu name="2">
                <template slot="title">
                    <Icon type="ios-paper" />内容管理
                </template>
                <MenuGroup title="当前">
                    <MenuItem name="2-1" to="/admin/game">赛事</MenuItem>
                    <MenuItem name="2-2" to="/admin/jrs">社区</MenuItem>
                    <MenuItem name="2-3" to="/admin/product">商品</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="3" to="/admin/user">
                <Icon type="ios-people" />用户管理
            </MenuItem>
            <MenuItem name="4" to="/admin/echart">
                <Icon type="ios-stats" />统计分析
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