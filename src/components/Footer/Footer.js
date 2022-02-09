export default {
  name: "Footer",
  data() {
    return {
      isAllActive: true,
      isFavoriteActive: false,
    }
  },
  mounted() {
    this.cambioLista('all')
  },
  methods: {
    cambioLista(lista) {
      if (lista === 'all') {
        this.isAllActive = true;
        this.isFavoriteActive = false;
      }
      if (lista === 'favorite') {
        this.isAllActive = false;
        this.isFavoriteActive = true
      }
      this.$emit('seccion', lista)
    },
    getColor(type) {
      let color;
      if (this.isAllActive && type == 'all') {
        color = "#f22539"
      } else if (this.isFavoriteActive && type == 'favorite') {
        color = "#f22539"
      } else {
        color = "rgb(104, 103, 103)"
      }
      return color;
    }
  }
}