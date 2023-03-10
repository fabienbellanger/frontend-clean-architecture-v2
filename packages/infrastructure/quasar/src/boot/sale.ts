import {SaleRepositoryHttp} from "@poc-clean-archi/adapters";
import { SaleService } from "app/../../domain/lib";
import {httpClient} from "boot/http";

// Repositories
const saleRepository = new SaleRepositoryHttp(httpClient);

// Services
const saleService = new SaleService(saleRepository);

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
// export default boot(({ app }) => {
//     app.config.globalProperties.$saleRepository = saleRepository
// })

export { saleService }
