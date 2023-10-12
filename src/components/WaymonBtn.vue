<template>
  <div class="waymon_btn1" :style="{ 'margin-top':top+'px','height':height +'px','line-height':height+'px' }" v-if="parseInt(type) === 1" @click="onClick">{{title}}</div>
  <div class="waymon_btn2" :style="{ 'margin-top':top+'px','height':height +'px','line-height':height+'px' }" v-if="parseInt(type) === 2" @click="onClick">{{title}}</div>
  <div class="waymon_btn3" :style="{ 'margin-top':top+'px','height':height +'px','line-height':height+'px' }" v-if="parseInt(type) === 3" @click="onClick">{{title}}</div>
</template>

<script setup >
import { useRouter } from "vue-router";
const router = useRouter()
const props = defineProps({
  type:String,
  title:String,
  top:Number,
  height:{
    type:Number,
    default:30
  },
  to:{
    type:String,
    default:''
  }
})
const emit = defineEmits(['click'])
const onClick = () => {
  if (props.to != "") {
    router.push(props.to)
  }
  emit('click')
}
</script>

<style scoped>
.waymon_btn1{
  width: 90%;
  margin-left: 5%;
  border-radius: 30px;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  background:linear-gradient(to right,#71E0E8,#6B87F4);
}
.waymon_btn2{
  width: 90%;
  margin-left: 5%;
  border-radius: 30px;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
  color: #999999;
  background: #eee;
}
.waymon_btn3{
  width: 90%;
  margin-left: 5%;
  border-radius: 30px;
  text-align: center;
  font-size: 13px;
  color: #6B87F4;
  border: 1px solid #6B87F4;
}
</style>
