import BaseAccordion from '../components/BaseAccordion'

export default {
  title: 'Ui/Accordion',
  component: BaseAccordion,
  argTypes: {},
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  onClick: () => console.log('test'),
  components: { BaseAccordion },
  template: '<BaseAccordion v-bind="$props"><template v-slot:product>Dette er en test</template></BaseAccordion>',
})

export const Accordion = Template.bind({})
Accordion.args = {
  label: 'Accordion',
  description: 'This is a default description',
  summary: 'Accordion Title',
}
