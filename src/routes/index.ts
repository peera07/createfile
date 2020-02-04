import { file } from './create.routes'
export class Routes {
  constructor(private app: any) {
    this.app = app
  }

  setRoutes() {
    const prefix = '/api/v1'
    this.app.use(prefix, file)
  }
}
