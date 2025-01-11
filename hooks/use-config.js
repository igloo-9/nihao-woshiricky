import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const configAtom = atomWithStorage('config', {
  style: 'new-york',
  theme: 'zinc',
  radius: 0.5,
  packageManager: 'pnpm',
})

export function useConfig() {
  return useAtom(configAtom)
}
