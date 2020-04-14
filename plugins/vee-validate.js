import { extend, configure } from 'vee-validate'
import {
  alpha,
  alpha_num,
  alpha_spaces,
  required,
  email,
  min,
  max
} from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'The {_field_} is required.'
})

extend('alpha', {
  ...alpha,
  message: 'Please enter only alphabetic characters.'
})

extend('alpha_num', {
  ...alpha_num,
  message: 'Please enter only alpha-numeric characters.'
})

extend('alpha_spaces', {
  ...alpha_spaces,
  message: 'Please enter only alphabetic characters.'
})

extend('email', {
  ...email,
  message: 'Please enter a valid email address.'
})

extend('min', {
  ...min,
  validate(value, args) {
    return value.length >= args.length
  },
  params: ['length'],
  message: 'Enter at least {length} characters.'
})

extend('max', {
  ...max,
  validate(value, args) {
    return value.length <= args.length
  },
  params: ['length'],
  message: 'Enter less than {length} characters.'
})

extend('no_quotes', {
  validate(value) {
    const quotes = ['"', "'", '`']
    for (const quote of quotes) {
      if (value.includes(quote)) {
        return false
      }
    }
    return true
  },
  message: 'Quotes are not allowed!'
})

configure({
  classes: {
    valid: 'is-success',
    invalid: 'is-danger'
  }
})
