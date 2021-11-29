<template>
  <div>
    <a-page-header
    style="rgb(0, 0, 0)"
    title="虚拟胃镜地图"/>
    <div class="d3-pic">
      <stomach></stomach>
    </div>
    <div>
      <div style="text-align: center">
        <a-button size="large" type="primary" @click="goStep2">
          进入具体诊断
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import stomach from "@/components/stomach.vue";
export default {
  name: "home",
  components: {
    stomach,
  },
  data() {
    return {};
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    goStep2() {
      this.$router.push({ path: "/step2" });
    },
  },
};
</script>

<style scoped>
.home-content {
  display: flex;
}
.d3-pic {
  width: 400px;
  height: 600px;
  background-color: bisque;
}
</style>
