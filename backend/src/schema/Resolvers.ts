import { IrregularVerbs } from "../modals";

export const Resolvers = {
    Query: {
        getAllVerbs: async () => await IrregularVerbs.findAll({}),
        getVerbById: async (parent: any, ctx: any) => await IrregularVerbs.findOne({where: {id: ctx.id}})
    }

};