<template>
    <nav class="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
      <a class="pagination-previous" @click.prevent="changePage(pagination.current_page - 1)">Previous</a>
      <a class="pagination-next" @click.prevent="changePage(pagination.current_page + 1)">Next page</a>
      <ul class="pagination-list">
        <li v-for="page in pages" :key="page">
          <a class="pagination-link" @click.prevent="changePage(page)" :class="{'is-current': page == pagination.current_page}">
              {{page}}
            </a>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  props: {
    pagination: {
      type    : Object,
      required: true
    },
    offset: {
      type   : Number,
      default: 9
    }
  },
  computed: {
    pages() {
      if (!this.pagination.to) {
        return [];
      }

      let from = this.pagination.current_page - this.offset;
      if (from < 1) {
        from = 1;
      }

      let to = from + (this.offset * 2);

      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }

      let pages = [];

      while(from <= to) {
        pages.push(from++);
      }

      return pages;
    }
  },
  methods: {
    changePage(page) {
      if(page>this.pagination.last_page || page<1){
        return;
      }
      this.pagination.current_page = page;
      this.$emit('paginate');
    }
  }
};
</script>

