export const secondsAdded = (seconds: number, date?: Date) => {
    return new Date(date ? date.getTime() : new Date().getTime() + seconds * 1000)
}

export const generateOTPToken = (length: number) => {
    const seed = Math.round(+new Date() / 1000).toString()

    let otp = ''

    for (let i = 0; i < length; i++) {
        otp += seed[Math.floor(Math.random() * seed.length)]
    }

    return otp.trim()
}
