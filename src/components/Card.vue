<template>
  <g-link :to="link" class="card">
    <img :src="imgUrl" :style="imgStyleFromProps" :alt="imgAltFromTitle('case', title)" />
    <div class="card-infos">
      <div>
        <h2 class="text-center">{{title}}</h2>
        <p>{{description}}</p>
      </div>
    </div>
  </g-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      default: "https://i.imgur.com/bHvprN1.gif",
      required: false
    },
    imgFit: {
      type: String,
      default: "cover"
    }
  },
  computed: {
    imgStyleFromProps() {
      return `object-fit: ${this.$props.imgFit}`;
    },
    link() {
      return `cases/${this.$props.link}/`;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  overflow: hidden;
  background: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.2);
  }
}

.card > img {
  height: 300px;
  width: 100%;
}

.card h2 {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0px;
}

.card p {
  opacity: 0.7;
}

.card .card-infos {
  padding: 50px 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: relative;
}
</style>