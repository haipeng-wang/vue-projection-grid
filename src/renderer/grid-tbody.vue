<template>
  <tbody v-bind="attributes">
    <grid-tr v-for="tr in trs" v-bind="tr" :key="tr.key"/>
  </tbody>
</template>
<script>
import GridTr from './grid-tr.vue';

export default {
  props: ['attributes', 'trs'],
  components: { GridTr },
};
</script>
