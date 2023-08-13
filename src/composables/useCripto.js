
import {ref, onMounted, computed} from 'vue'

export default function useCripto() {


    const cotizacion = ref({})
    const loading = ref(false)
    const criptocoins = ref([])
    const coins = ref([
        { codigo: 'USD', texto: 'Dolar de Estados Unidos'},
        { codigo: 'MXN', texto: 'Peso Mexicano'},
        { codigo: 'EUR', texto: 'Euro'},
        { codigo: 'GBP', texto: 'Libra Esterlina'},
    ])

    onMounted(() => {
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
        fetch(url)
        .then(response => response.json())
        .then(({Data}) => {
          criptocoins.value = Data
         })
      })


      
    const getCotizacion = async (cotizar) => {
        loading.value= true
        cotizacion.value = {}
        const {moneda, criptocoin } = cotizar
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptocoin}&tsyms=${moneda}`  
        
        const response = await fetch(url)
        const data = await response.json()
        cotizacion.value = (data.DISPLAY[criptocoin][moneda])

        loading.value = false
    }

    // Revisa si el state de cotizacion esta vacio, el object.lengt sirve para ver si el objeto esta vacio
        const showResult = computed(() => {
            return Object.values(cotizacion.value).length > 0
        })


    return {
        coins,
        criptocoins,
        loading,
        cotizacion,
        getCotizacion,
        showResult
    }
}

