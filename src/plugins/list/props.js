export default {
  header: {
    type: Boolean,
    default: true,
  },
  footer: {
    type: Boolean,
    default: true,
  },
  slim: {
    type: Boolean,
    default: false,
  },
  pagination: {
    type: Boolean,
    default: true,
  },
  actions: {
    type: Array,
    default: () => ["search", "settings", "filters", "refresh"],
  },
  endpoint: String,
  title: {
    default: "",
  },
  page: {
    type: Number,
    default: 1,
  },
  perPage: {
    type: Number,
    default: 25,
  },
  perPageOptions: {
    type: Array,
    default: () => [10, 25, 50, 100],
  },
  maxPagingLinks: {
    type: Number,
    default: 5,
  },
  paginationMode: {
    type: String,
    default: "querystring",
    validator(value) {
      return ["querystring", "internal", "infinite"].includes(value);
    },
  },
  params: Object,
  data: Array,
  filters: Object,
  debounce: {
    type: Number,
    default: 1000,
  },
  sortBy: String,
  sortOrder: String,
  loader: {
    type: Boolean,
    default: true,
  },
  attrs: {
    type: Array,
  },
};