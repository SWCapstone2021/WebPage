<script>
import Heading from './Heading'

export default {
  name: 'BaseTitle',

  extends: Heading,

  props: {
    size: {
      type: String,
      default: 'text-h6',
    },
    mobileSize: {
      type: String,
      default: 'text-subtitle-1',
    },
    tag: {
      type: String,
      default: 'h3',
    },
    weight: {
      type: String,
      default: 'bold',
    },
  },
}
</script>
