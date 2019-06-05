import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import MyButton from './button'

storiesOf('Buttons/Primary', module)
  .add('primary', () => '<my-button :primary="true">Primary</my-button>')
  .add('primary rounded', () => '<my-button :primary="true" :rounded="true">Primary</my-button>')
  .add('disabled', () => '<my-button :primary="true" :disabled="true">Disabled</my-button>')

Vue.component('my-button', MyButton)
