<script>
import Heading from './Heading'

export default {
  name: 'BaseSubtitle',

  extends: Heading,

  props: {
    size: {
      type: String,
      default: 'text-body-2',
    },
    mobileSize: {
      type: String,
      default: 'text-body-1',
    },
    space: {
      type: [String, Number],
      default: 0,
    },
    tag: {
      type: String,
      default: 'div',
    },
    weight: {
      type: [Number, String],
      default: 'regular',
    },
  },

  computed: {
    classes() {
      return ['grey--text text--lighten-2']
    },
  },
}
</script>
