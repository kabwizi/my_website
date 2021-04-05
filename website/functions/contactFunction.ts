import axios from 'axios'
import { IACtion, IData } from '../pages/WebsiteMainContext'

export function sendContactFrom(
  fullNameRef: React.MutableRefObject<HTMLInputElement | null>,
  setFullNameError: React.Dispatch<React.SetStateAction<string | null>>,
  emailRef: React.MutableRefObject<HTMLInputElement | null>,
  setEmailError: React.Dispatch<React.SetStateAction<string | null>>,
  messageRef: React.MutableRefObject<HTMLTextAreaElement | null>,
  setMessageError: React.Dispatch<React.SetStateAction<string | null>>,
  file: File | null,
  setFile: React.Dispatch<React.SetStateAction<File | null>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setSendEmailStatus: React.Dispatch<
    React.SetStateAction<{
      status: boolean
      message: string
    } | null>
  >,
  context: {
    data: IData
    dispatch: React.Dispatch<IACtion>
  } | null
) {
  if (
    fullNameRef.current &&
    emailRef.current &&
    messageRef.current &&
    fullNameRef.current.value.trim() !== '' &&
    emailRef.current.value.trim() !== '' &&
    messageRef.current.value.trim() !== ''
  ) {
    const data = new FormData()
    data.append('fullName', fullNameRef.current.value)
    data.append('email', emailRef.current.value)
    data.append('message', messageRef.current.value)
    if (file) {
      data.append('file', file)
    }
    setLoading(true)
    axios
      .post('https://www.kabwiziserge.com/api/sendEmail', data, {
        validateStatus: function (status) {
          return true
        }
      })
      .then((res) => {
        setLoading(false)
        if (res.status == 200) {
          setSendEmailStatus({
            status: true,
            message:
              context?.data.languageIndex == 0
                ? 'Votre message à bien été envoyé'
                : 'Your message has been sent'
          })
          if (fullNameRef.current && emailRef.current && messageRef.current) {
            fullNameRef.current.value = ''
            emailRef.current.value = ''
            messageRef.current.value = ''
          }
          if (file) setFile(null)
        } else if (res.status == 500) {
          setSendEmailStatus({
            status: false,
            message:
              context?.data.languageIndex == 0
                ? 'Une erreur est servenue veuillez ressayer plus tard'
                : 'An error is served please try again later'
          })
        } else {
          console.log('else', res.data)
          handleServerFormInputValueMissing(
            res.data.error,
            setFullNameError,
            setEmailError,
            setMessageError,
            context
          )
        }
      })
      .catch((err) => {
        setSendEmailStatus({
          status: false,
          message:
            context?.data.languageIndex == 0
              ? 'Une erreur est servenue veuillez ressayer plus tard'
              : 'An error is served please try again later'
        })
      })
  } else {
    handleForValidation(
      fullNameRef,
      setFullNameError,
      emailRef,
      setEmailError,
      messageRef,
      setMessageError,
      context
    )
  }
}

export function handleForValidation(
  fullNameRef: React.MutableRefObject<HTMLInputElement | null>,
  setFullNameError: React.Dispatch<React.SetStateAction<string | null>>,
  emailRef: React.MutableRefObject<HTMLInputElement | null>,
  setEmailError: React.Dispatch<React.SetStateAction<string | null>>,
  messageRef: React.MutableRefObject<HTMLTextAreaElement | null>,
  setMessageError: React.Dispatch<React.SetStateAction<string | null>>,
  context: {
    data: IData
    dispatch: React.Dispatch<IACtion>
  } | null
) {
  if (fullNameRef.current?.value.trim() === '') {
    setFullNameError(
      context?.data.languageIndex == 0
        ? 'Veuillez entrer votre nom complet'
        : 'Please enter your full name'
    )
  }
  if (emailRef.current?.value.trim() === '') {
    setEmailError(
      context?.data.languageIndex == 0
        ? 'Veuillez entrer votre courriel'
        : 'Please enter your email'
    )
  }
  if (messageRef.current?.value.trim() === '') {
    setMessageError(
      context?.data.languageIndex == 0
        ? 'Veuillez écrire un message'
        : 'Please write a message'
    )
  }
}

export function handleServerFormInputValueMissing(
  serverErrorList: string[],
  setFullNameError: React.Dispatch<React.SetStateAction<string | null>>,
  setEmailError: React.Dispatch<React.SetStateAction<string | null>>,
  setMessageError: React.Dispatch<React.SetStateAction<string | null>>,
  context: {
    data: IData
    dispatch: React.Dispatch<IACtion>
  } | null
) {
  if (serverErrorList.includes('fullName')) {
    setFullNameError(
      context?.data.languageIndex == 0
        ? 'Veuillez entrer votre nom complet'
        : 'Please enter your full name'
    )
  }
  if (serverErrorList.includes('email')) {
    setEmailError(
      context?.data.languageIndex == 0
        ? 'Veuillez entrer votre courriel'
        : 'Please enter your email'
    )
  }
  if (serverErrorList.includes('message')) {
    setMessageError(
      context?.data.languageIndex == 0
        ? 'Veuillez écrire un message'
        : 'Please write a message'
    )
  }
}
