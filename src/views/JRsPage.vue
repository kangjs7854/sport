<template>
  <div>
        <Affix :offset-top="10" class="top-bar">
          <ButtonGroup horizontal class="menu">
            <Button @click="$router.push('/jrs')">关注</Button>
            <Button @click="$router.push('/jrs/selfie')">话题</Button>
          </ButtonGroup>
        </Affix>
        <router-view />
 
    <BackTop :bottom="70"></BackTop>
  </div>
</template>

<script>
export default {
 
};
</script>

<style scoped>
.menu{
  padding: 10px;
}
</style>