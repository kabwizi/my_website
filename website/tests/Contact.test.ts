import axios from 'axios'

import { server } from '../mocks/server.js'
// Establish API mocking before all tests.
beforeAll(() => server.listen())
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => server.close())

test('good contact form send', async () => {
  const data = await axios.post('http://localhost:3000/sendEmail', {
    fullName: 'jhone doe',
    email: 'mail@gmail.com',
    message: 'my message',
    file: 'someFile.jpg'
  })
  expect(data.data).toEqual({
    error: undefined,
    status: 'ok'
  })
})

//=================fullname error====================
describe('testing full name error', () => {
  test('contact form full name error', async () => {
    //empty
    const dataEmpty = await axios.post('http://localhost:3000/sendEmail', {
      fullName: '',
      email: 'mail@gmail.com',
      message: 'my message',
      file: 'someFile.jpg'
    })
    expect(dataEmpty.data).toEqual({
      error: ['fullName'],
      status: 'bad'
    })
    //undefined
    const dataUndefinedOne = await axios.post(
      'http://localhost:3000/sendEmail',
      {
        fullName: undefined,
        email: 'mail@gmail.com',
        message: 'my message',
        file: 'someFile.jpg'
      }
    )
    expect(dataUndefinedOne.data).toEqual({
      error: ['fullName'],
      status: 'bad'
    })
    const dataUndefinedTwo = await axios.post(
      'http://localhost:3000/sendEmail',
      {
        email: 'mail@gmail.com',
        message: 'my message',
        file: 'someFile.jpg'
      }
    )
    expect(dataUndefinedTwo.data).toEqual({
      error: ['fullName'],
      status: 'bad'
    })
    //null
    const dataNull = await axios.post('http://localhost:3000/sendEmail', {
      fullName: null,
      email: 'mail@gmail.com',
      message: 'my message',
      file: 'someFile.jpg'
    })
    expect(dataNull.data).toEqual({
      error: ['fullName'],
      status: 'bad'
    })
  })
})

//=================email error====================
describe('testing email error', () => {
  test('contact form email error', async () => {
    //empty
    const dataEmpty = await axios.post('http://localhost:3000/sendEmail', {
      fullName: 'jhon Doe',
      email: '',
      message: 'my message',
      file: 'someFile.jpg'
    })
    expect(dataEmpty.data).toEqual({
      error: ['email'],
      status: 'bad'
    })
    //undefined
    const dataUndefinedOne = await axios.post(
      'http://localhost:3000/sendEmail',
      {
        fullName: 'jhon Doe',
        email: undefined,
        message: 'my message',
        file: 'someFile.jpg'
      }
    )
    expect(dataUndefinedOne.data).toEqual({
      error: ['email'],
      status: 'bad'
    })
    const dataUndefinedTwo = await axios.post(
      'http://localhost:3000/sendEmail',
      {
        fullName: 'jhon Doe',
        message: 'my message',
        file: 'someFile.jpg'
      }
    )
    expect(dataUndefinedTwo.data).toEqual({
      error: ['email'],
      status: 'bad'
    })
    //null
    const dataNull = await axios.post('http://localhost:3000/sendEmail', {
      fullName: 'jhon Doe',
      email: null,
      message: 'my message',
      file: 'someFile.jpg'
    })
    expect(dataNull.data).toEqual({
      error: ['email'],
      status: 'bad'
    })
  })
})

//=================message error====================
describe('testing message error', () => {
  test('contact form email error', async () => {
    //empty
    const dataEmpty = await axios.post('http://localhost:3000/sendEmail', {
      fullName: 'jhon Doe',
      email: 'mail@gmail.com',
      message: '',
      file: 'someFile.jpg'
    })
    expect(dataEmpty.data).toEqual({
      error: ['message'],
      status: 'bad'
    })
    //undefined
    const dataUndefinedOne = await axios.post(
      'http://localhost:3000/sendEmail',
      {
        fullName: 'jhon Doe',
        email: 'mail@gmail.com',
        message: undefined,
        file: 'someFile.jpg'
      }
    )
    expect(dataUndefinedOne.data).toEqual({
      error: ['message'],
      status: 'bad'
    })
    const dataUndefinedTwo = await axios.post(
      'http://localhost:3000/sendEmail',
      {
        fullName: 'jhon Doe',
        email: 'mail@gmail.com',
        file: 'someFile.jpg'
      }
    )
    expect(dataUndefinedTwo.data).toEqual({
      error: ['message'],
      status: 'bad'
    })
    //null
    const dataNull = await axios.post('http://localhost:3000/sendEmail', {
      fullName: 'jhon Doe',
      email: 'mail@gmail.com',
      message: null,
      file: 'someFile.jpg'
    })
    expect(dataNull.data).toEqual({
      error: ['message'],
      status: 'bad'
    })
  })
})

describe('testing multiple missing param contact form', () => {
  test('all missing', async () => {
    const dataAll = await axios.post('http://localhost:3000/sendEmail')
    expect(dataAll.data).toEqual({
      error: ['fullName', 'email', 'message', 'file'],
      status: 'bad'
    })
  })
  test('missing first name and email', async () => {
    const dataAll = await axios.post('http://localhost:3000/sendEmail', {
      message: 'my message',
      file: 'someFile.jpg'
    })
    expect(dataAll.data).toEqual({
      error: ['fullName', 'email'],
      status: 'bad'
    })
  })
  test('missing message and file', async () => {
    const dataAll = await axios.post('http://localhost:3000/sendEmail', {
      fullName: 'jhon Doe',
      email: 'mail@gmail.com'
    })
    expect(dataAll.data).toEqual({
      error: ['message', 'file'],
      status: 'bad'
    })
  })
})
