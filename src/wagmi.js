import { http, createConfig } from '@wagmi/core'
import { mainnet } from '@wagmi/core/chains'
import { injected, walletConnect } from '@wagmi/core/connectors'

const projectId = '243ed398a4e64d1bd3a06367e0787320' // 从 WalletConnect 获取

export const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
  connectors: [
    injected(),
    walletConnect({ projectId, showQrModal: true }),
  ],
})