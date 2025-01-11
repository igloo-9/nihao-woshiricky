import Image from 'next/image'

export const Icons = {
  logo: ({ theme }) => (
    <Image
      src={`/letter-r-${theme}.png`}
      width={25}
      height={25}
      alt="alphabet denotion"
    />
  ),
}
