<template>
  <v-scroll
    ref="suggest"
    class="suggest"
    :data="result"
    :pullup="pullup"
    :beforeScroll="beforeScroll"
    @scrollToEnd="scrollToEnd"
  >
    <ul class="suggest-list">
      <li
        class="suggest-item"
        v-for="(item,index) in result"
        :key="index"
        @click="selectItem(item)"
      >
        <div class="icon">
          <i class="iconfont">&#xe62b;</i>
        </div>
        <div class="name">
          <p class="text" v-html="getDisplayName(item)"></p>
        </div>
      </li>
    </ul>
  </v-scroll>
</template>

<script>
import scroll from "@/components/scroll";
import api from "@/api";
const limit = 20;
export default {
  props: {
    query: {
      type: String,
      default: "",
    },
  },
  components: {
    "v-scroll": scroll,
  },
  data() {
    return {
      page: 1,
      result: [],
      hasMore: true,
      pullup: true,
      beforeScroll: true,
    };
  },
  methods: {
    selectItem(item) {
      this.$emit('select',item);
    },
    scrollToEnd() {
      if (!this.hasMore) {
        return;
      }
      this.page++;
      this.fetchResult(this.page);
    },
    search() {
      this.fetchResult(this.page);
      this.page = 1;
      this.hasMore = true;
      this.$refs.suggest.scrollTo(0, 0);
      this.result = [];
      this.fetchResult(this.page);
    },
    fetchResult(page) {
      const params = {
        limit,
        offset: page - 1,
        keywords: this.query,
      };
      api.MusicSearch(params).then((res) => {
        console.log(res);
        if (res.result.songs) {
          this.result = [...this.result, ...res.result.songs];
          this._checkMore(res.result);
        }
      });
    },
    _checkMore(data) {
      if (data.songs.length < 12 || (this.page - 1) * limit >= data.songCount) {
        this.hasMore = false;
      }
    },
    getDisplayName(item) {
      return `${item.name} - ${item.artists[0] && item.artists[0].name}`;
    },
  },
  watch: {
    query(newQuery) {
      if (!newQuery) {
        return;
      }
      this.search();
    },
  },
};
</script>

<style scoped lang="stylus">
@import '../assets/css/function.styl'; 

.suggest {
  height: 100%;
  overflow: hidden;

  .suggest-list {
    padding: 0 px2rem(60px);

    .suggest-item {
      display: flex;
      align-items: center;
      line-height: px2rem(80px);
    }

    .icon {
      flex: 0 0 px2rem(60px);
      width: px2rem(60px);
      font-size: 14px;
      color: hsla(0, 0%, 100%, 0.3);
    }

    .name {
      flex: 1;
      font-size: 14px;
      color: hsla(0, 0%, 100%, 0.3);
      overflow: hidden;

      .text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .loading-wraper {
      height: px2rem(80px);
    }
  }

  .no-result-wrapper {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);

    span {
      font-size: 14px;
      color: hsla(0, 0%, 100%, 0.3);
    }
  }
}
</style>