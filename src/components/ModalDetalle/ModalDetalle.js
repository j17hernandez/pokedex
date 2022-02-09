export default {
  name: "ModalDetalle",
  props: {
    infoPoke: { type: Object },
    pokemonesFavorites: { type: Array }
  },
  data() {
    return {
      msn: '',
      isFavorite: false,
      portapapel: '',
    }
  },
  watch: {
    infoPoke: {
      handler() {
        this.get_Types()
        const arrayMsn = this.msn.split(',')
        arrayMsn.splice(arrayMsn.length - 1, 1)
        this.msn = arrayMsn.toString()
        this.encontrarFavorito()
        this.generatePortapapel()
      },
      deep: true
    }
  },
  methods: {
    onCopy() {
      alert(`Copiado al portapapeles exitosamente: \n${this.portapapel}`)
    },
    onError(err) {
      alert('Something went wrong', err)
    },
    generatePortapapel() {
      if (this.infoPoke) {
        this.portapapel = `Name: ${this.infoPoke.name},\n Weight: ${this.infoPoke.weight},\n Height: ${this.infoPoke.height},\n Types: ${this.msn}`
      }
    },
    copyToClickBoard() {
      navigator.clipboard.writeText(this.portapapel)
        .then(() => {
          this.onCopy()
        })
        .catch(err => {
          this.onError(err)
        })
    },
    encontrarFavorito() {
      if (this.pokemonesFavorites && this.pokemonesFavorites.length) {
        const existe = this.pokemonesFavorites.find(poke => poke.name === this.infoPoke.name)
        if (!existe) {
          this.isFavorite = false
        } else {
          this.isFavorite = true
        }
      }
    },
    get_Types() {
      this.msn = ''
      if (this.infoPoke) {
        this.infoPoke.types.forEach(item => {
          this.msn += `${item.type.name},`
        });
      }
    },
    close() {
      this.$emit("close");
    }
  },
}