import {SaleRepositoryHttp} from "@poc-clean-archi/adapters"
import {httpClient} from "boot/http";

// Repositories
const saleRepository = new SaleRepositoryHttp(httpClient)

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(({ app }) => {
//     app.config.globalProperties.$saleRepository = saleRepository
// })

export { saleRepository }
