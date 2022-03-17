import { reactive } from 'vue'

export const paginationstore = reactive({
  paging: {
    maxContents: 5,
    maxPages: 2,
    firstContentIndex: 0,
    currentPage: 1
  },
})