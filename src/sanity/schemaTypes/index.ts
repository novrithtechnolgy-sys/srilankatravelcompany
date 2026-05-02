import { type SchemaTypeDefinition } from 'sanity'
import Stay from './Stay'
import testimonial from './testimonial'
import RelaxAndResort from './relaxandresort'
import experience from './experience'
import booking from './booking'
import staybefor from './staybefor'
import transfer from './transfer'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Stay,testimonial, RelaxAndResort, experience, booking, staybefor, transfer],
}
