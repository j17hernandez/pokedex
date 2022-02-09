export default {
  name: 'InputSearch',
  data() {
    return {
      buscarInp: '',
    }
  },
  methods: {
    filtrar() {
      this.$emit('search', this.buscarInp)
    }
  },
}