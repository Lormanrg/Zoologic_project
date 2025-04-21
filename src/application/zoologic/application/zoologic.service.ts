import { ZoologicRepository } from "../domain/zoologic.repository";


export class ZoologicService {

    constructor(
        protected readonly zoologicRepository: ZoologicRepository
    ) { }


}
